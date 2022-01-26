import React from "react";
import { TouchableOpacity, View } from "react-native";

export default function CustomContainerInput({
  children,
  backgroundColor,
  padding,
  marginVertical,
  borderRadius,
  flexDirection,
  style,
}) {
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={[
        {
          backgroundColor: backgroundColor || "#fff",
          padding: padding || 12,
          marginVertical: marginVertical || 20,
          borderRadius: borderRadius || 5,
          flexDirection: flexDirection || "row",
        },
        style,
      ]}
    >
      {children}
    </TouchableOpacity>
  );
}
