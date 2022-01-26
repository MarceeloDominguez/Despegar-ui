import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Price({ item }) {
  const { price } = item;

  return (
    <>
      {price && (
        <View style={styles.containerPrice}>
          <Text style={styles.simboloPrice}>$ </Text>
          <Text style={styles.price}>{price}</Text>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  containerPrice: {
    flexDirection: "row",
    marginHorizontal: 12,
    marginBottom: 2, //estab en 8
  },

  simboloPrice: {
    color: "#444444",
    fontSize: 11,
    top: 4,
  },

  price: {
    fontSize: 15,
    color: "#444444",
    alignContent: "flex-end",
  },
});
