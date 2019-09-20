import React, { Component } from 'react'
import {
    View,
    Text,
    FlatList,
    TouchableOpacity
} from 'react-native'
import { Button,Icon, Container, Body, Right,Spinner, List, ListItem,} from 'native-base';

import HeaderComponent from '../components/header'
import { connect } from 'react-redux';
import { getUdang } from '../public/actions/shrimpPrices';

class Home extends Component {
    static navigationOptions = {
        header: null
      }

    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            hargaUdang: [],
            sort: 'desc',
            search: ''
        }
    }

    componentDidMount = async() => {
        const {search, sort} = this.state
        await this.props.dispatch(getUdang(search, sort))
        this.setState({
            hargaUdang: this.props.shrimp
        })
    }
    sortHandle = async (data) => {
        const {search,sort} = this.state
  
        await this.props.dispatch(getUdang(search,sort))
  
        this.setState({
          sort:data,
          hargaUdang: this.props.shrimp
        })
      }
  
      searchHandle = async (data) => {
        await this.props.dispatch(getUdang(this.state.search,this.state.sort))
  
         this.setState({
          hargaUdang: this.props.shrimp,
          search:data,
        })
    }

    render() {
        console.warn(this.state.hargaUdang);
        
        return (
            <Container>
                <HeaderComponent />                    
                <View style={{height: 45, backgroundColor: 'rgb(234,239,245)'}}>
                    <Text style={{marginTop: -10, padding:20, color:'rgb(167,182,210)'}}>Harga udang di kota anda</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <View style={{flex: 1.6,}}>
                        <Text style={{
                            fontWeight: 'bold', 
                            fontSize: 25, 
                            paddingLeft: 25,
                            paddingTop: 20
                        }}>Rp 66.000</Text>

                        <Text style={{
                            color: '#1E90FF', 
                            fontWeight:'bold', 
                            fontSize:13,
                            paddingLeft: 25,
                            paddingTop: 5
                        }}>Kab Purworejo, Jawa Tengah</Text>

                        <Text style={{fontSize:11, paddingLeft:25, paddingTop: 20, color:'rgb(167,182,210)'}}>21 Oktober 2018 oleh Aulia</Text>
                    </View>
                    
                    <View style={{flex:1, justifyContent:'flex-end', alignItems:'flex-end'}}>
                        <Button transparent>
                            <Icon style={{color:'rgb(167,182,210)', marginTop: 45}} name='share' />
                        </Button>
                        <Text onPress = {() => this.props.navigation.navigate('Detail')} style={{
                            fontSize:13, 
                            marginTop: 50, 
                            paddingRight:20, 
                            color:'rgb(167,182,210)',
                            height: 20,
                            }}>
                            Harga Lengkap >
                        </Text>
                    </View>
                </View>
                
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        shrimp: state.ShrimpPrices
    }
}
export default connect(mapStateToProps)(Home)