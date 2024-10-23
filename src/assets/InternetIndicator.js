// import React, { useEffect, useState } from "react";
// import { Text } from "react-native";
// import NetInfo from "@react-native-community/netinfo";
// import Animated, {
//   useAnimatedStyle,
//   useDerivedValue,
//   useSharedValue,
//   withTiming,
// } from "react-native-reanimated";
// // import { COLORS } from "../assets/Theme";

// const InternetIndicator = () => {
//   // State
//   const [connected, setConnected] = useState(true);

//   const barHeight = useSharedValue(0);
//   const animatedStyle = useAnimatedStyle(() => {
//     return {
//       height: withTiming(barHeight.value),
//       backgroundColor: connected ? 'green' : 'red',
//       width: "100%",
//     };
//   }, [connected]);

//   useEffect(() => {
//     NetInfo.addEventListener((state) => {
//       const online = state.isConnected && state.isInternetReachable;
//       if (!online) {
//         setConnected(false);
//         barHeight.value = 40;

//       } else {

//         setConnected(true);
//         setTimeout(() => {
//           barHeight.value = online ? 0 : 30;
//         }, 1000);
//       }
//     });
//   }, []);

//   return (
//     <Animated.View style={[animatedStyle, { justifyContent: "center" }]}>
//       <Text style={{ color: "white", marginHorizontal: 8 }}>
//         {connected ? " you are online " : "Could not connect to internet"}
//       </Text>
//     </Animated.View>
//   );
// };
// export default InternetIndicator