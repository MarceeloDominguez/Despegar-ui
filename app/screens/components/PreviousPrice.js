import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function PreviousPrice({ item }) {
  const { previousPrice, discount } = item;

  return (
    <>
      {previousPrice && (
        <View style={styles.containerPreviousPrice}>
          <Text style={styles.previousPrice}>{previousPrice}</Text>
          <View style={styles.viewShapes}>
            <View style={styles.triangle} />
            <Text style={styles.discount}>{discount}</Text>
          </View>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  containerPreviousPrice: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  previousPrice: {
    marginHorizontal: 12,
    marginBottom: 8,
    textDecorationLine: "line-through",
    color: "#ccc",
    fontSize: 13,
  },

  discount: {
    backgroundColor: "#03A691",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
    color: "#fff",
  },

  viewShapes: {
    position: "absolute",
    bottom: 8,
    right: 0,
  },

  triangle: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderRightWidth: 13,
    borderTopWidth: 13,
    borderRightColor: "transparent",
    borderTopColor: "#03A691",

    transform: [{ rotate: "180deg" }],

    marginLeft: 30,
  },
});
