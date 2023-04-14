import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

const Background = ({ children }) => {
  return (
    <ImageBackground
      source={require('../../assets/images/bg-main.png')}
      style={styles.backgroundImage}
      resizeMode="cover">
      {children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});

export default Background;