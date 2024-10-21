import React, { PropsWithChildren } from 'react';
import { View } from 'react-native';
import Svg, { Path } from "react-native-svg"

export default function Fresh({size,  color}: PropsWithChildren & { size: number, color: string }) {
  return (
    <View>
      <Svg
        viewBox="0 0 24 24"
        height="24"
        width="24"
        fontSize={size}
        fill={color}
      >
        <Path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
        <Path d="M13 7h-2v6h6v-2h-4z"/>
      </Svg>
    </View>
  );
}
