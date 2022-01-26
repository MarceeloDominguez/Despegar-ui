import React from "react";
import { Button } from "react-native-paper";

export default function CustomButton({
  icon,
  children,
  style,
  onPress,
  labelStyle,
}) {
  return (
    <Button
      icon={icon || "magnify"}
      mode="contained"
      onPress={onPress}
      uppercase={false}
      contentStyle={{ backgroundColor: "#FA503F", paddingVertical: 5 }}
      style={[
        {
          borderRadius: 50,
        },
        style,
      ]}
      labelStyle={[{ fontSize: 18 }, labelStyle]}
    >
      {children}
    </Button>
  );
}
