import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

import Home from '../screens/home'
import Detail from '../screens/detail'
import AuthLoading from '../components/authLoading'

const AppStack = createStackNavigator({
    Home: Home, 
    Detail: Detail
})

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoading,
      App: AppStack,
    },
    {
      initialRouteName: 'AuthLoading',
    }
  ));