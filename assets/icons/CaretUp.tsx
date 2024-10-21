import React from 'react';
import {  View, StyleSheet } from 'react-native';
import Svg, { Path } from "react-native-svg"

export default function CarretUp() {
  return (
    <View style={styles.container}>
      <Svg
        viewBox="0 0 24 24"
        height="24"
        width="24"
      >
        <Path d="M3 19h18a1.002 1.002 0 0 0 .823-1.569l-9-13c-.373-.539-1.271-.539-1.645 0l-9 13A.999.999 0 0 0 3 19zm9-12.243L19.092 17H4.908L12 6.757z" />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});