import React from "react";
import { View, Text } from "react-native";
import { Card } from "react-native-paper";
import CustomText from "../../components/CustomText";

export default function VueloDosAlojamientos() {
  return (
    <View
      style={{
        backgroundColor: "#270570",
        flex: 1,
        justifyContent: "center",
      }}
    >
      <Text
        style={{
          textAlign: "center",
          color: "#fff",
        }}
      >
        Screen vuelos + 2 ajojamientos
      </Text>
    </View>
  );
}
