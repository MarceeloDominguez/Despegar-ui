import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { View, Text } from "react-native";
import FromTheAirport from "./FromTheAirport";
import ToTheAirport from "./ToTheAirport";

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
          name="FromTheAirport"
          component={FromTheAirport}
          options={{ title: "DESDE EL AEROPUERTO" }}
        />
        <Tab.Screen
          name="ToTheAirport"
          component={ToTheAirport}
          options={{ title: "HACIA EL AEROPUERTO" }}
        />
      </Tab.Navigator>
    </View>
  );
}
