import React from 'react';
import { View, Text, Modal, ActivityIndicator, StyleSheet } from 'react-native';
import COLORS from '../assets/colors/Colors';
import FONTS from '../assets/Fonts';


const SpinningLoader = ({ loader }) => {
  return (
    <Modal transparent={true} animationType="slide" visible={loader}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <ActivityIndicator size="large" color={'#ED2124'} />
          <Text style={styles.loadingText}>Please wait...</Text>
        </View>
      </View>        
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  modalContent: {
    backgroundColor: COLORS.WHITE,
    paddingVertical: 20,
    paddingHorizontal: '15%',
    borderRadius: 10,
    alignItems: 'center',
  },
  loadingText: {
    color: COLORS.BLACK,
    fontSize: 14,
    fontFamily: FONTS.Regular,
  },
});

export default SpinningLoader;

