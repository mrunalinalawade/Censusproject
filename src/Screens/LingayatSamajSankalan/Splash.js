import { StyleSheet, Text, View, SafeAreaView, Image, Dimensions } from 'react-native'
import React, { useEffect } from 'react'
import COLORS from '../../assets/colors/Colors'


const { height, width } = Dimensions.get('window');
const Splash = (props) => {

    useEffect(() => {
        setTimeout(() => {
            props.navigation.navigate('Viewdata')
        }, 3000)
    }, [])
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#DAEAFF'}}>

            <View style={styles.logoStyle}>
               <Text style={{color:'#2372B5',fontSize:30,alignSelf:'center',width:'90%',textAlign:'center',letterSpacing:1}}>Sponsored by Artha Siddhi Patpedhi</Text>
            </View>


        </SafeAreaView>
    )
}

export default Splash

const styles = StyleSheet.create({
    logoStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: height * 0.35,
     

    },
   
})