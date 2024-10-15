import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import FONTS from '../assets/Fonts';



const WholeButton = (props) => {
    return (
        <TouchableOpacity
            disabled={props.disabled}
            onPress={props.Action}
            style={[styles.WholeButtonStyle, styles.linearGradient, props.styles]}>
            <Text style={styles.buttonText}>{props.Label}</Text>

        </TouchableOpacity>
    );
};

export default WholeButton;

const styles = StyleSheet.create({
    linearGradient: {
        marginVertical: '4%',
        paddingVertical: '4.5%',
        borderRadius: 8,
        backgroundColor: '#1C57A5',
         alignItems:'center',
         justifyContent:'center'
    },
    buttonText: {
        fontSize: 19,
        color: '#fff',
        textAlign: 'center',
        fontFamily: FONTS.semibold,
       
    },
    WholeButtonStyle: {
        width: '90%',
        alignSelf: 'center',
       
    },
});
