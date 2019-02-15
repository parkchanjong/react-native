import React, { Component } from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import Weather from "./Weather";

const API_KEY = "3c74c81731ffabbe5f3633deb435b017";

export default class App extends React.Component {
  state = {
    isLoaded: false,
    error: null,
    temperature: null,
    name: null
  };
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this._getWeather(position.coords.latitude, position.coords.longitude);
        console.log(position);
      },
      error => {
        this.setState({
          error: error
        });
      }
    );
  }
  _getWeather = (lat, long) => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=${API_KEY}`
    )
      .then(response => response, json())
      .then(json => {
        this.setState({
          temperature: json.main.tem,
          name: json.Weather[0].main,
          isLoaded: true
        });
        console.log(json);
      });
  };
  render() {
    const { isLoaded, error, temperature, name } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        {isLoaded ? (
          <Weather weatherName={name} temp={Math.floor(temperature - 273.15)} />
        ) : (
          <View style={styles.loading}>
            <Text style={styles.loadingText}>날씨 준비중</Text>
            {error ? <Text style={styles.errorText}>{error}</Text> : null}
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  errorText: {
    color: "red",
    backgroundColor: "transparent",
    marginBottom: 40
  },
  loading: {
    flex: 1,
    backgroundColor: "#FDF6AA",
    justifyContent: "flex-end",
    paddingLeft: 25
  },
  loadingText: {
    fontSize: 38,
    marginBottom: 24
  }
});
