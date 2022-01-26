import React from "react";
import { Text } from "react-native";

export default function CustomText({
  color,
  fontWeight,
  fontSize,
  style,
  children,
}) {
  return (
    <Text
      style={[
        {
          color: color || "#fff",
          fontWeight: fontWeight || "bold",
          fontSize: fontSize || 20,
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
}
