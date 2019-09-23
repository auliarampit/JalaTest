import React, { Component } from 'react'
import {
    View,
    Text,
    Dimensions
} from 'react-native'
import { Button, Icon, Left,ListItem, Body, Content } from 'native-base'
import { withNavigation } from 'react-navigation'
import { LineChart } from 'react-native-chart-kit'

const screenWidth = Dimensions.get('screen').width

class Detail extends Component {
    constructor(props){
        super(props)
        this.state = {
            data: props.navigation.getParam('data')
        }
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
        const item = this.state.data        
        const data = {
            labels: ['size 50', 'size 60', 'size 70', 'size 80', 'size 90', 'size 100'],
            datasets: [{
              data: [ item.size_50, item.size_60, item.size_70, item.size_80, item.size_90, item.size_100 ],
              color: (opacity = 1) => `rgba(26, 119, 223, ${opacity})`, // optional
              strokeWidth: 2 // optional
            }]
          }
          const chartConfig = {
            backgroundGradientFrom: '#ffffff',
            backgroundGradientTo: '#ffffff',
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            strokeWidth: 2 // optional, default 3
          }
        return (
            <Content>
           <View>
               <View style={{height: 13, backgroundColor: 'rgb(234,239,245)'}} />
               <View style={{height: 60, marginLeft: 25, marginTop: 18}}>
                   <Text style={{color:'rgb(167,182,210)'}}>Species: {item.species.name}</Text>
                   <Text style={{
                            color: '#1E90FF', 
                            fontWeight:'bold', 
                            fontSize:16,
                            marginTop: 5
                    }}>{item.region.full_name}</Text>
               </View>
               <View style={{height: 13, backgroundColor: 'rgb(234,239,245)'}} />
               <ListItem>
                   <Left>
                      <Text>Harga ukuran 100</Text>
                   </Left>
                   <Body>
                       <Text style={{textAlign: 'right'}}>Rp.{item.size_100}</Text>
                   </Body>
               </ListItem>
               <ListItem>
                   <Left>
                      <Text>Harga ukuran 90</Text>
                   </Left>
                   <Body>
                       <Text style={{textAlign: 'right'}}> Rp.{item.size_90} </Text>
                   </Body>
               </ListItem>
               <ListItem>
                   <Left>
                      <Text>Harga ukuran 80</Text>
                   </Left>
                   <Body>
                       <Text style={{textAlign: 'right'}}> Rp.{item.size_80} </Text>
                   </Body>
               </ListItem>
               <ListItem>
                   <Left>
                      <Text>Harga ukuran 70</Text>
                   </Left>
                   <Body>
                       <Text style={{textAlign: 'right'}}> Rp.{item.size_70} </Text>
                   </Body>
               </ListItem>
               <ListItem>
                   <Left>
                      <Text>Harga ukuran 60</Text>
                   </Left>
                   <Body>
                       <Text style={{textAlign: 'right'}}> Rp.{item.size_60} </Text>
                   </Body>
               </ListItem>
               <ListItem>
                   <Left>
                      <Text>Harga ukuran 50</Text>
                   </Left>
                   <Body>
                       <Text style={{textAlign: 'right'}}> Rp.{item.size_50} </Text>
                   </Body>
               </ListItem>
               
               <View style={{height: 13, backgroundColor: 'rgb(234,239,245)'}} />

               <LineChart
                data={data}
                width={screenWidth}
                height={220}
                chartConfig={chartConfig}
               />

               <View style={{height: 13, backgroundColor: 'rgb(234,239,245)'}} />
               <View style={{height: 60, marginLeft: 25, marginTop: 18}}>
                   <Text style={{color:'rgb(167,182,210)'}}>Catatan:</Text>
                   <Text style={{
                            color: '#1E90FF', 
                            fontWeight:'bold', 
                            fontSize:16,
                            marginTop: 5,
                            color:'rgb(167,182,210)'
                    }}>Harga sewaktu waktu bisa berubah</Text>
               </View>
               <View style={{height: 13, backgroundColor: 'rgb(234,239,245)'}} />
               <View style={{height: 60, marginLeft: 25, marginTop: 18,}}>
                   <Text style={{color:'rgb(167,182,210)'}}>Diedit pada:</Text>
                   <Text style={{
                            color: '#1E90FF', 
                            fontWeight:'bold', 
                            fontSize:16,
                            marginTop: 5,
                            color:'rgb(167,182,210)'
                    }}>{item.date} oleh {item.creator.name}</Text>
                </View>

           </View>
           </Content>
        )
    }
}

export default withNavigation(Detail)