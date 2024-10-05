import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

import { WIDTH } from '../Helpers/Dimensions';
import FONTS from '../assets/Fonts';
import COLORS from '../assets/colors/Colors';


const SubcastDropdown = (props) => {
  const data = [
    { label: 'Pancham', value: '1' },
    { label: 'Tirali', value: '2' },
    { label: 'Sheelwant', value: '3' },
    { label: 'Dikshawant', value: '4' },
    { label: 'Nhavi', value: '5' },
    { label: 'Jangam', value: '6' },
    { label: 'Sutar', value: '7' },
    { label: 'Shivashimpi', value: '8' },
    { label: 'Teli', value: '9' },
    { label: 'Koshti', value: '10' },
    { label: 'Banjagar', value: '11' },
    { label: 'Tamboli', value: '12' },
    { label: 'Kulwant Wani', value: '13' },
    { label: 'Gawali', value: '14' },
    { label: 'Mali', value: '15' },
    { label: 'Sali', value: '16' },
    { label: 'Gurav', value: '17' },
    { label: 'Kumbhar', value: '18' },
    { label: 'Other', value: '19' },
  ];

  const renderItem = (item) => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>
      </View>
    );
  };

  console.log("Selected Gender: ", props.Subcast);

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
      placeholder="Select Subcast"
      value={props.Subcast}
      onChange={item => {
        props.setSubcast(item.label);
        props.setSubcastError('');
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

export default SubcastDropdown;
