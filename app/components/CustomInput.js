import React from "react";
import { View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import CustomContainerInput from "./CustomContainerInput";
import CustomText from "./CustomText";

export default function CustomInput({ text, nameIcon, marginLeft }) {
  return (
    <CustomContainerInput style={{ marginTop: 12 }}>
      <Icon
        name={nameIcon}
        size={22}
        style={{
          alignSelf: "flex-end",
        }}
        color="#666866"
      />
      <View style={{ marginLeft: marginLeft || 12 }}>
        <CustomText fontSize={18} color="#666866" fontWeight="normal">
          {text}
        </CustomText>
      </View>
    </CustomContainerInput>
  );
}
