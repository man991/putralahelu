import { useState, type PropsWithChildren, type ReactElement } from "react";
import { View, Text, Pressable } from "react-native";
import { styles } from "./styles";
import React from 'react'

type Props = PropsWithChildren<{
  icon: ReactElement;
  label: string;
  color: string;
  textColor: string;
  height: number;
}>;

export default function CustomLabel({
  icon,
  label,
  color,
  textColor,
  height,
}: Props) {
  const [isPressed, setIsPressed] = useState<boolean>(false);
  return (
    <Pressable
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
    >
      <View
        style={[
          styles.container,
          {
            backgroundColor: color,
            height: height,
            opacity: isPressed ? 0.8 : 1,
          },
        ]}
      >
        <View style={styles.content}>
          {icon}
          <Text style={[styles.text, { color: textColor }]}>{label}</Text>
        </View>
      </View>
    </Pressable>
  );
}
