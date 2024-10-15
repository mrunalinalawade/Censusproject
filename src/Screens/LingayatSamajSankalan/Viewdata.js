import { StyleSheet, Text, View, SafeAreaView, Image ,Dimensions} from 'react-native'
import React, { useEffect } from 'react'
import WholeButton from '../../Components/WholeButton';

const { height, width } = Dimensions.get('window');
const Viewdata = (props) => {

 
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#DAEAFF'}}>

            <View style={styles.logoStyle}>
            <WholeButton Label={'Create New User'} Action={()=> {props.navigation.navigate('Form1')}} styles={{ width: width * 0.9 ,height:height*0.15,borderRadious:30}} />
            <WholeButton Label={'View All Data'} Action={()=> {props.navigation.navigate('AlldataHistory')}} styles={{ width: width * 0.9 ,height:height*0.15,borderRadious:30}} />
            </View>


        </SafeAreaView>
    )
}

export default Viewdata

const styles = StyleSheet.create({
    logoStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: height * 0.3,
     

    },
   
})