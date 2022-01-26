import React from "react";
import { View, TouchableOpacity } from "react-native";

export default function CustomLocationButton({
  children,
  flexDirection,
  justifyContent,
  backgroundColor,
  paddingVertical,
  borderRadius,
  borderWidth,
  marginVertical,
  borderColor,
  style,
}) {
  return (
    <TouchableOpacity activeOpacity={1}>
      <View
        style={[
          {
            flexDirection: flexDirection || "row",
            justifyContent: justifyContent || "center",
            backgroundColor: backgroundColor || "#24056c",
            paddingVertical: paddingVertical || 10,
            borderRadius: borderRadius || 50,
            borderWidth: borderWidth || 1,
            borderColor: borderColor || "#fff",
            marginVertical: marginVertical || 20,
          },
          style,
        ]}
      >
        {children}
      </View>
    </TouchableOpacity>
  );
}
