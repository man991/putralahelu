import React, { PropsWithChildren } from 'react';
import {  View } from 'react-native';
import Svg, { Path } from "react-native-svg"

export default function Trending({size,  color}: PropsWithChildren & { size: number, color: string }) {
  return (
    <View>
      <Svg
        viewBox="0 0 24 24"
        height="24"
        width="24"
        fontSize={size}
        fill={color}
      >
        <Path d="m10 10.414 4 4 5.707-5.707L22 11V5h-6l2.293 2.293L14 11.586l-4-4-7.707 7.707 1.414 1.414z" />
      </Svg>
    </View>
  );
}