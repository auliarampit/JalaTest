import React from 'react'
import { TouchableOpacity, View, StyleSheet } from 'react-native'
import {Footer, FooterTab, Icon, Text} from 'native-base'

const FooterComponent = ({filterStatus, sortStatus,modalFilter,modalSort}) => {
           
    return (
        <Footer>
            <FooterTab>
                <View style={styles.view}>
                <TouchableOpacity onPress={modalFilter} style={{backgroundColor:'rgb(0,80,172)'}}>
                    <Icon type={'Ionicons'} name={'md-funnel'} style={styles.icon} />
                    <Text style={styles.filter}>Filter Lokasi</Text>
                    {
                        filterStatus == '' || null ?
                        <Text style={styles.diterapkan}>belum mencari </Text>
                        :
                        <Text style={styles.diterapkan}> {filterStatus} diterapkan</Text>
                    } 
                </TouchableOpacity>
                </View>

                <View style={styles.view2}>
                <TouchableOpacity onPressOut={modalSort}>
                    <Icon type={"FontAwesome5"} name={"sort-amount-down"} style={styles.icon} />
                    <Text style={styles.filter}>Urutkan</Text>
                    <Text style={styles.diterapkan}> {sortStatus} </Text> 
                </TouchableOpacity>
                </View>
            </FooterTab>
        </Footer>
    )
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        alignItems: 'center'
    },
    view2: {
        flex: 1,
        alignItems: 'center',
        backgroundColor:'rgb(27,119,223)'
    },
    filter: {
        marginLeft: 20,
        marginTop: -35,
        fontSize: 18,
        color: 'white',
    },
    diterapkan: {
        marginLeft: 20, 
        fontSize: 10,
        color: 'white'
    },
    icon: {
        marginLeft:-13,
        marginTop: 16,
       color: 'white'
    }
})

export default FooterComponent
