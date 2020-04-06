import React from 'react'
import {View, Text} from 'react-native';
import { WebView } from 'react-native-webview';

const Profile = ({ navigation }) => {
  const gitHubLogin = navigation.getParam('gitHubLogin');
  
  return <WebView source={{uri:`https://github.com/${gitHubLogin}`}} style={{flex:1}}/>
}

export default Profile;