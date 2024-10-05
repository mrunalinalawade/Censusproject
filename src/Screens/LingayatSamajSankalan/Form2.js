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
        TalukaError:false,
        DistrictError:false,
        StateError:false,
        PincodeError:false,
    });





    return (
        <KeyboardAwareScrollView
            style={{ flex: 1, alignSelf: 'center' }}
            showsVerticalScrollIndicator={false}
        >
            <View style={styles.viewStyle}>

                <View style={styles.headerContainer}>
                    <Text style={styles.headStyle}>Address</Text>
                </View>



                <Text style={styles.firstname}>
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
                        setAddress(text);
                        if (text.trim() === '') {
                            setAddressError('Address Line 1 is required.');
                        } else {
                            setAddressError('');
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
                        if (Address1.trim() !== '') {
                            setShowError((prevState) => ({
                                ...prevState,
                                Address1Error: true,
                            }));
                        }
                    }}
                    onChangeText={(text) => {
                        setAddress1(text);
                        if (text.trim() === '') {
                            setAddress1Error('Address Line 2 is required.');
                        } else {
                            // Replace with appropriate validation if needed
                            setAddress1Error('');
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
                        if (City.trim() !== '') {
                            setShowError((prevState) => ({
                                ...prevState,
                                CityError: true,
                            }));
                        }
                    }}
                    onChangeText={(text) => {
                        setCity(text);
                        if (text.trim() === '') {
                            setCityError('City Or Village is required.');
                        } else {
                            // Replace with appropriate validation if needed
                            setCityError('');
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
                        if (Taluka.trim() !== '') {
                            setShowError((prevState) => ({
                                ...prevState,
                                TalukaError: true,
                            }));
                        }
                    }}
                    onChangeText={(text) => {
                        setTaluka(text);
                        if (text.trim() === '') {
                            setTalukaError('Taluka is required.');
                        } else {

                            setTalukaError('');
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
                        if (District.trim() !== '') {
                            setShowError((prevState) => ({
                                ...prevState,
                                DistrictError: true,
                            }));
                        }
                    }}
                    onChangeText={(text) => {
                        setDistrict(text);
                        if (text.trim() === '') {
                            setDistrictError('District is required.');
                        } else {
                            // Replace with appropriate validation if needed
                            setDistrictError('');
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
                        if (State.trim() !== '') {
                            setShowError((prevState) => ({
                                ...prevState,
                                StateError: true,
                            }));
                        }
                    }}
                    onChangeText={(text) => {
                        setState(text);
                        if (text.trim() === '') {
                            setStateError('State is required.');
                        } else {
                            // Replace with appropriate validation if needed
                            setStateError('');
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
                    
                    value={Pincode}
                    
                    onBlur={() => {
                        if (Pincode.trim() !== '') {
                            setShowError((prevState) => ({
                                ...prevState,
                                PincodeError: true,
                            }));
                        }
                    }}
                    onChangeText={(text) => {
                        setPincode(text);
                        if (text.trim() === '') {
                            setPincodeError('Pincode is required.');
                        } else {
                          
                            setPincodeError('');
                        }
                    }}
                    ShowError={ShowError.PincodeError}
                    Error={PincodeError}
                />

                <Buttons
                    Label1="Back"
                    Label2="Next"
                    Action1={() => props.navigation.goBack()}
                    Action2={() => props.navigation.navigate('Form3')}
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
