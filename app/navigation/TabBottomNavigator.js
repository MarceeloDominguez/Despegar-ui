import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
//screens
import Offers from "../screens/screensBottomTab/Offers";
import Travels from "../screens/screensBottomTab/Travels";
import Notifications from "../screens/screensBottomTab/Notifications";
import Account from "../screens/screensBottomTab/Account";
import TabTopNavigator from "./TabTopNavigator";
import HotelDetails from "../screens/components/DetailsScreen/HotelDetails";
import InsurenceDetails from "../screens/components/DetailsScreen/InsurenceDetails";
import CarDetails from "../screens/components/DetailsScreen/CarDetails";
import ActivitiesDetails from "../screens/components/DetailsScreen/ActivitiesDetails";
import FlightsDetails from "../screens/components/DetailsScreen/FlightsDetails";
import FlightsAndHotelDetails from "../screens/components/DetailsScreen/FlightsAndHotelDetails";

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="TabTopNavigator"
      shifting={false}
      activeColor="#4300D2"
      inactiveColor="#666866"
      barStyle={{ backgroundColor: "#fff", padding: 4, elevation: 12 }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName = "";
          switch (route.name) {
            case "TabTopNavigator":
              iconName = "magnify";
              break;
            case "Offers":
              iconName = "fire";
              break;
            case "Travels":
              iconName = "wallet-travel";
              break;
            case "Notifications":
              iconName = "bell-outline";
              break;
            case "Account":
              iconName = "account-outline";
              break;
          }

          return <Icon name={iconName} size={25} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name="TabTopNavigator"
        component={TabTopNavigator}
        options={{ title: "Buscar" }}
      />
      <Tab.Screen
        name="Offers"
        component={Offers}
        options={{ title: "Ofertas" }}
      />
      <Tab.Screen
        name="Travels"
        component={Travels}
        options={{ title: "Mis viajes" }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{ title: "Notificaciones" }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{ title: "Mi cuenta" }}
      />
    </Tab.Navigator>
  );
};

export default function TabBottomNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tabs"
        component={Tabs}
        options={{
          title: "",
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="HotelDetails"
        component={HotelDetails}
        options={{
          title: "Hoteles",
          headerRight: () => (
            <Icon name="share-variant" size={24} style={{ marginRight: 16 }} />
          ),
        }}
      />
      <Stack.Screen
        name="InsurenceDetails"
        component={InsurenceDetails}
        options={{
          title: "Seguros",
          headerRight: () => (
            <Icon name="share-variant" size={24} style={{ marginRight: 16 }} />
          ),
        }}
      />
      <Stack.Screen
        name="CarDetails"
        component={CarDetails}
        options={{
          title: "Autos",
          headerRight: () => (
            <Icon name="share-variant" size={24} style={{ marginRight: 16 }} />
          ),
        }}
      />
      <Stack.Screen
        name="ActivitiesDetails"
        component={ActivitiesDetails}
        options={{
          title: "Actividades",
          headerRight: () => (
            <Icon name="share-variant" size={24} style={{ marginRight: 16 }} />
          ),
        }}
      />
      <Stack.Screen
        name="FlightsDetails"
        component={FlightsDetails}
        options={{
          title: "Vuelos",
          headerRight: () => (
            <Icon name="share-variant" size={24} style={{ marginRight: 16 }} />
          ),
        }}
      />
      <Stack.Screen
        name="FlightsAndHotelDetails"
        component={FlightsAndHotelDetails}
        options={{
          title: "Vuelo + alojamiento",
          headerRight: () => (
            <Icon name="share-variant" size={24} style={{ marginRight: 16 }} />
          ),
        }}
      />
    </Stack.Navigator>
  );
}
