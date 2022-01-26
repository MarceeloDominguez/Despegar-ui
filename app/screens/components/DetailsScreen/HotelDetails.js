import React from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  ScrollView,
} from "react-native";
import BannerSelectDate from "../BannerSelectDate";
import BtnHorizontalDetails from "../BtnHorizontalDetails";
import CarouselDetails from "../CarouselDetails";

export default function HotelDetails({ route }) {
  const items = route.params;
  const itemsDetails = items.arrayDetails;

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {itemsDetails.map((item, index) => (
        <View key={index}>
          <ImageBackground style={styles.image} source={{ uri: item.image }}>
            <View style={styles.containerText}>
              <Text numberOfLines={4} style={styles.title}>
                {item.title}
              </Text>
              <Text numberOfLines={4} style={styles.description}>
                {item.description}
              </Text>
            </View>
          </ImageBackground>
          <BannerSelectDate item={item} />
        </View>
      ))}
      <BtnHorizontalDetails items={items} />
      <CarouselDetails items={items} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 230,
  },
  containerText: {
    flex: 1,
    margin: 12,
  },
  title: {
    fontSize: 30,
    color: "#fff",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 1, height: -1 },
    textShadowRadius: 10,
    fontWeight: "700",
  },
  description: {
    fontSize: 17,
    color: "#fff",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 1, height: -1 },
    textShadowRadius: 10,
    fontWeight: "600",
    lineHeight: 24,
  },
});
