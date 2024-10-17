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
import moment from 'moment';
import WholeButton from '../../Components/WholeButton';
import { NoFamily, ValidateEmail, ValidateFirmemployername, ValidateFullname, ValidateMobileNo } from '../../Components/ValidationConfig/Validations';
import BusinessandServiceDropdown from '../../Components/BusinessandServiceDropdown';
import { VECTOR_ICONS } from '../../assets/Theme';
import DatePicker from 'react-native-date-picker';

const Form4 = (props) => {
    const [detailsArray, setDetailsArray] = useState([]);
    const [detailsArray1, setDetailsArray1] = useState([]);
    const [phone, setPhone] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [phone1, setPhone1] = useState('');
    const [phone1Error, setPhone1Error] = useState('');
    const [phone11, setPhone11] = useState('');
    const [phone11Error, setPhone11Error] = useState('');
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
    const [FName1, setFName1] = useState('');
    const [FName1Error, setFName1Error] = useState('');
    const [Relation, setRelation] = useState('');
    const [RelationError, setRelationError] = useState('');
    const [Relation1, setRelation1] = useState('');
    const [RelationError1, setRelationError1] = useState('');
    const [Business, setBusiness] = useState(null);
    const [BusinessError, setBusinessError] = useState('');
    const [Business1, setBusiness1] = useState(null);
    const [BusinessError1, setBusinessError1] = useState('');
    const [showInputField, setShowInputField] = useState(false);
    const [showInputField1, setShowInputField1] = useState(false);
    const [employer, setemployer] = useState('');
    const [employerError, setemployerError] = useState('');
    const [employer1, setemployer1] = useState('');
    const [employer1Error, setemployer1Error] = useState('');
    const [open, setOpen] = useState(false);
    const [dateSelected, setDateSelected] = useState(false);
    const [birthDate, setDate] = useState(new Date());
    const [open1, setOpen1] = useState(false);
    const [dateSelected1, setDateSelected1] = useState(false);
    const [birthDate1, setDate1] = useState(new Date());
    const [date100YearsAgo, setDate100YearsAgo] = useState(
        new Date(new Date().setFullYear(new Date().getFullYear() - 100)));
    const [date18YearsAgo, setDate18YearsAgo] = useState(
        new Date(new Date().setFullYear(new Date().getFullYear() - 89)));
    const [errorMessage, setErrorMessage] = useState('');
    const [ShowError, setShowError] = useState({
        phoneError: false,
        Mobile1Error: false,
        MaleError: false,
        EmailError: false,
        FemaleError: false
    });


    const minDate = new Date("1945-1-1");
    const maxDate = new Date('2045-1-1');
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


    const Form4 = () => {
        let mobileError = ValidateMobileNo(phone);
        let mobile1Err = ValidateMobileNo(Mobile1);
        let maleErr = NoFamily(Male);
        let emailError = ValidateEmail(Email);
        let femaleError = NoFamily(Female);

        if (mobileError === '' && mobile1Err === '' && maleErr === "" && emailError === "" && femaleError === "") {
            Alert.alert('Success', 'Your application was submitted successfully');
        } else {
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
            Alert.alert('Error', 'Please fix the validation errors before submitting');
        }
    };


    const addNewDetails = () => {
        if (detailsArray.length < 5) {  
            setDetailsArray([...detailsArray, {
                Relation1: '',
                FName: '',
                employer: '',
                birthDate: new Date(),
                Business: null,
                phone1: ''
            }]);
            setShowInputField(true); 
        }
    };


    const updateDetails = (index, key, value) => {
        const updatedDetails = [...detailsArray];
        updatedDetails[index][key] = value;
        setDetailsArray(updatedDetails);
    };

    const addNewDetails1 = () => {
        if (detailsArray1.length < 5) {  
            setDetailsArray1([...detailsArray1, {
                Relation1: '',
                FName: '',
                employer: '',
                birthDate1: new Date(),
                Business: null,
                phone1: ''
            }]);
            setShowInputField(true);  
        }
    };

    const updateDetails1 = (index, key, value) => {
        const updatedDetails1 = [...detailsArray1];
        updatedDetails1[index][key] = value;
        setDetailsArray1(updatedDetails1);
    };


    return (
        <KeyboardAwareScrollView
            style={{ flex: 1, alignSelf: 'center' }}
            showsVerticalScrollIndicator={false}>
            <View style={styles.viewStyle}>
                <View style={styles.headerContainer}>
                    <Text style={styles.headStyle}>Contact Details</Text>
                </View>
                <Text style={styles.firstname}>
                    Mobile-1
                </Text>

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
                {detailsArray.length < 5 && (
                    <TouchableOpacity
                        onPress={addNewDetails}
                        style={{ alignItems: 'flex-end' }}
                    >
                        <Text style={styles.firstname1}>Add Details</Text>
                    </TouchableOpacity>
                )}


                {showInputField && (
                    <>
                        {detailsArray.map((details, index) => (
                            <View key={index} style={{
                                backgroundColor: '#FFF', width: width * 0.9, borderRadius: 9, padding: 2, alignSelf: 'center', marginVertical: '2%',
                                shadowColor: "#000",
                                shadowOffset: {
                                    width: 0,
                                    height: 5,
                                },
                                shadowOpacity: 0.34,
                                shadowRadius: 6.27,
                                elevation: 10,
                            }} >
                                <Text style={styles.firstname}>
                                    Relation
                                    <Text style={styles.starStyle}>*</Text>
                                </Text>
                                <Inputfield
                                    placeholder={'Enter Relation'}
                                    MaxLength={256}
                                    value={details.Relation1}
                                    onBlur={() => {
                                        if (details.Relation1) {
                                            updateDetails(index, 'RelationError1', ValidateFullname(details.Relation1));
                                        }
                                    }}
                                    onChangeText={(text) => updateDetails(index, 'Relation1', text)}
                                    ShowError={ShowError.RelationError1}
                                    Error={details.RelationError1}
                                />

                                <Text style={styles.firstname}>
                                    Full Name
                                    <Text style={styles.starStyle}>*</Text>
                                </Text>
                                <Inputfield
                                    placeholder={'Enter First Name'}
                                    MaxLength={256}
                                    value={details.FName}
                                    onBlur={() => {
                                        if (details.FName) {
                                            updateDetails(index, 'FNameError', ValidateFullname(details.FName));
                                        }
                                    }}
                                    onChangeText={(text) => updateDetails(index, 'FName', text)}
                                    ShowError={ShowError.FNameError}
                                    Error={details.FNameError}
                                />

                                <Text style={styles.firstname}>
                                    Name Of the firm or employer
                                    <Text style={styles.starStyle}>*</Text>
                                </Text>
                                <Inputfield
                                    placeholder={'Enter Name Of the firm or employer'}
                                    MaxLength={256}
                                    value={details.employer}
                                    onBlur={() => {
                                        if (details.employer) {
                                            updateDetails(index, 'employerError', ValidateFirmemployername(details.employer));
                                        }
                                    }}
                                    onChangeText={(text) => updateDetails(index, 'employer', text)}
                                    ShowError={ShowError.employerError}
                                    Error={details.employerError}
                                />

                                <Text style={styles.firstname}>
                                    Date Of Birth<Text style={styles.starStyle}>*</Text>
                                </Text>
                                <TouchableOpacity
                                    onPress={() => setOpen(true)}
                                    style={styles.datePickerButton}
                                >
                                    <Text style={dateSelected ? styles.dateStyle : styles.dateStyle1}>
                                        {dateSelected ? moment(details.birthDate).format('DD-MM-YYYY') : 'Enter Birth Date'}
                                    </Text>
                                    <VECTOR_ICONS.FontAwesome6
                                        name="calendar-days"
                                        size={20}
                                        color={'#1C57A5'}
                                    />
                                </TouchableOpacity>
                                <DatePicker
                                    modal
                                    open={open}
                                    date={details.birthDate}
                                    mode="date"
                                    onConfirm={(date) => {
                                        setOpen(false);
                                        updateDetails(index, 'birthDate', date);
                                        setDateSelected(true);
                                        setErrorMessage('');
                                    }}
                                    onCancel={() => {
                                        setOpen(false);
                                    }}
                                />

                                <Text style={styles.firstname}>
                                    Business Or Service
                                    <Text style={styles.starStyle}>*</Text>
                                </Text>
                                <View style={{ marginTop: '3.3%' }}>
                                    <BusinessandServiceDropdown
                                        setBusiness={(value) => updateDetails(index, 'Business', value)}
                                        Business={details.Business}
                                        setBusinessError={(error) => updateDetails(index, 'BusinessError', error)}
                                    />
                                    {details.BusinessError && details.Business === null && (
                                        <Text style={styles.Errorstyle1}>{details.BusinessError}</Text>
                                    )}
                                </View>

                                {/* Mobile Number */}
                                <Text style={styles.firstname}>Mobile Number</Text>
                                <Inputfield
                                    placeholder={'Enter Mobile Number'}
                                    MaxLength={12}
                                    value={details.phone1}
                                    keyboardType="number-pad"
                                    onBlur={() => {
                                        if (details.phone1 !== '' && details.phone1 !== undefined) {
                                            updateDetails(index, 'phone1Error', ValidateMobileNo(details.phone1));
                                        }
                                    }}
                                    onChangeText={(num) => updateDetails(index, 'phone1', num)}
                                    ShowError={details.phone1Error}
                                    Error={details.phone1Error}
                                    style={{ color: '#1C57A5', fontSize: 15, fontFamily: FONTS.semibold, paddingVertical: '4.4%' }}
                                />
                            </View>
                        ))}


                    </>
                )}
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

                {detailsArray1.length < 5 && (

                    <TouchableOpacity
                        onPress={addNewDetails1}
                        style={{ alignItems: 'flex-end' }}
                    >
                        <Text style={styles.firstname1}>Add Details</Text>
                    </TouchableOpacity>
                )}



                {showInputField && (
                    <>
                        {detailsArray1.map((details1, index) => (
                            <View key={index} style={{
                                backgroundColor: '#FFF', width: width * 0.9, boederRadious: 9, padding: 2, alignSelf: 'center', marginVertical: '2%',
                                shadowColor: "#000",
                                shadowOffset: {
                                    width: 0,
                                    height: 5,
                                },
                                shadowOpacity: 0.34,
                                shadowRadius: 6.27,
                                elevation: 10,
                            }} >
                                <Text style={styles.firstname}>
                                    Relation
                                    <Text style={styles.starStyle}>*</Text>
                                </Text>

                                <Inputfield
                                    placeholder={'Enter Relation'}
                                    MaxLength={256}
                                    value={details1.Relation}
                                    // onBlur={() => {
                                    //     if (details1.Relation != '' || details1.Relation != undefined) {
                                    //         setShowError(prevState => ({
                                    //             ...prevState,
                                    //             RelationError: true,
                                    //         }));
                                    //     }
                                    // }}
                                    // onChangeText={(text) => {
                                    //     if (details1.Relation != '' || details1.Relation != undefined) {
                                    //         setRelation(text);
                                    //         setRelationError(ValidateFullname(text));
                                    //     }
                                    // }}
                                    // ShowError={ShowError.RelationError}
                                    // Error={RelationError}

                                    onBlur={() => {
                                        if (details1.Relation) {
                                            updateDetails1(index, 'RelationError1', ValidateFullname(details1.Relation));
                                        }
                                    }}
                                    onChangeText={(text) => updateDetails1(index, 'Relation1', text)}
                                    ShowError={ShowError.RelationError}
                                    Error={details1.RelationError}
                                />
                                <Text style={styles.firstname}>
                                    Full Name
                                    <Text style={styles.starStyle}>*</Text>
                                </Text>
                                <Inputfield
                                    placeholder={'Enter First Name'}
                                    MaxLength={256}
                                    value={details1.FName1}
                                    // onBlur={() => {
                                    //     if (details1.FName1 != '' || details1.FName1 != undefined) {
                                    //         setShowError(prevState => ({
                                    //             ...prevState,
                                    //             FNameError1: true,
                                    //         }));
                                    //     }
                                    // }}
                                    // onChangeText={(text) => {
                                    //     if (details1.FName1 != '' || details1.FName1 != undefined) {
                                    //         setFName1(text);
                                    //         setFName1Error(ValidateFullname(text));
                                    //     }
                                    // }}
                                    // ShowError={ShowError.FNameError1}
                                    // Error={FName1Error}
                                    onBlur={() => {
                                        if (details1.FName1) {
                                            updateDetails1(index, 'FNameError', ValidateFullname(details.FName1));
                                        }
                                    }}
                                    onChangeText={(text) => updateDetails1(index, 'FName1', text)}
                                    ShowError={ShowError.FNameError1}
                                    Error={details1.FName1Error}
                                />
                                <Text style={styles.firstname}>
                                    Name Of the firm or employer
                                    <Text style={styles.starStyle}>*</Text>
                                </Text>
                                <Inputfield
                                    placeholder={'Enter Name Of the firm or employer'}
                                    MaxLength={256}
                                    value={details1.employer1}
                                    // onBlur={() => {
                                    //     if (details1.employer1 != '' || details1.employer1 != undefined) {
                                    //         setShowError((prevState) => ({
                                    //             ...prevState,
                                    //             employer1Error: true,
                                    //         }));
                                    //     }
                                    // }}
                                    // onChangeText={(text) => {
                                    //     if (details1.employer1 != '' || details1.employer1 != undefined) {
                                    //         setemployer1(text);
                                    //         setemployer1Error(ValidateFirmemployername(text));
                                    //     }
                                    // }}
                                    // ShowError={ShowError.employer1Error}
                                    // Error={employer1Error}

                                    onBlur={() => {
                                        if (details1.employer1) {
                                            updateDetails1(index, 'employerError1', ValidateFirmemployername(details1.employer1));
                                        }
                                    }}
                                    onChangeText={(text) => updateDetails1(index, 'employer1', text)}
                                    ShowError={ShowError.employer1Error}
                                    Error={details1.employer1Error}
                                />

                                <Text style={styles.firstname}>
                                    Date Of Birth<Text style={styles.starStyle}>*</Text>
                                </Text>
                                <TouchableOpacity
                                    onPress={() => setOpen1(true)}
                                    style={styles.datePickerButton}
                                >
                                    <Text style={dateSelected1 ? styles.dateStyle : styles.dateStyle1}>
                                        {dateSelected1
                                            ? moment(details1.birthDate1).format('DD-MM-YYYY')
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
                                    open={open1}
                                    date={details1.birthDate1}
                                    mode="date"
                                    maximumDate={date18YearsAgo}
                                    minimumDate={date100YearsAgo}
                                    onConfirm={(date) => {
                                        setOpen1(false);
                                        setDate1(date);
                                        setDateSelected1(true);
                                        updateDetails(index, 'birthDate1', date);
                                        // isValidDate(date);
                                        setErrorMessage('');
                                    }}
                                    onCancel={() => {
                                        setOpen1(false);
                                    }}
                                />
                                <Text style={styles.firstname}>
                                    Business Or Service
                                    <Text style={styles.starStyle}>*</Text>
                                </Text>
                                <View style={{ marginTop: '3.3%' }}>
                                    {/* <BusinessandServiceDropdown
                                        setBusiness={setBusiness1}
                                        Business={Business1}
                                        setBusinessError={setBusinessError1}
                                    />
                                    {BusinessError1 && Business1 === null && (
                                        <Text style={styles.Errorstyle1}>{BusinessError1}</Text>
                                    )} */}
                                    <BusinessandServiceDropdown
                                        setBusiness={(value) => updateDetails1(index, 'Business1', value)}
                                        Business={details1.Business1}
                                        setBusinessError={(error) => updateDetails1(index, 'BusinessError1', error)}
                                    />
                                    {details1.BusinessError1 && details1.Business === null && (
                                        <Text style={styles.Errorstyle1}>{details1.BusinessError1}</Text>
                                    )}

                                </View>
                                <Text style={styles.firstname}>
                                    Mobile Number
                                </Text>
                                <Inputfield
                                    // edit={EmailEdit}
                                    placeholder={'Enter Mobile Number'}
                                    MaxLength={12}
                                    value={details1.phone11}
                                    keyboardType="number-pad"
                                    // onBlur={() => {
                                    //     if (details1.phone11 != '' || details1.phone11 != undefined) {
                                    //         setShowError(prevState => ({
                                    //             ...prevState,
                                    //             phone11error: true,
                                    //         }));
                                    //     }
                                    // }}
                                    // onChangeText={(num) => {
                                    //     if (details1.phone11 != '' || details1.phone11 != undefined) {
                                    //         setPhone11(num);
                                    //         setPhone11Error(ValidateMobileNo(num));
                                    //     }
                                    // }}
                                    // ShowError={ShowError.phone11Error}
                                    // Error={phone11Error}

                                    onBlur={() => {
                                        if (details1.phone11 !== '' && details1.phone11 !== undefined) {
                                            updateDetails1(index, 'phone11Error', ValidateMobileNo(details1.phone11));
                                        }
                                    }}
                                    onChangeText={(num) => updateDetails1(index, 'phone11', num)}
                                    ShowError={details1.phone11Error}
                                    Error={details1.phone11Error}
                                    style={{ color: '#1C57A5', fontSize: 15, fontFamily: FONTS.semibold, paddingVertical: '4.2%', }}
                                />
                            </View>
                        ))}
                    </>
                )}

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
        width: WIDTH * 0.89,
        paddingVertical: '4.2%',
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
