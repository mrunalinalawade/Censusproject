import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Buttons from '../../Components/Buttons';
import { WIDTH } from '../../Helpers/Dimensions';
const { height, width } = Dimensions.get('window');
import COLORS from '../../assets/colors/Colors';
import FONTS from '../../assets/Fonts';
import Inputfield from '../../Components/Inputfield';
import GenderDropDown from '../../Components/GenderDropDown';
import { ValidateFullname } from '../../Components/ValidationConfig/Validations';
import BusinessandServiceDropdown from '../../Components/BusinessandServiceDropdown';



const Form3 = (props) => {
  const [employer, setemployer] = useState('');
  const [employerError, setemployerError] = useState('');
  const [organisation, setorganisation] = useState('');
  const [organisationError, setorganisationError] = useState('');

  const [Business, setBusiness] = useState(null);
  const [BusinessError, setBusinessError] = useState('');


  const [ShowError, setShowError] = useState({
    employerError: false,
    organisationError: false,
    BusinessError: false,
  });



  const Form3com = () => {
    let employError = ValidateFullname(employer);
    let organisationErr = ValidateFullname(organisation);
   



    if (employError == '' && organisationErr == '' && Business !== null ) {
      props.navigation.navigate('Form4')

    } else {
      setemployerError(employError);
      setorganisationError(organisationErr);
      setBusinessError("Please select a Business or Service");

      setShowError({
        employerError: true,
        organisationError: true,
        BusinessError: true,
      });
    }

  }




  return (
    <KeyboardAwareScrollView
      style={{ flex: 1, alignSelf: 'center' }}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.viewStyle}>

        <View style={styles.headerContainer}>
          <Text style={styles.headStyle}>Occupation Details</Text>
        </View>


        <Text style={styles.firstname}>
          Business Or Service
          <Text style={styles.starStyle}>*</Text>
        </Text>
        <View style={{ marginTop: '3.3%' }}>
          <BusinessandServiceDropdown
            setBusiness={setBusiness}
            Business={Business}
            setBusinessError={setBusinessError}
          />
          {BusinessError && Business === null && (
            <Text style={styles.Errorstyle1}>{BusinessError}</Text>
          )}
        </View>

        <Text style={styles.firstname}>
          Name Of the firm or employer
          <Text style={styles.starStyle}>*</Text>
        </Text>
        <Inputfield
          placeholder={'Enter Name Of the firm or employer'}
          MaxLength={256}
          value={employer}


          onBlur={() => {
            if (employer != '' || employer != undefined) {
              setShowError((prevState) => ({
                ...prevState,
                employerError: true,
              }));
            }
          }}
          onChangeText={(text) => {
            if (employer != '' || employer != undefined) {
              setemployer(text);
              setemployerError(ValidateFullname(text));
            }
          }}
          ShowError={ShowError.employerError}
          Error={employerError}
        />

        <Text style={styles.firstname}>
          Your designation @ organisation
          <Text style={styles.starStyle}>*</Text>
        </Text>
        <Inputfield
          placeholder={'Enter Your designation @ organisation'}
          MaxLength={256}
          value={organisation}

          onBlur={() => {
            if (organisation != '' || organisation != undefined) {
              setShowError(prevState => ({
                ...prevState,
                fullNmError: true,
              }));
            }
          }}
          onChangeText={(text) => {
            if (organisation != '' || organisation != undefined) {
              setorganisation(text);
              setorganisationError(ValidateFullname(text));
            }
          }}

          ShowError={ShowError.organisationError}
          Error={organisationError}
        />

        <Buttons
          Label1="Back"
          Label2="Next"
          Action1={() => props.navigation.goBack()}
          Action2={Form3com}
          ExternalStyle={{
            width: width * 0.42,
            alignSelf: 'center',

          }}
          ExternalStyle1={{
            width: width * 0.42,
            alignSelf: 'center',
          }}
          styles={{ width: WIDTH * 0.89, }}
          linearGradient3={{
            paddingVertical: 11,
          }}
        />


      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  headStyle: {
    color: '#1C57A5',
    fontSize: 28,
    fontFamily: FONTS.bold,
    alignItems: 'center',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  typename: {
    color: '#2372B5',
    fontSize: 18,
    fontFamily: FONTS.regular,
    alignItems: 'center',
    textAlign: 'center',
  },
  firstname: {
    color: '#2372B5',
    fontSize: 14,
    fontFamily: FONTS.bold,
    marginVertical: '2%',
  },
  starStyle: {
    color: 'red',
    fontSize: 14,
    fontFamily: FONTS.regular,
  },
  viewStyle: {
    width: WIDTH * 0.9,
    marginVertical: '4%',

  },
  Errorstyle1: {
    color: COLORS.ERROR_COLOR_RED,
    fontSize: 12,
    marginTop: 5,
  },
  headerContainer: {
    width: WIDTH * 0.9,
    backgroundColor: '#DAEAFF',
    borderRadius: 8,
    alignItems: 'center',
    padding: '4%',
  },
  subHeaderContainer: {
    width: WIDTH * 0.9,

    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    alignItems: 'center',
    padding: '2%',
  },
  datePickerButton: {
    backgroundColor: '#DAEAFF',
    width: WIDTH * 0.9,
    paddingVertical: '4.9%',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#1C57A5',
    marginTop: '1.5%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '5.5%',
    alignItems: 'center',
  },
  dateStyle: {
    fontSize: 14,
    color: '#1C57A5',
    fontFamily: FONTS.regular,
  },
  dateStyle1: {
    fontSize: 14,
    color: '#1C57A5',
    fontFamily: FONTS.regular,
  },
});

export default Form3;
