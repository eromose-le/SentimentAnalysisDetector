import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: null,
    };
  }


  render() {
    return (
      <SafeAreaProvider>
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Find Sentiment</Text>
            <Text style={styles.subtitle}>Sentiment Analysis Detector</Text>
          </View>
          <View style={styles.inputContainer}>
            <Input placeholder="Enter text to perform Sentiment Analysis" onChangeText={(value) => this.setState({ input: value })}></Input>
          </View>
          <View style={styles.buttonContainer}>
            <Button title="Find Sentiment" buttonStyle={styles.button} titleStyle={{ fontSize: 20 }}></Button>
          </View>
          <View style={styles.imageContainer}>
            <Image source={require('./assets/drama.png')} style={styles.dramaImage}></Image>
          </View>
        </View>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#87d15c',
  },
  titleContainer: {
    marginTop: 70,
    marginLeft: 40
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white'
  },
  button: {
    width: 200,
    height: 57,
    backgroundColor: 'black',
    borderRadius: 8
  },
  buttonContainer: {
    alignItems: 'center',
  },
  inputContainer: {
    marginHorizontal: 10,
    marginTop: 90
  },
  imageContainer: {
    paddingTop: 50,
    alignItems: 'center'
  },
  dramaImage: {
    width: 170,
    height: 170
  }
})
