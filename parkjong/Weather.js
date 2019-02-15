import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import PropTypes from "prop-types";

const WeatherCases = {
  Rain: {
    colors: ["#00C6FB", "#005BEA"],
    title: "비와요",
    subtitle: "흑흫",
    icon: "weather-rainy"
  },
  Clear: {
    colors: ["#FEF253", "#FF7300"],
    title: "맑음",
    subtitle: "맑",
    icon: "weather-sunny"
  },
  Thunderstorm: {
    colors: ["#00ECBC", "#007ADF"],
    title: "폭풍!",
    subtitle: "흑흫",
    icon: "weather-lightning"
  },
  Clouds: {
    colors: ["#D7D2CC", "#304352"],
    title: "구름!",
    subtitle: "구름",
    icon: "weather-cloudy"
  },
  Snow: {
    colors: ["#7DE2FC", "#B9B6E5"],
    title: "눈!",
    subtitle: "ㄴ!",
    icon: "weather-snowy"
  },
  Drizzel: {
    colors: ["#89F7FE", "#66A6FF"],
    title: "이슬비!",
    subtitle: "촉촉",
    icon: "weather-hail"
  },
  Haze: {
    colors: ["#89F7FE", "#66A6FF"],
    title: "안개",
    subtitle: "ㅇㄱ",
    icon: "weather-fog"
  },
  Mist: {
    colors: ["#D7D2CC", "#304352"],
    title: "습!!",
    subtitle: "습읍",
    icon: "weather-fog"
  }
};

// export default class Weather extends Component {
//   render() {
//     return (
//       <LinearGradient
//         colors={["#00C6FB", "#005BEA", "red"]}
//         style={styles.container}
//       >
//         <View style={styles.upper}>
//           <Ionicons color="white" size={144} name="ios-rainy" />
//           <Text style={styles.temp}> 35도</Text>
//         </View>
//         <View style={styles.lower}>
//           <Text style={styles.title}> 비옴 시바</Text>
//           <Text style={styles.subtitle}> 흠</Text>
//         </View>
//       </LinearGradient>
//     );
//   }
// }

function Weather({ weatherName, temp }) {
  console.log(weatherName);
  return (
    <LinearGradient
      colors={weatherCases[weatherName].colors}
      style={styles.container}
    >
      <View style={styles.upper}>
        <MaterialCommunityIcons
          color="white"
          size={144}
          name={weatherCases[weatherName].icon}
        />
        <Text style={styles.temp}> {temp}도</Text>
      </View>
      <View style={styles.lower}>
        <Text style={styles.title}> {WeatherCases[weatherName].title}</Text>
        <Text style={styles.subtitle}>
          {weatherCases[weatherName].subtitle}
        </Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  weatherName: PropTypes.string.isRequired
};

export default Weather;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  upper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent"
  },
  temp: {
    fontSize: 48,
    backgroundColor: "transparent",
    color: "white",
    marginTop: 10
  },
  lower: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-end",
    paddingLeft: 25
  },
  title: {
    fontSize: 38,
    backgroundColor: "transparent",
    color: "white",
    marginBottom: 10,
    fontWeight: "300"
  },
  subtitle: {
    fontSize: 24,
    backgroundColor: "transparent",
    color: "white",
    marginBottom: 24
  }
});
