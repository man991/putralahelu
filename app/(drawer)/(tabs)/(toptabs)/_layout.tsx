import React from "react";
import {
  createMaterialTopTabNavigator,
  MaterialTopTabNavigationOptions,
  MaterialTopTabNavigationEventMap,
} from "@react-navigation/material-top-tabs";
import { withLayoutContext } from "expo-router";
import { ParamListBase, TabNavigationState } from "@react-navigation/native";

const { Navigator } = createMaterialTopTabNavigator();

export const MaterialTopTabs = withLayoutContext<
  MaterialTopTabNavigationOptions,
  typeof Navigator,
  TabNavigationState<ParamListBase>,
  MaterialTopTabNavigationEventMap
>(Navigator);

const TopLayout = () => {
  return (
    <MaterialTopTabs
      screenOptions={{
        tabBarActiveTintColor: "#131620",
        tabBarIndicatorContainerStyle: { backgroundColor: "white" },
        tabBarLabelStyle: {
          fontWeight: "bold",
          textTransform: "capitalize",
          fontSize: 14,
        },
        tabBarIndicatorStyle: { backgroundColor: "#1C87ED", height: 3 },
        swipeEnabled: false,
      }}
    >
      <MaterialTopTabs.Screen name="index" options={{ title: "Home" }} />
      <MaterialTopTabs.Screen name="fresh" options={{ title: "Fresh" }} />
      <MaterialTopTabs.Screen name="trending" options={{ title: "Trending" }} />
    </MaterialTopTabs>
  );
};

export default TopLayout;
