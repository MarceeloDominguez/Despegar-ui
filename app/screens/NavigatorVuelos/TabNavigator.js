import React from "react";
import { View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import IdaYvuelta from "./IdaYvuelta";
import SoloIda from "./SoloIda";
import Multidestino from "./Multidestino";

const Tab = createMaterialTopTabNavigator();

export default function TabNavigator() {
  return (
    <View style={{ height: 630 }}>
      <Tab.Navigator
        screenOptions={{
          tabBarIndicatorStyle: { backgroundColor: "#fff", borderRadius: 2 },
          tabBarStyle: {
            backgroundColor: "#24056c",
            elevation: 0,
            borderBottomWidth: 1,
            borderBottomColor: "#ccc",
          },
          tabBarActiveTintColor: "#fff",
          tabBarInactiveTintColor: "#ccc",
          tabBarPressColor: "#fff",
          tabBarLabelStyle: { fontSize: 12 },
        }}
      >
        <Tab.Screen
          name="IdaYvuelta"
          component={IdaYvuelta}
          options={{ title: "IDA Y VUELTA" }}
        />
        <Tab.Screen
          name="SoloIda"
          component={SoloIda}
          options={{ title: "SOLO IDA" }}
        />
        <Tab.Screen
          name="Multidestino"
          component={Multidestino}
          options={{ title: "MULTIDESTINO" }}
        />
      </Tab.Navigator>
    </View>
  );
}
