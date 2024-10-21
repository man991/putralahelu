import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Path } from "react-native-svg"

export default function ArrowUp() {
  return (
    <View style={styles.container}>
      <Svg
        viewBox="0 0 24 24"
        height="24"
        width="24"
      >
        <Path d="M12.781 2.375c-.381-.475-1.181-.475-1.562 0l-8 10A1.001 1.001 0 0 0 4 14h4v7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7h4a1.001 1.001 0 0 0 .781-1.625l-8-10zM15 12h-1v8h-4v-8H6.081L12 4.601 17.919 12H15z" />
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