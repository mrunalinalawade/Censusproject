import React, { useState } from 'react';
import {

    StyleSheet,
    Text,

    View,
    Dimensions,
    Alert
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { WIDTH } from '../../Helpers/Dimensions';
const { height, width } = Dimensions.get('window');
import COLORS from '../../assets/colors/Colors';
import FONTS from '../../assets/Fonts';
import Inputfield from '../../Components/Inputfield';

import WholeButton from '../../Components/WholeButton';
import { ValidateEmail } from '../../Components/ValidationConfig/Validations';

const Form4 = (props) => {
    const [Mobile, setMobile] = useState('');
    const [MobileError, setMobileError] = useState('');
    const [Mobile1, setMobile1] = useState('');
    const [Mobile1Error, setMobile1Error] = useState('');
    const [Male, setMale] = useState('');
    const [MaleError, setMaleError] = useState('');
    const [Email, setEmail] = useState('');
    const [EmailError, setEmailError] = useState('');
    const [Female, setFemale] = useState('');
    const [FemaleError, setFemaleError] = useState('');

    const [errorMessage, setErrorMessage] = useState('');

    const [ShowError, setShowError] = useState({
        MobileError: false,
        Mobile1Error: false,
        MaleError: false,
        EmailError:false,
        FemaleError:false
    });





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
                <Inputfield
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
                            setMobileError('First name is required.');
                        } else {

                            setMobileError('');
                        }
                    }}
                    ShowError={ShowError.MobileError}
                    Error={MobileError}
                />

                <Text style={styles.firstname}>
                    Mobile-2 (Whatsapp)

                </Text>
                <Inputfield
                    placeholder={'Enter Whatsapp Mobile'}
                    MaxLength={256}
                    value={Mobile1}
                    onBlur={() => {
                        if (Mobile1.trim() !== '') {
                            setShowError((prevState) => ({
                                ...prevState,
                                Mobile1Error: true,
                            }));
                        }
                    }}
                    onChangeText={(text) => {
                        setMobile1(text);
                        if (text.trim() === '') {
                            setMobile1Error('Middle name is required.');
                        } else {

                            setMobile1Error('');
                        }
                    }}
                    ShowError={ShowError.Mobile1Error}
                    Error={Mobile1Error}
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
                                emailError: true,
                            }));
                        }
                    }}
                    onChangeText={(text) => {
                        if (Email != '' || Email != undefined) {
                            setEmail(text);
                            setEmailError(ValidateEmail(text));
                        }
                    }}
                    ShowError={ShowError.emailError}
                    Error={EmailError}
                />


                <Text style={styles.firstname}>
                    Nos. Of Family Members (Male)
                    <Text style={styles.starStyle}>*</Text>
                </Text>
                <Inputfield
                    placeholder={'Enter Nos. Of Family Members(Male)'}
                    MaxLength={256}
                    value={Male}
                    onBlur={() => {
                        if (Male.trim() !== '') {
                            setShowError((prevState) => ({
                                ...prevState,
                                MaleError: true,
                            }));
                        }
                    }}
                    onChangeText={(text) => {
                        setMale(text);
                        if (text.trim() === '') {
                            setMaleError('Surname is required.');
                        } else {

                            setMaleError('');
                        }
                    }}
                    ShowError={ShowError.MaleError}
                    Error={MaleError}
                />


                <Text style={styles.firstname}>
                    Nos. Of Family Members (Female)<Text style={styles.starStyle}>*</Text>
                </Text>

                <Inputfield
                    placeholder={'Enter Nos. Of Family Members (Female)'}
                    MaxLength={256}
                    value={Female}
                    onBlur={() => {
                        if (Female.trim() !== '') {
                            setShowError((prevState) => ({
                                ...prevState,
                                FemaleError: true,
                            }));
                        }
                    }}
                    onChangeText={(text) => {
                        setFemale(text);
                        if (text.trim() === '') {
                            setFemaleError('Surname is required.');
                        } else {

                            setFemaleError('');
                        }
                    }}
                    ShowError={ShowError.FemaleError}
                    Error={FemaleError}
                />

                <WholeButton Label={'Submit'} Action={() => Alert.alert('Your application submitted successfully')} styles={{ width: WIDTH * 0.9 }} />


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

export default Form4;
