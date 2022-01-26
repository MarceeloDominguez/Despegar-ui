import React from "react";
import { View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { Card } from "react-native-paper";
import CustomButton from "../../components/CustomButton";
import CustomContainerInput from "../../components/CustomContainerInput";
import CustomText from "../../components/CustomText";
import CustomInput from "../../components/CustomInput";

export default function SoloIda() {
  return (
    <Card style={styles.card}>
      <CustomText
        fontSize={12}
        style={{ textTransform: "uppercase", marginTop: 22 }}
      >
        origen
      </CustomText>

      <CustomInput text="Aeropuerto El Palomar" nameIcon="locate-outline" />

      <CustomText
        fontSize={12}
        style={{ textTransform: "uppercase", marginTop: 12 }}
      >
        destino
      </CustomText>

      <CustomInput
        text="Ingresá hacia dónde viajas"
        nameIcon="location-sharp"
      />

      <CustomText
        fontSize={12}
        style={{ textTransform: "uppercase", marginTop: 12 }}
      >
        Fechas
      </CustomText>

      <View style={{ flexDirection: "row" }}>
        <CustomContainerInput
          style={{ marginRight: 2, marginTop: 12, width: "50%" }}
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
              Partida
            </CustomText>
          </View>
        </CustomContainerInput>
      </View>

      <CustomText
        fontSize={12}
        style={{ textTransform: "uppercase", marginTop: 12 }}
      >
        pasajeros y clase de boleto
      </CustomText>

      <CustomInput text="1 persona, económica" nameIcon="person" />

      <CustomButton onPress={() => console.log("Pressed")}>Buscar</CustomButton>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: "#24056c",
    paddingHorizontal: 16,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
});
