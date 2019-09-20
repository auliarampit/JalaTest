import React, { Component } from 'react'

import MainNavigation from './src/mainNavigator/mainNavigation'
import axios from 'axios';
import store from './src/public/store'
import { Provider } from 'react-redux'

export default class App extends Component {
  render() {
    axios.defaults.headers.common["authorization"] = "apam"

    return (
    
      <Provider store={store}>
        <MainNavigation />
      </Provider>
    )
  }
}