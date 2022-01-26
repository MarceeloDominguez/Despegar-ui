import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import StarRating from "react-native-star-rating";

export default function Ranting({ item }) {
  const { start, avarage } = item;
  const [ranting, setRanting] = useState(start);

  return (
    <>
      {start && (
        <View style={styles.container}>
          <Text style={styles.promedio}>{avarage}</Text>

          <StarRating
            disabled={false}
            emptyStar={"ios-star-outline"}
            fullStar={"ios-star"}
            halfStar={"ios-star-half"}
            iconSet={"Ionicons"}
            maxStars={5}
            rating={ranting}
            selectedStar={(rating) => setRanting(rating)}
            fullStarColor={"#FA8E04"}
            containerStyle={{
              alignSelf: "center",
            }}
            emptyStarColor="#fff"
            starSize={12}
            starStyle={{ marginHorizontal: 5 }}
          />
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 12,
    marginBottom: 12,
  },

  promedio: {
    padding: 3,
    backgroundColor: "#03A691",
    color: "#fff",
    borderRadius: 3,
    fontWeight: "bold",
    fontSize: 12,
  },
});
