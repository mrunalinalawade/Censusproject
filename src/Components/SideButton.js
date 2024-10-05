import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import FONTS from '../assets/Fonts';



const SideButton = (props) => {
    return (
        <TouchableOpacity
            disabled={props.disabled}
            onPress={props.Action}
            style={[styles.WholeButtonStyle, styles.linearGradient, props.styles]}>
            <Text style={styles.buttonText}>{props.Label}</Text>

        </TouchableOpacity>
    );
};

export default SideButton;

const styles = StyleSheet.create({
    linearGradient: {
        marginVertical: '4%',
        paddingVertical: '4.5%',
        borderRadius: 8,
        backgroundColor: '#1C57A5'
    },
    buttonText: {
        fontSize: 18,
        color: '#fff',
        textAlign: 'center',
        fontFamily: FONTS.semibold,
    },
    WholeButtonStyle: {
        width: '50%',
        alignSelf:'flex-end',
    },
});
