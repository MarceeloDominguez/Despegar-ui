import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function ButtonHorizontal({ item }) {
  const buttons = item.arrayButton;

  return (
    <>
      {buttons && (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={{ flexDirection: "row", marginLeft: 12 }}>
            {buttons.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.button,
                  { backgroundColor: item.backgroundColor },
                ]}
              >
                <Text style={styles.textButton}>{item.text}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    marginBottom: 14,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginRight: 4,
  },

  textButton: {
    fontWeight: "bold",
    color: "#24056c",
    fontSize: 12,
  },
});
