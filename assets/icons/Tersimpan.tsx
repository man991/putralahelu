import React, { PropsWithChildren } from 'react';
import { View } from 'react-native';
import Svg, { Circle, Path } from "react-native-svg"

export default function Tersimpan({size,  color}: PropsWithChildren & { size?: number, color?: string }) {
  return (
    <View>
      <Svg
        viewBox="0 0 24 24"
        height="24"
        width="24"
        fontSize={size}
        fill={color}
      >
        <Path d="M11.024 11.536 10 10l-2 3h9l-3.5-5z" />
        <Circle cx="9.503" cy="7.497" r="1.503" />
        <Path d="M19 2H6c-1.206 0-3 .799-3 3v14c0 2.201 1.794 3 3 3h15v-2H6.012C5.55 19.988 5 19.806 5 19s.55-.988 1.012-1H21V4c0-1.103-.897-2-2-2zm0 14H5V5c0-.806.55-.988 1-1h13v12z"/>
      </Svg>
    </View>
  );
}
