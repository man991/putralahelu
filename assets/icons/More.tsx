import React from 'react';
import {  View } from 'react-native';
import Svg, { Path } from "react-native-svg"

export default function More() {
  return (
    <View>
      <Svg
        viewBox="0 0 24 24"
        height="24"
        width="24"
      >
        <Path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
      </Svg>
    </View>
  );
}

