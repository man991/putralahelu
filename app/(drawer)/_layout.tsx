import {
  View,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React from "react";
import Drawer from "expo-router/drawer";
import { ThemedText } from "@/components/ThemedText";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import { DrawerActions } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import CustomDrawerContent from "@/components/CustomDrawerItem/CustomDrawerContent";
import Fresh from "@/assets/icons/Fresh";
import House from "@/assets/icons/House";
import Trending from "@/assets/icons/Trending";
import Topik from "@/assets/icons/Topik";
import { drawerStyles as styles } from "@/customstyles/drawerStyles";

export default function Layout() {
  const leftComponent = () => {
    const navigation = useNavigation();
    const onToggle = () => {
      navigation.dispatch(DrawerActions.openDrawer());
    };
    return (
      <View style={styles.leftHeader}>
        <TouchableOpacity onPress={() => onToggle()}>
          <Ionicons name="menu" size={32} color="black" />
        </TouchableOpacity>
        <ThemedText type="defaultSemiBold" style={styles.titleText}>
          LAHELU
        </ThemedText>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <GestureHandlerRootView>
        <Drawer
          drawerContent={CustomDrawerContent}
          screenOptions={{
            gestureHandlerProps: { enabled: false },
            headerLeft: () => leftComponent(),
            headerRight: () => (
              <Ionicons
                name="search-sharp"
                size={28}
                color="black"
                style={styles.rightHeader}
              />
            ),
            headerTitle: "",
            drawerActiveBackgroundColor: "#4c9dff",
            drawerActiveTintColor: "#fff",
            drawerLabelStyle: { marginLeft: -20 },
            drawerItemStyle: {
              marginVertical: 0,
              borderRadius: 0,
              width: "100%",
              marginLeft: 0,
            },
          }}
        >
          <Drawer.Screen
            name="(tabs)"
            options={{
              drawerLabel: "Home",
              drawerIcon: ({ size, color }) => (
                <House size={size} color={color} />
              ),
            }}
          />

          <Drawer.Screen
            name="fresh"
            options={{
              drawerLabel: "Fresh",
              drawerIcon: ({ size, color }) => (
                <Fresh size={size} color={color} />
              ),
            }}
          />

          <Drawer.Screen
            name="trending"
            options={{
              drawerLabel: "Trending",
              drawerIcon: ({ size, color }) => (
                <Trending size={size} color={color} />
              ),
            }}
          />

          <Drawer.Screen
            name="topic"
            options={{
              drawerLabel: "Topik",
              drawerIcon: ({ size, color }) => (
                <Topik size={size} color={color} />
              ),
            }}
          />
        </Drawer>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
}
