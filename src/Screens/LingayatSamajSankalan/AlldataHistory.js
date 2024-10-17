import { StyleSheet, Text, View, SafeAreaView, Dimensions ,FlatList} from 'react-native'
import React from 'react'
import FONTS from '../../assets/Fonts';
const { height, width } = Dimensions.get('window');
const AlldataHistory = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f7f7f7' }}>
      <View style={styles.headerContainer}>
        <Text style={styles.headStyle}>All Users Data</Text>
      </View>


      <FlatList
        scrollEnabled={true}
        showsVerticalScrollIndicator={false}
        data={[1,2,3,4]}
        bounces={false}
        ListEmptyComponent={() => {

          return (
            <EmptyComponent DisplayText={'No Content Found'} />
          )

        }}
        renderItem={( item ) => {
          return (
            <>

              <View style={styles.logoStyle}>
                <View style={styles.viewStyle}>
                  <Text style={styles.firstname}>First Name :</Text>
                  <Text style={styles.firstname}>Mrunali</Text>
                </View>
                <View style={styles.viewStyle}>
                  <Text style={styles.firstname}>Middle Name :</Text>
                  <Text style={styles.firstname}>Santosh</Text>
                </View>
                <View style={styles.viewStyle}>
                  <Text style={styles.firstname}>Last Name :</Text>
                  <Text style={styles.firstname}>Nalawade</Text>
                </View>
                <View style={styles.viewStyle}>
                  <Text style={styles.firstname}>Age :</Text>
                  <Text style={styles.firstname}>20</Text>
                </View>
                <View style={styles.viewStyle}>
                  <Text style={styles.firstname}>Gender :</Text>
                  <Text style={styles.firstname}>Female</Text>
                </View>
                <View style={styles.viewStyle}>
                  <Text style={styles.firstname}>Occupation :</Text>
                  <Text style={styles.firstname}>Engineer</Text>
                </View>

                <View style={styles.viewStyle}>
                  <Text style={styles.firstname}>Firm/Business name : </Text>
                  <Text style={styles.firstname}>Global</Text>
                </View>

                <View style={styles.viewStyle}>
                  <Text style={styles.firstname}>Phone number : </Text>
                  <Text style={styles.firstname}>9774625536</Text>
                </View>
              </View>


            </>
          );
        }}

      />



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
  },
  viewStyle: {
    flexDirection: 'row',
    alignItems: 'center',
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

})