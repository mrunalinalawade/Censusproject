import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { WIDTH } from '../Helpers/Dimensions';
import FONTS from '../assets/Fonts';



const GenderDropDown = (props) => {
  const data = [
    { label: 'Male', value: '1' },
    { label: 'Female', value: '2' },
    { label: 'Other', value: '3' },
  ];

  const renderItem = (item) => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>
      </View>
    );
  };

  console.log("Selected Gender: ", props.Gender);

  return (
    <Dropdown
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      iconStyle={styles.iconStyle}
      iconColor={'#1C57A5'}
      containerStyle={styles.containerStyle}
      data={data}
      activeColor={'#FFF'}
      maxHeight={350}
      labelField="label"
      valueField="label"
      placeholder="Select Gender"
      value={props.Gender}
      onChange={item => {
        props.setGender(item.label);
        props.setGenderError('');
      }}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  dropdown: {
    paddingVertical: '3%',
    borderRadius: 8,
    backgroundColor: '#DAEAFF',
    width: WIDTH * 0.9,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#1C57A5',
  },
  item: {
    borderBottomWidth: 1,
    borderBottomColor: '#F6F6F633',
    width: WIDTH * 0.8,
    alignSelf: 'center',
    paddingVertical: '2%',
  },
  textItem: {
    flex: 1,
    fontSize: 15,
    fontFamily: FONTS.semibold,
    color:'#1C57A5',
    paddingVertical: '2%',
  },
  placeholderStyle: {
    fontSize: 15,
    fontFamily: FONTS.semibold,
    color: '#1C57A5',
    paddingLeft: '5.5%',
  },
  selectedTextStyle: {
    fontSize: 15,
    fontFamily: FONTS.medium,
    color: '#1C57A5',
    paddingLeft: '6%',
  },
  iconStyle: {
    width: 30,
    height: 30,
    marginRight: 13,
  },
  containerStyle: {
    backgroundColor: '#DAEAFF',
    borderRadius: 8,
    borderWidth: 0,
    borderColor: 'transparent',
  },
  Errorstyle: {
    color: 'red',
    fontSize: 13,
    fontFamily: FONTS.regular,
  },
});

export default GenderDropDown;
