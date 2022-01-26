import React from "react";
import { View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import VueloAlojamiento from "./VueloAlojamiento";
import VueloDosAlojamientos from "./VueloDosAlojamientos";
import VueloMasAuto from "./VueloMasAuto";

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
          tabBarLabelStyle: { fontSize: 11 },
        }}
      >
        <Tab.Screen
          name="VueloAlojamiento"
          component={VueloAlojamiento}
          options={{ title: "VUELO + ALOJAMIENTO" }}
        />
        <Tab.Screen
          name="VueloDosAlojamientos"
          component={VueloDosAlojamientos}
          options={{ title: "VUELO + 2 ALOJAMIENTOS" }}
        />
        <Tab.Screen
          name="VueloMasAuto"
          component={VueloMasAuto}
          options={{ title: "VUELO + AUTO" }}
        />
      </Tab.Navigator>
    </View>
  );
}
