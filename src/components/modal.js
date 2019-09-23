import React, { Component } from 'react'
import { View, TouchableOpacity, Picker } from 'react-native'
import Modal from 'react-native-modal'
import { Button,
    Icon, 
    Text,
     Input,Footer, 
     FooterTab,
     List,
     ListItem,
} from 'native-base'
import { connect } from 'react-redux';
import { getRegion } from '../public/actions/shrimpPrices';


class ModalComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          searchKey:'',
          riwayat:[],
          RegionList: [],
        }
      }

      componentDidMount = async() => {
        const {search, sort} = this.state
        await this.props.dispatch(getRegion(search, sort))
        this.setState({
            RegionList: this.props.Regions
        })
        console.log('Component', this.state.RegionList[0].name);
        
    }
    
     sendData = (data) => {
        this.props.parentCallback(data)
    }
    
    searchData = (data) => {
        this.props.searchCallback(data)
    }
    ModalListItem = () => {
        
                        {this.state.RegionList.map((value) => {
                            return (<Picker.Item label={value.province_name} value={value.id} />)
                        })}
                    
    }
    render() {
        console.log(' data modal', this.state.RegionList);
        
        return (
            <Modal
                onSwipeComplete={this.props.toggleModal}
                onBackdropPress={this.props.toggleModal}
                isVisible={this.props.visibility}
                swipeDirection='down'
                style={{
                    justifyContent: 'flex-end',
                    margin: 0
                }}
            >
            {this.props.buttonID == 'filter' ?
                <>
                <View 
                    style={{ 
                    height: '70%',
                    backgroundColor: 'rgb(0,80,172)',
                    padding: 16,
                    }}
                >
                
                <View style={{ height: '10%' }} />
                    <View>
                        <Text style={{color: 'white'}}>Provinsi :</Text>
                        {/* <Button bordered light> */}
                        <Picker bordered light
                        style={{width:'80%', }}
                        mode='dropdown'
                        selectedValue={this.state.RegionList[0].id}
                        onValueChange={(value) => this.setState({ RegionList: value })}>

                        {this.ModalListItem()}
                        </Picker>
                        {/* </Button> */}
                    </View>
                    
                </View>

                <Footer>
                    <FooterTab>
                    <Button onPress={()=>this.searchData('')} bordered light>
                        <Text>reset filter</Text>
                    </Button>
                    <Button onPress={()=>this.searchData(this.state.searchKey)} bordered light >
                        <Text>filter lokasi</Text>
                    </Button>
                    </FooterTab>
                </Footer>
                </>
                :
                <View 
                    style={{ 
                    height: '35%',
                    backgroundColor: '#0050ac',
                    }}
                >
                    <List>
                        <ListItem onPress={()=>this.sendData('Terdekat')}>
                            <TouchableOpacity>
                                <Text style={{color:'white'}}>Terdekat</Text>
                            </TouchableOpacity>
                        </ListItem>

                        <ListItem onPress={()=>this.sendData('asc')}>
                            <TouchableOpacity>
                                <Text style={{color:'white'}}>Termurah</Text>
                            </TouchableOpacity>
                        </ListItem>

                        <ListItem onPress={()=>this.sendData('desc')}>
                            <TouchableOpacity>
                                <Text style={{color:'white'}}>Termahal</Text>
                            </TouchableOpacity>
                        </ListItem>
                    </List>
                
                <Button style={{
                    backgroundColor:'white', 
                    width: '90%', 
                    marginLeft: 20,
                    marginTop:8,
                    borderRadius: 10
                }} onPress={this.props.toggleModal} bordered full light>
                    <Text style={{ color: '#1E90FF'}}>Urutkan</Text>
                </Button>

                </View>
                }
            </Modal>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        Regions: state.regions.ListRegion
    }
}

export default connect(mapStateToProps) (ModalComponent)
