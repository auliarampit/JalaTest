import React, { Component } from 'react';
import { 
    Header, 
    Left, 
    Body, 
    Right, 
    Button, 
    Icon, 
    Title ,
    Subtitle,
} from 'native-base';
import { Text } from 'react-native'
import {withNavigation} from 'react-navigation'

class Headers extends Component {
  render() {
    return (
        <Header style={{backgroundColor: 'white'}}>
          <Left style={{flex:1}}>
            <Button transparent >
              <Icon style={{color:'rgb(167,182,210)'}} name='ios-arrow-back' />
            </Button>
          </Left>
          <Body style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Title>
              <Text style={{color: 'black',fontWeight:'100'}}>Harga Udang</Text>
            </Title>
            <Subtitle>
              <Text style={{color:'rgb(167,182,210)'}}>Ukuran 100</Text>
            </Subtitle>
          </Body>
          <Right style={{flex:1, borderColor: 'red'}}>
            <Button transparent
               onPress={() => this.props.navigation.navigate('Search')}
               >
              <Icon style={{color:'rgb(167,182,210)'}} name='share' />
            </Button>
          </Right>
        </Header>
    );
  }
}

export default withNavigation(Headers)