import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Card, Title } from "react-native-paper";

export default function Suggestion({ arraySuggestion, suggestion }) {
  return (
    <View style={styles.container}>
      <Text style={styles.textSuggestion}>{suggestion}</Text>
      {arraySuggestion.map((item, index) => (
        <TouchableOpacity activeOpacity={0.8} key={index}>
          <Card style={styles.card}>
            <Card.Cover
              source={{
                uri: item.image,
              }}
            />
            <Title style={styles.title}>
              <Text>Hoteles en</Text> {item.name}
            </Title>
          </Card>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginTop: 16,
  },
  textSuggestion: {
    fontSize: 30,
    fontWeight: "700",
    marginBottom: 14,
    color: "#444444",
  },
  card: {
    marginBottom: 20,
  },
  title: {
    textAlign: "center",
    marginVertical: 16,
    color: "#444444",
  },
});
