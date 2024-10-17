import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Platform,
} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
//   import Country from './Country';

import { WIDTH } from '../../Helpers/Dimentions';

import FONTS from '../assets/Fonts';
import COLORS from '../assets/colors/Colors';

const { height, width } = Dimensions.get('window');

const Inputfield = (props) => {
  const { LabelStyle, ContainerStyle } = styles;

  return (
    <>
    <View style={[ContainerStyle, props.ContainerStyle]}>
      <View
        style={
          props.Replace
            ? styles.Replace
            : [styles.InputFieldStyle, props.InputFieldStyle]
        }>
        <TextInput
          editable={props.edit}
          placeholder={props.placeholder}
          placeholderTextColor={'#1C57A5'}
          autoCapitalize="none"
          style={[
            styles.PlaceholderStyle,
            styles.InputFieldStyle,
            {
              width:
                props.PasswordField || props.CorrectEmailTrue ? '90%' : '99%',
              backgroundColor: props.backgroundColor,
              paddingVertical: Platform.OS === 'ios' ? '5.5%' : '4.2%',
              paddingLeft: '3.2%',
            },
          ]}
          {...props}
          selectionColor={COLORS.INPUTLABELDARKGRAY}
          secureTextEntry={props.ShowPassword}
          maxLength={props?.MaxLength}
        />
        {props.CorrectEmailTrue && (
          <View style={{ marginRight: -8 }}>
            <ForgotCheckIcon />
          </View>
        )}
        {props.PasswordField ? (
          <TouchableOpacity
            style={[props.passwordIconStyle]}
            onPress={props.PasswordPress}>
            <Ionicons
              name={props.ShowPassword ? 'eye-off-outline' : 'eye'}
              color={COLORS.WHITE}
              size={24}
            />
          </TouchableOpacity>
        ) : props.SearchField ? (
          <TouchableOpacity
            style={[props.passwordIconStyle]}
            onPress={props.PasswordPress}>
            <Entypo name={'cross'} color={COLORS.GRAYCOLORMEDIUM} size={20} />
          </TouchableOpacity>
        ) : null}
      </View>
    
    </View>
      {props.Error && props.ShowError && (
        <Text style={[styles.Errorstyle, props.Errorstyle]}>{props.Error}</Text>
      )}
      </>
  );
};

export default Inputfield;

const styles = StyleSheet.create({
  SearchField: {
    backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    paddingHorizontal: '4%',
    paddingVertical: '2%',
    justifyContent: 'space-between',
  },
  ContainerStyle: {
    alignSelf: 'center',
    width: width * 0.9,
    marginVertical: '1.5%',
    borderWidth: 1,
    borderColor: '#1C57A5',
    borderRadius: 8,
  },
  LabelStyle: {
    fontSize: 14,
    fontFamily: FONTS.regular,
    color: COLORS.PLACEHOLDER_COLOR,
    fontWeight: '400',
  },
  PlaceholderStyle: {
    color: '#1C57A5',
    fontSize: 15,
    width: '90%',
    fontFamily: FONTS.regular,
  },
  InputFieldStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#DAEAFF',
    paddingHorizontal: 8,
    fontSize: 15,
    borderRadius: 8,
    fontFamily: FONTS.semibold,
    color: '#1C57A5',
  },
  Errorstyle: {
    color: 'red',
    fontSize: 13,
    fontFamily: FONTS.regular,
    // marginTop: 1,
    fontWeight: '400',
    paddingLeft: 7,
  },
  Replace: {},
});
