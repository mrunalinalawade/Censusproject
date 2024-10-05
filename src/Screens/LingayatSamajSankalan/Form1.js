import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { WIDTH } from '../../Helpers/Dimensions';
import COLORS from '../../assets/colors/Colors';
import FONTS from '../../assets/Fonts';
import Inputfield from '../../Components/Inputfield';
import GenderDropDown from '../../Components/GenderDropDown';
import DatePicker from 'react-native-date-picker';
import SubcastDropdown from '../../Components/SubcastDropdown';
import { VECTOR_ICONS } from '../../assets/Theme';
import moment from 'moment';
import SideButton from '../../Components/SideButton';

const Form1 = (props) => {
  const [FName, setFName] = useState('');
  const [FNameError, setFNameError] = useState('');
  const [MName, setMName] = useState('');
  const [MNameError, setMNameError] = useState('');
  const [SName, setSName] = useState('');
  const [SNameError, setSNameError] = useState('');
  const [Gender, setGender] = useState(null);
  const [GenderError, setGenderError] = useState('');
  const [Subcast, setSubcast] = useState(null);
  const [SubcastError, setSubcastError] = useState('');
  const [birthDate, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [dateSelected, setDateSelected] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [date100YearsAgo, setDate100YearsAgo] = useState(
    new Date(new Date().setFullYear(new Date().getFullYear() - 100))
  );
  const [date18YearsAgo, setDate18YearsAgo] = useState(
    new Date(new Date().setFullYear(new Date().getFullYear() - 18))
  );
  const [ShowError, setShowError] = useState({
    FNameError: false,
    MNameError: false,
    SNameError: false,
    GenderError:false,
    SubcastError:false,
  });



  const isValidDate = (Date_) => {
    const selectedDate = Date_ || minDate;
    setErrorMessage('');
    if (selectedDate <= minDate || selectedDate >= maxDate) {
      console.log(
        selectedDate <= minDate || selectedDate >= maxDate,
        birthDate,
        'birthDate',
        dateSelected,
      );
      setErrorMessage(
        dateSelected ? '' : 'Please enter a valid birth date.',
      );
      return false;
    } else {
      setErrorMessage('');
      return true;
    }
  };


  return (
    <KeyboardAwareScrollView
      style={{ flex: 1, alignSelf: 'center' }}
      showsVerticalScrollIndicator={false} >
      <View style={styles.viewStyle}>
        <View style={styles.headerContainer}>
          <Text style={styles.headStyle}>Family Head Details</Text>
        </View>
        <View style={styles.subHeaderContainer}>
          <Text style={styles.typename}>Type name of family head</Text>
        </View>
        <Text style={styles.firstname}>
          First Name<Text style={styles.starStyle}>*</Text>
        </Text>
        <Inputfield
          placeholder={'Enter First Name'}
          MaxLength={256}
          value={FName}
          onBlur={() => {
            if (FName.trim() !== '') {
              setShowError((prevState) => ({
                ...prevState,
                FNameError: true,
              }));
            }
          }}
          onChangeText={(text) => {
            setFName(text);
            if (text.trim() === '') {
              setFNameError('First name is required.');
            } else {

              setFNameError('');
            }
          }}
          ShowError={ShowError.FNameError}
          Error={FNameError}
        />

        <Text style={styles.firstname}>
          Middle Name (Father/Husband)
          <Text style={styles.starStyle}>*</Text>
        </Text>
        <Inputfield
          placeholder={'Enter Middle Name'}
          MaxLength={256}
          value={MName}
          onBlur={() => {
            if (MName.trim() !== '') {
              setShowError((prevState) => ({
                ...prevState,
                MNameError: true,
              }));
            }
          }}
          onChangeText={(text) => {
            setMName(text);
            if (text.trim() === '') {
              setMNameError('Middle name is required.');
            } else {
              setMNameError('');
            }
          }}
          ShowError={ShowError.MNameError}
          Error={MNameError}
        />

        <Text style={styles.firstname}>
          Surname<Text style={styles.starStyle}>*</Text>
        </Text>
        <Inputfield
          placeholder={'Enter Surname'}
          MaxLength={256}
          value={SName}
          onBlur={() => {
            if (SName.trim() !== '') {
              setShowError((prevState) => ({
                ...prevState,
                SNameError: true,
              }));
            }
          }}
          onChangeText={(text) => {
            setSName(text);
            if (text.trim() === '') {
              setSNameError('Surname is required.');
            } else {
              setSNameError('');
            }
          }}
          ShowError={ShowError.SNameError}
          Error={SNameError}
        />


        <Text style={styles.firstname}>
          Gender<Text style={styles.starStyle}>*</Text>
        </Text>
        <View style={{ marginTop: '3.3%' }}>
          <GenderDropDown
            setGender={setGender}
            Gender={Gender}
            setGenderError={setGenderError}
          />
          {GenderError && Gender === null && (
            <Text style={styles.Errorstyle1}>{GenderError}</Text>
          )}
        </View>


        <Text style={styles.firstname}>
          Date Of Birth<Text style={styles.starStyle}>*</Text>
        </Text>
        <TouchableOpacity
          onPress={() => setOpen(true)}
          style={styles.datePickerButton}
        >
          <Text style={dateSelected ? styles.dateStyle : styles.dateStyle1}>
            {dateSelected
              ? moment(birthDate).format('DD-MM-YYYY')
              : 'Enter Birth Date'}
          </Text>
          <VECTOR_ICONS.FontAwesome6
            name="calendar-days"
            size={20}
            color={'#1C57A5'}
          />
        </TouchableOpacity>
        {errorMessage !== '' && (
          <Text style={styles.Errorstyle1}>{errorMessage}</Text>
        )}
        <DatePicker
          modal
          open={open}
          date={birthDate}
          mode="date"
          maximumDate={date18YearsAgo}
          minimumDate={date100YearsAgo}
          onConfirm={(date) => {
            setOpen(false);
            setDate(date);
            setDateSelected(true);

            // isValidDate(date);
            setErrorMessage('');
          }}
          onCancel={() => {
            setOpen(false);
          }}
        />


        <Text style={styles.firstname}>
          Sub Caste<Text style={styles.starStyle}>*</Text>
        </Text>
        <View style={{ marginTop: '3.3%' }}>
          <SubcastDropdown
            setSubcast={setSubcast}
            Subcast={Subcast}
            setSubcastError={setSubcastError}
          />
          {SubcastError && Subcast === null && (
            <Text style={styles.Errorstyle1}>{SubcastError}</Text>
          )}
        </View>

        {/* <Buttons
          Label1="Back"
          Label2="Next"
          // Action1={() => props.setReportModalVisible(false)}
          Action2={() => props.navigation.navigate('Form2')}
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
        /> */}

        <SideButton Label={'Next'} Action={() => props.navigation.navigate('Form2')} styles={{ width: WIDTH * 0.45 }} />


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
    marginVertical: '1%',
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

export default Form1;