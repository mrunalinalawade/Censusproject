import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';


import FONTS from '../assets/Fonts';
import { WIDTH } from '../Helpers/Dimensions';


const Buttons = (props) => {
  return (
    <View style={[styles.mainContainer, props.styles]}>
      <TouchableOpacity
        disabled={props.disabled1}
        onPress={props.Action1}
        style={[styles.linearGradient1, props.ExternalStyle]}>
        <Text style={[styles.buttonText, { color: '#fff' }]}>
          {props.Label1}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        disabled={props.disabled2}
        onPress={props.Action2}
        style={[{  alignSelf: 'center' }, styles.linearGradient2, props.ExternalStyle1]}>

        <Text style={styles.buttonText}>{props.Label2}</Text>

      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: WIDTH * 0.9,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginTop: '5%',
  },
  linearGradient1: {
    paddingVertical: 13,
    borderRadius: 8,
    width: '48%',

    backgroundColor: '#1C57A5'
  },
  linearGradient2: {
    paddingVertical: 13,
    borderRadius: 8,
    backgroundColor: '#1C57A5'
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    fontFamily: FONTS.semiBold,
  },
});



export default Buttons;
