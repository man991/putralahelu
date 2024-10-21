import ArrowDown from "../../assets/icons/ArrowDown";
import ArrowUp from "../../assets/icons/ArrowUp";
import { useState, type PropsWithChildren } from "react";
import { View, Text, Pressable } from "react-native";
import { styles } from "./styles";
import React from 'react'

type Props = PropsWithChildren<{
  label: string;
}>;

export default function VoteGroup({ label }: Props) {
  const [isPressed, setIsPressed] = useState<boolean>(false);

  return (
    <View style={{ flexDirection: "row" }}>
      <Pressable
        onPressIn={() => setIsPressed(true)}
        onPressOut={() => setIsPressed(false)}
      >
        <View style={[styles.upContainer, { opacity: isPressed ? 0.8 : 1 }]}>
          <View style={styles.content}>
            <ArrowUp />
            <Text style={styles.text}>{label}</Text>
          </View>
        </View>
      </Pressable>

      <View style={[styles.downContainer, { opacity: isPressed ? 0.8 : 1 }]}>
        <View style={styles.content}>
          <ArrowDown />
        </View>
      </View>
    </View>
  );
}
