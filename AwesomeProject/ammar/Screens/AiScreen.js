import React from 'react';
import { View, Image, Text, Button } from 'react-native';

const AiScreen = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.backgroundImage} source={require('../Assets/welbgimg.jpeg')} blurRadius={5} />
      <View style={styles.overlay} />
      <Text style={styles.welcomeText}>Welcome to our app!</Text>
      <Button title="Log In" buttonStyle={styles.loginButton} />
      <Button title="Sign Up" buttonStyle={styles.signUpButton} />
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  welcomeText: {
    fontSize: 28,
    marginBottom: 20,
    color: 'white',
  },
  loginButton: {
    backgroundColor: 'blue',
    borderRadius: 5,
    marginBottom: 10,
  },
  signUpButton: {
    backgroundColor: 'green',
    borderRadius: 5,
  },
};

export default AiScreen;
