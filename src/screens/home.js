import React, { Component } from 'react'
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native'
import { 
    Button,
    Icon,
    Container,
    Content,
} from 'native-base'
import FooterComponent from '../components/footer'

import HeaderComponent from '../components/header'
import { connect } from 'react-redux';
import { getUdang } from '../public/actions/shrimpPrices'
import ModalComponent from '../components/modal'

class Home extends Component {
    static navigationOptions = {
        header: null
      }

    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            isModalVisible: false,
            hargaUdang: [],
            sort: 'desc',
            search: '',
            buttonStatus: ''
        }
    }

    toggleModal = () => {
        this.setState({ 
            isModalVisible: !this.state.isModalVisible 
        })
      }

    componentDidMount = async() => {
        const {search, sort} = this.state
        await this.props.dispatch(getUdang(search, sort))
        this.setState({
            hargaUdang: await this.props.Shrimp
        })
    }
    sortHandle = async (data) => {
        const {search,sort} = this.state
  
        await this.props.dispatch(getUdang(search,sort))
  
        this.setState({
          sort:data,
          hargaUdang: this.props.Shrimp
        })
      }
  
    searchHandle = async (data) => {
        await this.props.dispatch(getUdang(this.state.search,this.state.sort))
  
         this.setState({
          hargaUdang: this.props.Shrimp,
          search:data,
        })
    }
    modalHandle = (val) => {
        this.setState({
          buttonStats: val,
          isModalVisible: !this.state.isModalVisible,
        })
    }

    buttonStats = (value) => {
        this.setState({ buttonStatus:value })
      }

    render() {
        const test = this.state.hargaUdang
        console.log('state',test)
        console.log('item', test.species);
        
        
        return (
            <Container>
                <HeaderComponent />  
                <Content>               
                <View style={{height: 45, backgroundColor: 'rgb(234,239,245)'}}>
                    <Text style={{marginTop: -10, padding:20, color:'rgb(167,182,210)'}}>Harga udang</Text>
                </View>
                {this.state.hargaUdang.map(item => {
                    return (
                        <View style={{flexDirection:'row'}}>
                    <View style={{flex: 1.6,}}>
                        <Text style={{
                            fontWeight: 'bold', 
                            fontSize: 25, 
                            paddingLeft: 25,
                            paddingTop: 20
                        }}>Rp.{item.size_100}</Text>

                        <Text style={{
                            color: '#1E90FF', 
                            fontWeight:'bold', 
                            fontSize:13,
                            paddingLeft: 25,
                            paddingTop: 5
                        }}>{item.region.full_name}</Text>

                        <Text style={{fontSize:11, 
                            paddingLeft:25, 
                            paddingTop: 20, 
                            color:'rgb(167,182,210)'
                        }}>{item.date} oleh </Text>
                    </View>
                    
                    <View style={{flex:1, justifyContent:'flex-end', alignItems:'flex-end'}}>
                        <Button transparent>
                            <Icon style={{color:'rgb(167,182,210)', marginTop: 45}} name='share' />
                        </Button>
                        <TouchableOpacity>
                        <Text onPress = {() => this.props.navigation.navigate('Detail',{data:item})} style={{
                            fontSize:13, 
                            marginTop: 50, 
                            paddingRight:20, 
                            color:'rgb(167,182,210)',
                            height: 20,
                            }}>
                            Harga Lengkap >
                        </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                    )
                })}
                </Content>
                <ModalComponent 
                    parentCallback={this.sortHandle} 
                    searchCallback={this.searchHandle} 
                    toggleModal={()=> this.toggleModal()} 
                    visibility={this.state.isModalVisible} 
                    buttonID={this.state.buttonStats}
                    hargaUdang={this.state.hargaUdang}
                />
                <FooterComponent 
                    sortStatus={this.state.sort}
                    filterStatus={this.state.search}
                    modalFilter={() => this.modalHandle('filter')} 
                    modalSort={() => this.modalHandle('sort')}
                />            
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        Shrimp: state.ShrimPrices.ListHargaUdang
    }
}
export default connect(mapStateToProps)(Home)