import React from "react";
import { View, StyleSheet } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
//screens
import Alojamientos from "../screens/screensTopTab/Alojamientos";
import Vuelos from "../screens/screensTopTab/Vuelos";
import Paquetes from "../screens/screensTopTab/Paquetes";
import Escapadas from "../screens/screensTopTab/Escapadas";
import Imbatibles from "../screens/screensTopTab/Imbatibles";
import Actividades from "../screens/screensTopTab/Actividades";
import Autos from "../screens/screensTopTab/Autos";
import Disney from "../screens/screensTopTab/Disney";
import Seguros from "../screens/screensTopTab/Seguros";
import Traslados from "../screens/screensTopTab/Traslados";

const Tab = createMaterialTopTabNavigator();

export default function TabTopNavigator() {
  const { top } = useSafeAreaInsets();

  return (
    <Tab.Navigator
      initialRouteName="Actividades"
      screenOptions={({ route }) => ({
        swipeEnabled: false,
        tabBarScrollEnabled: true,
        tabBarPressColor: "#fff",
        tabBarContentContainerStyle: {
          marginTop: top,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          textTransform: "none",
          fontWeight: "500",
          paddingTop: 40,
          width: "100%",
          alignSelf: "center",
        },
        tabBarItemStyle: {
          height: 115,
          width: 86,
        },

        tabBarActiveTintColor: "#270570",
        tabBarInactiveTintColor: "#666866",
        tabBarIndicatorStyle: {
          backgroundColor: "#270570",
          height: 4,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          width: 65,
          marginLeft: 10,
        },
        tabBarIcon: ({ color, focused }) => {
          let iconName = "";
          switch (route.name) {
            case "Alojamientos":
              iconName = "bed-king-outline";
              break;
            case "Vuelos":
              iconName = "airplane";
              break;
            case "Paquetes":
              iconName = "bag-checked";
              break;
            case "Escapadas":
              iconName = "star-outline";
              break;
            case "Imbatibles":
              iconName = "bag-personal-outline";
              break;
            case "Actividades":
              iconName = "ticket-percent-outline";
              break;
            case "Autos":
              iconName = "car-side";
              break;
            case "Disney":
              iconName = "chess-rook";
              break;
            case "Seguros":
              iconName = "medical-bag";
              break;
            case "Traslados":
              iconName = "van-passenger";
              break;
          }
          return (
            <View
              style={[
                styles.containerIcon,
                {
                  backgroundColor: focused && "#270570",
                  borderColor: focused ? "#270570" : "#666866",
                },
              ]}
            >
              <Icon
                name={iconName}
                size={40}
                color={focused ? "#fff" : "#666866"}
              />
            </View>
          );
        },
      })}
    >
      <Tab.Screen name="Alojamientos" component={Alojamientos} />
      <Tab.Screen name="Vuelos" component={Vuelos} />
      <Tab.Screen name="Paquetes" component={Paquetes} />
      <Tab.Screen name="Escapadas" component={Escapadas} />
      <Tab.Screen name="Imbatibles" component={Imbatibles} />
      <Tab.Screen name="Actividades" component={Actividades} />
      <Tab.Screen name="Autos" component={Autos} />
      <Tab.Screen name="Disney" component={Disney} />
      <Tab.Screen name="Seguros" component={Seguros} />
      <Tab.Screen name="Traslados" component={Traslados} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  containerIcon: {
    height: 70,
    width: 70,
    borderRadius: 100,
    borderWidth: 2,
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
  },
});
