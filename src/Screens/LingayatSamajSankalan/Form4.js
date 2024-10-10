import React, { useState } from 'react';
import {

    StyleSheet,
    Text,

    View,
    Dimensions,
    Alert,
    TouchableOpacity
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { WIDTH } from '../../Helpers/Dimensions';
const { height, width } = Dimensions.get('window');
import COLORS from '../../assets/colors/Colors';
import FONTS from '../../assets/Fonts';
import Inputfield from '../../Components/Inputfield';

import WholeButton from '../../Components/WholeButton';
import { NoFamily, ValidateEmail, ValidateFullname, ValidateMobileNo } from '../../Components/ValidationConfig/Validations';
import BusinessandServiceDropdown from '../../Components/BusinessandServiceDropdown';

const Form4 = (props) => {

    const [phone, setPhone] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [phone1, setPhone1] = useState('');
    const [phone1Error, setPhone1Error] = useState('');
    const [Mobile1, setMobile1] = useState('');
    const [Mobile1Error, setMobile1Error] = useState('');
    const [Male, setMale] = useState('');
    const [MaleError, setMaleError] = useState('');
    const [Email, setEmail] = useState('');
    const [EmailError, setEmailError] = useState('');
    const [Female, setFemale] = useState('');
    const [FemaleError, setFemaleError] = useState('');
    const [FName, setFName] = useState('');
    const [FNameError, setFNameError] = useState('');
    const [Business, setBusiness] = useState(null);
    const [BusinessError, setBusinessError] = useState('');
    const [showInputField, setShowInputField] = useState(false);
    const [showInputField1, setShowInputField1] = useState(false);
    const [employer, setemployer] = useState('');
    const [employerError, setemployerError] = useState('');

    const [errorMessage, setErrorMessage] = useState('');

    const [ShowError, setShowError] = useState({
        phoneError: false,
        Mobile1Error: false,
        MaleError: false,
        EmailError: false,
        FemaleError: false
    });




    const Form4 = () => {
        let mobileError = ValidateMobileNo(phone);
        let mobile1Err = ValidateMobileNo(Mobile1);
        let maleErr = NoFamily(Male);
        let emailError = ValidateEmail(Email);
        let femaleError = NoFamily(Female);

        // Check if all validations pass
        if (mobileError === '' && mobile1Err === '' && maleErr === "" && emailError === "" && femaleError === "") {
            // Show success alert message
            Alert.alert('Success', 'Your application was submitted successfully');
        } else {
            // Set error messages in the state
            setPhoneError(mobileError);
            setMobile1Error(mobile1Err);
            setMaleError(maleErr);
            setEmailError(emailError);
            setFemaleError(femaleError);

            setShowError({
                Mobile1Error: true,
                phoneError: true,
                MaleError: true,
                EmailError: true,
                FemaleError: true
            });

            // Show alert for validation errors
            Alert.alert('Error', 'Please fix the validation errors before submitting');
        }
    };





    return (
        <KeyboardAwareScrollView
            style={{ flex: 1, alignSelf: 'center' }}
            showsVerticalScrollIndicator={false}
        >
            <View style={styles.viewStyle}>
                <View style={styles.headerContainer}>
                    <Text style={styles.headStyle}>Contact Details</Text>
                </View>
                <Text style={styles.firstname}>
                    Mobile-1
                </Text>
                {/* <Inputfield
                    placeholder={'Enter Mobile'}
                    MaxLength={256}
                    value={Mobile}
                    onBlur={() => {
                        if (Mobile.trim() !== '') {
                            setShowError((prevState) => ({
                                ...prevState,
                                MobileError: true,
                            }));
                        }
                    }}
                    onChangeText={(text) => {
                        setMobile(text);
                        if (text.trim() === '') {
                            setMobileError('Mobile is required.');
                        } else {

                            setMobileError('');
                        }
                    }}
                    ShowError={ShowError.MobileError}
                    Error={MobileError}
                /> */}

                <Inputfield
                    // edit={EmailEdit}
                    placeholder={'Enter Mobile'}
                    MaxLength={12}
                    value={phone}
                    keyboardType="number-pad"
                    onBlur={() => {
                        if (phone != '' || phone != undefined) {
                            setShowError(prevState => ({
                                ...prevState,
                                phoneerror: true,
                            }));
                        }
                    }}
                    onChangeText={(num) => {
                        if (phone != '' || phone != undefined) {
                            setPhone(num);
                            setPhoneError(ValidateMobileNo(num));
                        }
                    }}
                    ShowError={ShowError.phoneError}
                    Error={phoneError}
                    style={{ color: '#1C57A5', fontSize: 15, fontFamily: FONTS.semibold, paddingVertical: '4.4%', }}
                />

                <Text style={styles.firstname}>
                    Mobile-2 (Whatsapp)

                </Text>
                <Inputfield
                    placeholder={'Enter Whatsapp Mobile'}
                    MaxLength={12}
                    keyboardType="number-pad"
                    value={Mobile1}
                    onBlur={() => {
                        if (Mobile1 != '' || Mobile1 != undefined) {
                            setShowError((prevState) => ({
                                ...prevState,
                                Mobile1Error: true,
                            }));
                        }
                    }}
                    onChangeText={(num) => {
                        if (Mobile1 != '' || Mobile1 != undefined) {
                            setMobile1(num);
                            setMobile1Error(ValidateMobileNo(num));
                        }
                    }}
                    ShowError={ShowError.Mobile1Error}
                    Error={Mobile1Error}
                    style={{ color: '#1C57A5', fontSize: 15, fontFamily: FONTS.semibold, paddingVertical: '4.4%', }}
                />


                <Text style={styles.firstname}>
                    Email Address
                </Text>
                <Inputfield
                    placeholder={'Enter  Email Address'}
                    MaxLength={256}
                    value={Email}
                    onBlur={() => {
                        if (Email != '' || Email != undefined) {
                            setShowError(prevState => ({
                                ...prevState,
                                EmailError: true,
                            }));
                        }
                    }}
                    onChangeText={(text) => {
                        if (Email != '' || Email != undefined) {
                            setEmail(text);
                            setEmailError(ValidateEmail(text));
                        }
                    }}
                    ShowError={ShowError.EmailError}
                    Error={EmailError}
                />


                <Text style={styles.firstname}>
                    Nos. Of Family Members (Male)
                    <Text style={styles.starStyle}>*</Text>
                </Text>
                <Inputfield
                    placeholder={'Enter Nos. Of Family Members(Male)'}
                    MaxLength={2}
                    value={Male}
                    keyboardType="number-pad"
                    onBlur={() => {
                        if (Male != '' || Male != undefined) {
                            setShowError(prevState => ({
                                ...prevState,
                                MaleError: true,
                            }));
                        }
                    }}
                    onChangeText={(text) => {
                        if (Male != '' || Male != undefined) {
                            setMale(text);
                            setMaleError(NoFamily(text));
                        }
                    }}
                    ShowError={ShowError.MaleError}
                    Error={MaleError}
                />
                <TouchableOpacity onPress={() => setShowInputField(!showInputField)} style={{ alignItems: 'flex-end' }}><Text style={styles.firstname1}>Add Details</Text></TouchableOpacity>
                {showInputField && (
                    <>
                  
                <Inputfield
                    placeholder={'Enter First Name'}
                    MaxLength={256}
                    value={FName}


                    onBlur={() => {
                        if (FName != '' || FName != undefined) {
                            setShowError(prevState => ({
                                ...prevState,
                                FNameError: true,
                            }));
                        }
                    }}
                    onChangeText={(text) => {
                        if (FName != '' || FName != undefined) {
                            setFName(text);
                            setFNameError(ValidateFullname(text));
                        }
                    }}
                    ShowError={ShowError.FNameError}
                    Error={FNameError}
                />
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
              setemployerError(ValidateFirmemployername(text));
            }
          }}
          ShowError={ShowError.employerError}
          Error={employerError}
        />
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
                    Mobile Number
                </Text>
                <Inputfield
                    // edit={EmailEdit}
                    placeholder={'Enter Mobile Number'}
                    MaxLength={12}
                    value={phone1}
                    keyboardType="number-pad"
                    onBlur={() => {
                        if (phone1 != '' || phone1 != undefined) {
                            setShowError(prevState => ({
                                ...prevState,
                                phone1error: true,
                            }));
                        }
                    }}
                    onChangeText={(num) => {
                        if (phone1 != '' || phone1 != undefined) {
                            setPhone1(num);
                            setPhone1Error(ValidateMobileNo(num));
                        }
                    }}
                    ShowError={ShowError.phone1Error}
                    Error={phone1Error}
                    style={{ color: '#1C57A5', fontSize: 15, fontFamily: FONTS.semibold, paddingVertical: '4.4%', }}
                />
                </>
                )
            }

                <Text style={styles.firstname}>
                    Nos. Of Family Members (Female)<Text style={styles.starStyle}>*</Text>
                </Text>

                <Inputfield
                    placeholder={'Enter Nos. Of Family Members (Female)'}
                    MaxLength={2}
                    value={Female}
                    keyboardType="number-pad"

                    onBlur={() => {
                        if (Female != '' || Female != undefined) {
                            setShowError(prevState => ({
                                ...prevState,
                                FemaleError: true,
                            }));
                        }
                    }}
                    onChangeText={(text) => {
                        if (Female != '' || Female != undefined) {
                            setFemale(text);
                            setFemaleError(NoFamily(text));
                        }
                    }}
                    ShowError={ShowError.FemaleError}
                    Error={FemaleError}
                />
                <TouchableOpacity onPress={() => setShowInputField1(!showInputField1)}  style={{ alignItems: 'flex-end' }}><Text style={styles.firstname1}>Add Details</Text></TouchableOpacity>
                {showInputField1 && (
                    <>
                  
                <Inputfield
                    placeholder={'Enter First Name'}
                    MaxLength={256}
                    value={FName}


                    onBlur={() => {
                        if (FName != '' || FName != undefined) {
                            setShowError(prevState => ({
                                ...prevState,
                                FNameError: true,
                            }));
                        }
                    }}
                    onChangeText={(text) => {
                        if (FName != '' || FName != undefined) {
                            setFName(text);
                            setFNameError(ValidateFullname(text));
                        }
                    }}
                    ShowError={ShowError.FNameError}
                    Error={FNameError}
                />
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
              setemployerError(ValidateFirmemployername(text));
            }
          }}
          ShowError={ShowError.employerError}
          Error={employerError}
        />
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
                    Mobile Number
                </Text>
                <Inputfield
                    // edit={EmailEdit}
                    placeholder={'Enter Mobile Number'}
                    MaxLength={12}
                    value={phone1}
                    keyboardType="number-pad"
                    onBlur={() => {
                        if (phone1 != '' || phone1 != undefined) {
                            setShowError(prevState => ({
                                ...prevState,
                                phone1error: true,
                            }));
                        }
                    }}
                    onChangeText={(num) => {
                        if (phone1 != '' || phone1 != undefined) {
                            setPhone1(num);
                            setPhone1Error(ValidateMobileNo(num));
                        }
                    }}
                    ShowError={ShowError.phone1Error}
                    Error={phone1Error}
                    style={{ color: '#1C57A5', fontSize: 15, fontFamily: FONTS.semibold, paddingVertical: '4.4%', }}
                />
                </>
                )
            }
                <WholeButton Label={'Submit'} Action={Form4} styles={{ width: WIDTH * 0.9 }} />


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
    firstname1: {
        color: '#2372B5',
        fontSize: 16,
        fontFamily: FONTS.bold,
        // marginVertical: '2%',
        right: 6,
        textDecorationLine: 'underline'
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

export default Form4;
