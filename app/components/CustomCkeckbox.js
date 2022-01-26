import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Checkbox } from "react-native-paper";

export default function CustomCkeckbox({ text }) {
  const [checked, setChecked] = useState(false);

  return (
    <View style={styles.containerCheckbox}>
      <Checkbox
        status={checked ? "checked" : "unchecked"}
        onPress={() => {
          setChecked(!checked);
        }}
        color="#fff"
        uncheckedColor="#fff"
      />

      <Text style={{ color: "#fff", alignSelf: "center" }}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  containerCheckbox: {
    flexDirection: "row",
    marginBottom: 20,
    position: "relative",
    left: -9,
  },
});
