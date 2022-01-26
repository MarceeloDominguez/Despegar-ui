import React from "react";
import { Card } from "react-native-paper";

export default function CardContainer({
  marginHorizontal,
  marginVertical,
  backgroundColor,
  borderRadius,
  style,
  children,
}) {
  return (
    <Card
      style={[
        {
          marginHorizontal: marginHorizontal || 10,
          marginVertical: marginVertical || 10,
          backgroundColor: backgroundColor || "#270570",
          borderRadius: borderRadius || 5,
        },
        style,
      ]}
    >
      {children}
    </Card>
  );
}
