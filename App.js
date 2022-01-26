import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from "react-native-safe-area-context";
import TabBottomNavigator from "./app/navigation/TabBottomNavigator";

export default function App() {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <NavigationContainer>
        <TabBottomNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
