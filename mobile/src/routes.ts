import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import Profile from './pages/Profile';



const Routes = createAppContainer(
  createStackNavigator({
    Main:{
      screen: Main,
      navigationOptions:{
        title: 'DevRadar'
      }
    },
    Profile:{
      screen: Profile,
      navigationOptions:{
        title: 'Perfil do GitHub'
      }
    }
  }, {
    defaultNavigationOptions:{
      headerTintColor:'#fff',
      headerTitleStyle:{
        color:'#fff',
        fontWeight:'bold',
      },
      headerTitleAlign:'center',
      headerStyle:{
        backgroundColor:'#4699bc',
      }
    }
  })
);

export default Routes;