import React, { Component } from 'react'
import {
    View,
    Text
} from 'react-native'
import { Button, Icon } from 'native-base'
import { withNavigation } from 'react-navigation'

class Detail extends Component {
    constructor(props){
        super(props)
    }
    static navigationOptions = ({navigation}) => {
        return{
            title: 'Detail Harga Udang',
            headerTitleStyle: {
                textAlign: 'center',
                flexGrow:1,
                alignSelf:'center',
                fontSize:18,
                fontWeight:'bold',
            },
            headerRight: (
                <Button transparent>
                    <Icon style={{color:'rgb(167,182,210)'}} name='share' />
                </Button>
            ),
            headerLeft: (
                <Button transparent onPress = {() => navigation.navigate('Home')}>
                    <Icon style={{color:'rgb(167,182,210)'}} name='ios-arrow-back' />
                </Button>
            )
        }
      }
    render() {
        return (
           <View>
               <View style={{height: 13, backgroundColor: 'rgb(234,239,245)'}} />
               <View style={{height: 60, marginLeft: 25, marginTop: 18}}>
                   <Text style={{color:'rgb(167,182,210)'}}>Spesies: Vennamei</Text>
                   <Text style={{
                            color: '#1E90FF', 
                            fontWeight:'bold', 
                            fontSize:16,
                            marginTop: 5
                    }}>Kab Purworejo, Jawa Tengah</Text>
               </View>
               <View style={{height: 13, backgroundColor: 'rgb(234,239,245)'}} />
           </View>
        )
    }
}

export default withNavigation(Detail)