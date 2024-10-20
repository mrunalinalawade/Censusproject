import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
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
import { OTPVerification, Validateaddress1Field, ValidateaddressField, ValidateCityField, ValidatedistrictField, ValidatestateField, ValidatetalukaField } from '../../Components/ValidationConfig/Validations';
import { useDispatch } from 'react-redux';
import { setUserData2 } from '../../Components/Redux/UserDetails';


const Form2 = (props) => {
    const [Address, setAddress] = useState('');
    const [AddressError, setAddressError] = useState('');
    const [Address1, setAddress1] = useState('');
    const [Address1Error, setAddress1Error] = useState('');
    const [City, setCity] = useState('');
    const [CityError, setCityError] = useState('');
    const [Taluka, setTaluka] = useState(null);
    const [TalukaError, setTalukaError] = useState('');
    const [District, setDistrict] = useState(null);
    const [DistrictError, setDistrictError] = useState('');
    const [State, setState] = useState(null);
    const [StateError, setStateError] = useState('');
    const [Pincode, setPincode] = useState(null);
    const [PincodeError, setPincodeError] = useState('');
    const [ShowError, setShowError] = useState({
        AddressError: false,
        Address1Error: false,
        CityError: false,
        TalukaError: false,
        DistrictError: false,
        StateError: false,
        PincodeError: false,
    });



    const dispatch = useDispatch();
    const Form2com = () => {
        let addressError = ValidateaddressField(Address);
        // let address1Err=ValidateCityField(Address1);
        let cityErr = ValidateCityField(City);
        let address1Err = Validateaddress1Field(Address1);
        let takukaError = ValidatetalukaField(Taluka);
        let districtError = ValidatedistrictField(District)
        let stateError = ValidatestateField(State);
        let pincodeError = OTPVerification(Pincode)



        if (addressError == '' && cityErr == '' && address1Err == "" && takukaError == "" && districtError == "" && stateError == "" && pincodeError == "") {
            const formData2 = { Address, City, Address1, Taluka, District, State, Pincode };
            dispatch(setUserData2(formData2));

            props.navigation.navigate('Form3')
        } else {
            setAddressError(addressError);
            setAddress1Error(address1Err);
            setCityError(cityErr);
            setTalukaError(address1Err);
            setTalukaError(takukaError);
            setDistrictError(districtError)
            setStateError(stateError)
            setPincodeError(pincodeError)
            setShowError({
                AddressError: true,
                Address1Error: true,
                CityError: true,
                TalukaError: true,
                DistrictError: true,
                StateError: true,
                PincodeError: true,
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
                    <Text style={styles.headStyle}>Address</Text>
                </View>



                <Text style={[styles.firstname, { marginTop: '2%' }]}>
                    Address Line 1<Text style={styles.starStyle}>*</Text>
                </Text>
                <Inputfield
                    placeholder={'Enter Address Line 1'}
                    MaxLength={256}
                    value={Address}
                    onBlur={() => {
                        if (Address.trim() !== '') {
                            setShowError((prevState) => ({
                                ...prevState,
                                AddressError: true,
                            }));
                        }
                    }}
                    onChangeText={(text) => {
                        if (Address != '' || Address != undefined) {
                            setAddress(text);
                            setAddressError(ValidateaddressField(text));
                        }
                    }}
                    ShowError={ShowError.AddressError}
                    Error={AddressError}
                />

                <Text style={styles.firstname}>
                    Address Line 2 with nearby landmark
                    <Text style={styles.starStyle}>*</Text>
                </Text>
                <Inputfield
                    placeholder={'Enter Address Line 2'}
                    MaxLength={256}
                    value={Address1}
                    onBlur={() => {
                        if (Address1 != '' || Address1 != undefined) {
                            setShowError((prevState) => ({
                                ...prevState,
                                Address1Error: true,
                            }));
                        }
                    }}
                    onChangeText={(text) => {
                        if (Address1 != '' || Address1 != undefined) {
                            setAddress1(text);
                            setAddress1Error(Validateaddress1Field(text));
                        }
                    }}
                    ShowError={ShowError.Address1Error}
                    Error={Address1Error}
                />

                <Text style={styles.firstname}>
                    City Or Village<Text style={styles.starStyle}>*</Text>
                </Text>
                <Inputfield
                    placeholder={'Enter City Or Village'}
                    MaxLength={256}
                    value={City}

                    onBlur={() => {
                        if (City != '' || City != undefined) {
                            setShowError((prevState) => ({
                                ...prevState,
                                CityError: true,
                            }));
                        }
                    }}
                    onChangeText={(text) => {
                        if (City != '' || City != undefined) {
                            setCity(text);
                            setCityError(ValidateCityField(text));
                        }
                    }}
                    ShowError={ShowError.CityError}
                    Error={CityError}
                />


                <Text style={styles.firstname}>
                    Taluka
                    <Text style={styles.starStyle}>*</Text>
                </Text>
                <Inputfield
                    placeholder={'Taluka'}
                    MaxLength={256}
                    value={Taluka}

                    onBlur={() => {
                        if (Taluka != '' || Taluka != undefined) {
                            setShowError((prevState) => ({
                                ...prevState,
                                TalukaError: true,
                            }));
                        }
                    }}
                    onChangeText={(text) => {
                        if (Taluka != '' || Taluka != undefined) {
                            setTaluka(text);
                            setTalukaError(ValidatetalukaField(text));
                        }
                    }}
                    ShowError={ShowError.TalukaError}
                    Error={TalukaError}
                />



                <Text style={styles.firstname}>
                    District
                    <Text style={styles.starStyle}>*</Text>
                </Text>
                <Inputfield
                    placeholder={'District'}
                    MaxLength={256}
                    value={District}


                    onBlur={() => {
                        if (District != '' || District != undefined) {
                            setShowError((prevState) => ({
                                ...prevState,
                                DistrictError: true,
                            }));
                        }
                    }}
                    onChangeText={(text) => {
                        if (District != '' || District != undefined) {
                            setDistrict(text);
                            setDistrictError(ValidatedistrictField(text));
                        }
                    }}

                    ShowError={ShowError.DistrictError}
                    Error={DistrictError}
                />


                <Text style={styles.firstname}>
                    State
                    <Text style={styles.starStyle}>*</Text>
                </Text>
                <Inputfield
                    placeholder={'State'}
                    MaxLength={256}
                    value={State}
                    onBlur={() => {
                        if (State != '' || State != undefined) {
                            setShowError((prevState) => ({
                                ...prevState,
                                StateError: true,
                            }));
                        }
                    }}
                    onChangeText={(text) => {
                        if (State != '' || State != undefined) {
                            setState(text);
                            setStateError(ValidatestateField(text));
                        }
                    }}
                    ShowError={ShowError.StateError}
                    Error={StateError}
                />
                <Text style={styles.firstname}>
                    Pincode

                    <Text style={styles.starStyle}>*</Text>
                </Text>
                <Inputfield
                    placeholder={'Pincode'}
                    MaxLength={6}
                    keyboardType="number-pad"
                    value={Pincode}


                    onBlur={() => {
                        if (Pincode != '' || Pincode != undefined) {
                            setShowError((prevState) => ({
                                ...prevState,
                                PincodeError: true,
                            }));
                        }
                    }}
                    onChangeText={(text) => {
                        if (Pincode != '' || Pincode != undefined) {
                            setPincode(text);
                            setPincodeError(OTPVerification(text));
                        }
                    }}
                    ShowError={ShowError.PincodeError}
                    Error={PincodeError}
                />

                <Buttons
                    Label1="Back"
                    Label2="Next"
                    Action1={() => props.navigation.goBack()}
                    Action2={Form2com}
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

export default Form2;
