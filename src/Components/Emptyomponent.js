
import { StyleSheet, Text, View ,Dimensions} from 'react-native'
import React from 'react'
import COLORS from '../assets/colors/Colors'
import FONTS from '../assets/Fonts'
const { height, width } = Dimensions.get('window');



const EmptyComponent = (props) => {
    return (
        <View style={[styles.ViewStyle, props?.EmptyComponentView]}>
            <Text style={styles.TextStyle}>{props?.DisplayText}</Text>
        </View>
    )
}

export default EmptyComponent

const styles = StyleSheet.create({
    ViewStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        height: height / 1.3,
    },
    TextStyle: {
        color: COLORS.BLACK,
        textAlign: 'center',
        fontFamily: FONTS.semiBold,
        fontSize: 16,
    },
})
