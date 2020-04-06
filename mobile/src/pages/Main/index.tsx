import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, View, Text, TextInput, TouchableOpacity } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { requestPermissionsAsync, getCurrentPositionAsync} from 'expo-location'
import { MaterialIcons } from '@expo/vector-icons';
import api from '../../services/api';

const Main = ({navigation}) => {
  const [devs, setDevs ] = useState([]);
  const [currentLocation, setCurrentLocation ] = useState(null);

  useEffect(() => {
    async function loadInitialLocation() {
      const { granted } = await requestPermissionsAsync();

      if(granted){
        const { coords } = await getCurrentPositionAsync({
          enableHighAccuracy:true,
        });

        const { latitude, longitude } = coords;
        setCurrentLocation({
          latitude,
          longitude,
          latitudeDelta:0.04,
          longitudeDelta:0.04,

        })
      }
      if(!currentLocation){
        return null;
      }
    }
  
    loadInitialLocation();
  },[]);

  const loadDevs = async () => {
    const { latitude, longitude } = currentLocation;
    const response = await api.post('/search',{
      tecks:["React JS", "React Native"],
      latitude:-21.7675802,
      longitude:-43.3481689,
    });
    setDevs(response.data);
  }

  const handleRegionChanged = (region) =>{
      setCurrentLocation(region)
  }

  const handleNavigation = ( gitHubLogin ) => {
    navigation.navigate('Profile', {gitHubLogin:gitHubLogin})
  }

  return (
    <>
      <MapView 
        onRegionChangeComplete={handleRegionChanged} 
        initialRegion={currentLocation} 
        style={styles.map}
      >
        {devs.map(dev => (
          <Marker
          key={dev._id}
          coordinate={{
            longitude: dev.location.coordinates[0],
            latitude: dev.location.coordinates[1], 
            
          }}
        >
          <Image 
          style={styles.avatar} 
          source={{uri:dev.avatar_url}}
          />
          <Callout onPress={() => handleNavigation(dev.login_git_hub)}>
            <View style={styles.callout}>
              <Text style={styles.devName}>{ dev.name }</Text>
              <Text style={styles.devBio}>{ dev.bio }</Text>
              <Text style={styles.devTecks}>{ dev.tecks.join(', ') }</Text>
            </View>
          </Callout>
        </Marker>
        ))}
      </MapView>
      <View style={styles.searchForm}>
        <TextInput 
          style={styles.serachInput}
          placeholder="Buscar Devs por Tecnologias"
          placeholderTextColor="#999"
          autoCapitalize="words"
          autoCorrect={false}
        />
        <TouchableOpacity onPress={loadDevs} style={styles.searchBtn}>
          <MaterialIcons name="my-location" size={20} color="#fff"/>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
  avatar:{
    width:54,
    height:54,
    borderRadius:4,
    borderWidth:4,
    borderColor:'#fff',
  },
  callout:{
    width:260,
  },
  devName:{
    fontWeight:'bold',
    fontSize:16,
  },
  devBio:{
    color:'#666',
    marginTop:5,
  },
  devTecks:{
    marginTop:5,
  },
  searchForm:{
    position:'absolute',
    top:20,
    left:20,
    right:20,
    zIndex:5,
    flexDirection:'row',
  },
  serachInput:{
    flex:1,
    height:50,
    backgroundColor:"#fff",
    color:"#333",
    borderRadius:25,
    paddingHorizontal:20,
    fontSize:16,
    shadowColor:"#000",
    shadowOpacity:0.2,
    shadowOffset:{
      width:4,
      height:4,
    },
    elevation:2
  },
  searchBtn:{
    width: 50,
    height:50,
    backgroundColor:"#8e4dff",
    borderRadius:25,
    justifyContent:'center',
    alignItems:'center',
    marginLeft:15,

  }
});

export default Main;
