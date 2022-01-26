import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { Picker } from "@react-native-picker/picker";
import CustomContainerInput from "../../components/CustomContainerInput";
import CustomText from "../../components/CustomText";

export default function SelectedHour({ text }) {
  const [selectedHour, setSelectedHour] = useState("00:00");

  return (
    <View style={{ flexDirection: "row" }}>
      <CustomContainerInput
        style={{
          width: 180,
          marginTop: 12,
          alignSelf: "center",
        }}
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
          <CustomText fontSize={18} color="#666866" fontWeight="normal">
            {text}
          </CustomText>
        </View>
      </CustomContainerInput>
      <View style={styles.container}>
        <Picker
          selectedValue={selectedHour}
          onValueChange={(itemValue, itemIndex) => setSelectedHour(itemValue)}
        >
          <Picker.Item label="00:00" value="Cero" />
          <Picker.Item label="04:00" value="Cuatro" />
          <Picker.Item label="08:00" value="Ocho" />
          <Picker.Item label="12:00" value="Doce" />
          <Picker.Item label="16:00" value="Dieciseis" />
          <Picker.Item label="20:00" value="Veinte" />
        </Picker>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    marginBottom: 20,
    marginTop: 12,
    borderRadius: 5,
    flex: 1,
    height: 50,
    justifyContent: "center",
    marginLeft: 6,
  },
});
