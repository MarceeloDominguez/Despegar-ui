import React from "react";
import { View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import CustomContainerInput from "../../components/CustomContainerInput";
import CustomText from "../../components/CustomText";

export default function SelectDates({ text1, text2 }) {
  return (
    <>
      <CustomText
        fontSize={12}
        style={{ textTransform: "uppercase", marginTop: 12 }}
      >
        Fechas
      </CustomText>

      <View style={{ flexDirection: "row" }}>
        <CustomContainerInput
          style={{ flex: 1, marginRight: 2, marginTop: 12 }}
        >
          <Icon
            name="calendar-outline"
            size={22}
            style={{
              alignSelf: "flex-end",
            }}
            color="#666866"
          />
          <View style={{ marginLeft: 12 }}>
            <CustomText fontSize={18} color="#ccc" fontWeight="normal">
              {text1}
            </CustomText>
          </View>
        </CustomContainerInput>
        <CustomContainerInput style={{ flex: 1, marginLeft: 2, marginTop: 12 }}>
          <Icon
            name="calendar-outline"
            size={22}
            style={{
              alignSelf: "flex-end",
            }}
            color="#666866"
          />
          <View style={{ marginLeft: 12 }}>
            <CustomText fontSize={18} color="#ccc" fontWeight="normal">
              {text2}
            </CustomText>
          </View>
        </CustomContainerInput>
      </View>
    </>
  );
}
