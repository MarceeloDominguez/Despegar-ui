import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function BtnHorizontalDetails({ items }) {
  const buttons = items.arrayBtnDetails;

  return (
    <View style={styles.container}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        style={styles.viewScroll}
      >
        {buttons.map((item, index) => (
          <TouchableOpacity key={index} style={styles.button}>
            <Text style={styles.textButton}>{item.btn}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    backgroundColor: "#fff",
    marginHorizontal: 12,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 3,
  },
  viewScroll: {
    paddingVertical: 20,
    marginHorizontal: 12,
  },
  button: {
    borderWidth: 1,
    padding: 8,
    borderRadius: 50,
    marginRight: 10,
    borderColor: "#666666",
  },
  textButton: {
    fontSize: 16,
    color: "#666666",
    fontWeight: "600",
  },
});
