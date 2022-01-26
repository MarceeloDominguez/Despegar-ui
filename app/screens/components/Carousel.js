import React from "react";
import { View, Image } from "react-native";
import Swiper from "react-native-swiper";

export default function Carousel({ arrayImages }) {
  return (
    <Swiper
      showsButtons={true}
      height={200}
      loop={false}
      dotStyle={{ backgroundColor: "transparent" }}
      activeDotStyle={{ backgroundColor: "transparent" }}
    >
      {arrayImages.map((item, index) => (
        <View key={index}>
          <Image
            source={{
              uri: item.image,
            }}
            style={{ height: "100%" }}
          />
        </View>
      ))}
    </Swiper>
  );
}
