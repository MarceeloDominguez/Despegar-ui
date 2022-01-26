import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import CustomButton from "../../components/CustomButton";
import CustomCkeckbox from "../../components/CustomCkeckbox";
import CustomInput from "../../components/CustomInput";
import CustomText from "../../components/CustomText";
import SelectDates from "../components/SelectDates";
import SelectRooms from "../components/SelectRooms";

export default function VueloAlojamiento() {
  return (
    <Card style={styles.card}>
      <CustomText
        fontSize={12}
        style={{ textTransform: "uppercase", marginTop: 22 }}
      >
        origen
      </CustomText>

      <CustomInput text="Buenos Aires" nameIcon="locate-outline" />

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

      <SelectDates text1="Partida" text2="Regreso" />

      <CustomCkeckbox text="Todavía no decidí la fecha" />

      <SelectRooms />

      <CustomButton>Buscar</CustomButton>
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
