import { StyleSheet, Text, View, SafeAreaView, Dimensions, FlatList, TextInput, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import FONTS from '../../assets/Fonts';
import COLORS from '../../assets/colors/Colors';
import AntDesign from 'react-native-vector-icons/AntDesign'
import EmptyComponent from '../../APIConfig/EmptyComponent';
const { height, width } = Dimensions.get('window');
import axios from 'axios'; // Make sure to import axios
import SpinningLoader from '../../APIConfig/SpinningLoader';
import { showMessage } from 'react-native-flash-message';



const AlldataHistory = (props) => {

  const [Alldata, setAlldata] = useState([])
  const [searchQuery, setSearchQuery] = useState("");
  const [Loader, setLoader] = useState(false)

  const filterData = Alldata.filter((item) =>
    item?.first_name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  useEffect(() => {
    AllDataAPI()
  }, [])



  const AllDataAPI = async () => {
    setLoader(true); // Show loader while fetching data
    try {
      const response = await axios({
        method: 'GET',
        url: "https://zeelogic.in/census/get_data.php",
        // headers: {
        //   token: Token, // Ensure `Token` is defined properly
        // },
      });

      // Check if the status is 'success'
      if (response?.data?.status === "success") {
        console.log("");
        setLoader(false);
        // Extract the actual data from the response
        const allData = response?.data?.data;
        setAlldata(allData);
        console.log(allData, "Fetched data");

        // Uncomment below if you want to show a success message
        showMessage({
          message: response?.data?.status === "success",
          type: 'success',
          icon: 'success',
          duration: 2500,
        });

      } else {
        console.log("Failed to fetch data");
        setLoader(false);
        // Uncomment below if you want to show a warning message
        // showMessage({
        //   message: "Failed to fetch data",
        //   type: 'warning',
        //   icon: 'warning',
        //   duration: 3000,
        // });
      }
    } catch (err) {
      console.error("Error fetching data:", err);
      setLoader(false);
      setAlldata([]);
      const message = err?.response?.data?.message || "Error occurred while fetching data";

      // Uncomment below if you want to show a danger message
      // showMessage({
      //   message: message,
      //   type: 'danger',
      //   icon: 'danger',
      //   duration: 3000,
      // });
    }
  };


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f7f7f7' }}>
      <View style={styles.headerContainer}>
        <Text style={styles.headStyle}>All Users Data</Text>
      </View>


      <View style={styles.InputViewFiled}>
        <TextInput
          placeholder="Search by User details"
          style={{
            width: width * 0.74,
            color: '#1C57A5',
            fontFamily: FONTS.Regular,
          }}
          placeholderTextColor={"#1C57A5"}
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
        />

        <TouchableOpacity
          style={{ alignSelf: "center", paddingRight: "4%" }}
        >
          <AntDesign
            name="search1"
            color={"#1C57A5"}
            size={22}
          />
        </TouchableOpacity>
      </View>
      <FlatList
        scrollEnabled={true}
        showsVerticalScrollIndicator={false}
        data={filterData}
        bounces={false}
        ListEmptyComponent={() => {

          return (
            <EmptyComponent DisplayText={'No Content Found'} />
          )

        }}
        renderItem={(item) => {
          return (
            <>

              <View style={styles.logoStyle}>
                <View style={styles.viewStyle}>
                  <Text style={styles.firstname}>Full Name :</Text>
                  <Text style={styles.firstname1}>{item?.item?.first_name} {item?.item?.middle_name} {item?.item?.middle_name} ({item?.item?.gender === 'Male' ? (
                      <Text>M</Text>
                    ) : item?.item?.gender === 'Female' ? (
                      <Text>F</Text>
                    ) :  (
                      <Text>O</Text>
                    ) })
                  </Text>
                </View>
                {/* <View style={styles.viewStyle}>
                  <Text style={styles.firstname}>First Name :</Text>
                  <Text style={styles.firstname1}>{item?.item?.first_name}</Text>
                </View>
                <View style={styles.viewStyle}>
                  <Text style={styles.firstname}>Middle Name :</Text>
                  <Text style={styles.firstname1}>{item?.item?.middle_name}</Text>
                </View>
                <View style={styles.viewStyle}>
                  <Text style={styles.firstname}>Surname :</Text>
                  <Text style={styles.firstname1}>{item?.item?.surname}</Text>
                </View> */}
                {/* <View style={styles.viewStyle}>
                  <Text style={styles.firstname}>Gender :</Text>
                  <Text style={styles.firstname1}>{item?.item?.gender}</Text>
                </View> */}
                <View style={styles.viewStyle}>
                  <Text style={styles.firstname}>Date of Birth :</Text>
                  <Text style={[styles.firstname1, { width: width * 0.58, }]}>{item?.item?.dob}</Text>
                </View>

                {/* <View style={styles.viewStyle}>
                  <Text style={styles.firstname}>Sub caste :</Text>
                  <Text style={styles.firstname}>{item?.item?.sub_caste}</Text>
                </View>

                <View style={styles.viewStyle}>
                  <Text style={styles.firstname}>Address line 1 :</Text>
                  <Text style={styles.firstname}>{item?.item?.address_line1}</Text>
                </View>

                <View style={styles.viewStyle}>
                  <Text style={styles.firstname}>Address line 2 :</Text>
                  <Text style={styles.firstname}>{item?.item?.address_line2}</Text>
                </View> */}

                {/* <View style={styles.viewStyle}>
                  <Text style={styles.firstname}>City :</Text>
                  <Text style={styles.firstname}>{item?.item?.city}</Text>
                </View>
                <View style={styles.viewStyle}>
                  <Text style={styles.firstname}>Taluka :</Text>
                  <Text style={styles.firstname}>{item?.item?.taluka}</Text>
                </View>
                   
                <View style={styles.viewStyle}>
                  <Text style={styles.firstname}>District :</Text>
                  <Text style={styles.firstname}>{item?.item?.district}</Text>
                </View>
                <View style={styles.viewStyle}>
                  <Text style={styles.firstname}>State :</Text>
                  <Text style={styles.firstname}>{item?.item?.state}</Text>
                </View> */}


                {/* <View style={styles.viewStyle}>
                  <Text style={styles.firstname}>Pin code:</Text>
                  <Text style={styles.firstname}>{item?.item?.pincode}</Text>
                </View> */}

                <View style={styles.viewStyle}>
                  <Text style={styles.firstname}>Business or Service : </Text>
                  <Text style={[styles.firstname1, { width: width * 0.43, }]}>{item?.item?.business_or_service}</Text>
                </View>

                <View style={styles.viewStyle}>
                  <Text style={styles.firstname}>Name Of Firm or employer :</Text>
                  <Text style={[styles.firstname1, { width: width * 0.3, }]}>{item?.item?.firm_or_employer}</Text>
                </View>

                {/* <View style={styles.viewStyle}>
                  <Text style={styles.firstname}>Designation :</Text>
                  <Text style={styles.firstname}>{item?.item?.designation}</Text>
                </View> */}

                <View style={styles.viewStyle}>
                  <Text style={styles.firstname}>Mobile 1 : </Text>
                  <Text style={styles.firstname1}>{item?.item?.mobile1}</Text>
                </View>

                {/* <View style={styles.viewStyle}>
                  <Text style={styles.firstname}>Mobile 2 :</Text>
                  <Text style={styles.firstname}>{item?.item?.mobile2}</Text>
                </View>
               

                <View style={styles.viewStyle}>
                  <Text style={styles.firstname}>Email address :</Text>
                  <Text style={styles.firstname}>{item?.item?.email_address}</Text>
                </View>
                
                <View style={styles.viewStyle}>
                  <Text style={styles.firstname}>No Of Family Members Male :</Text>
                  <Text style={styles.firstname}>{item?.item?.no_of_family_members_male}</Text>
                </View>

               
             <View style={styles.viewStyle}>
                  <Text style={styles.firstname}>No Of Family Members Female :</Text>
                  <Text style={styles.firstname}>{item?.item?.no_of_family_members_female}</Text>
                </View> */}

                {/* <View style={styles.viewStyle}>
                  <Text style={styles.firstname}>Family members :</Text>
                  <Text style={styles.firstname}>{item?.item?.family_members.}</Text>
                </View> */}




              </View>


            </>
          );
        }}

      />

      <SpinningLoader loader={Loader} />

    </SafeAreaView>
  )
}

export default AlldataHistory

const styles = StyleSheet.create({
  logoStyle: {
    backgroundColor: '#DAEAFF',
    width: width * 0.9,
    borderRadius: 9,
    padding: '3.5%',
    alignSelf: 'center',
    marginVertical: '2%',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,

  },
  firstname: {
    color: '#2372B5',
    fontSize: 16,
    fontFamily: FONTS.bold,
    marginVertical: '1%',
    // backgroundColor:'red',

  },
  firstname1: {
    color: '#2372B5',
    fontSize: 16,
    fontFamily: FONTS.bold,
    marginVertical: '1%',
    // backgroundColor: 'red',
    width: width * 0.63,
    // alignSelf: 'flex-end',
    textAlign: 'right'

  },
  viewStyle: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    width: width * 0.85,
    alignSelf: 'center'
  },
  headerContainer: {
    width: width * 0.9,
    backgroundColor: '#DAEAFF',
    borderRadius: 8,
    alignItems: 'center',
    alignSelf: 'center',
    padding: '4%',
    marginVertical: '4%'
  },
  headStyle: {
    color: '#1C57A5',
    fontSize: 28,
    fontFamily: FONTS.bold,
    alignItems: 'center',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  InputViewFiled: {
    backgroundColor: '#DAEAFF',
    paddingHorizontal: "1.5%",
    width: width * 0.9,
    alignSelf: "center",
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: "3%",
    borderColor: '#1C57A5',
    borderWidth: 1
  },

})