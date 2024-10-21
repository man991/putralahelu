import { Tabs } from "expo-router";
import React from "react";
import { Image } from "react-native";
import MainHome from "@/assets/icons/MainHome";
import Topik from "@/assets/icons/Topik";
import PostingIcon from "@/assets/icons/Posting";
import Notification from "@/assets/icons/Notification";
import { styles } from "../../../customstyles/styles";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#4c9dff",
        tabBarInactiveTintColor: "black",
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="(toptabs)"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <MainHome color={color} />,
        }}
      />
      <Tabs.Screen
        name="topic"
        options={{
          title: "Topic",
          tabBarIcon: ({ color }) => <Topik color={color} />,
        }}
      />
      <Tabs.Screen
        name="posting"
        options={{
          title: "Posting",
          tabBarIcon: ({ color }) => <PostingIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="notification"
        options={{
          title: "Notification",
          tabBarIcon: ({ color }) => <Notification color={color} />,
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: "Account",
          tabBarIcon: () => (
            <Image
              source={{
                uri: "https://lahelu.com/media/default/pp-not-found.jpg",
              }}
              style={styles.userIcon}
            />
          ),
        }}
      />
    </Tabs>
  );
}

