import React from "react";
import { StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import CustomButton from "../../components/CustomButton";
import CustomCkeckbox from "../../components/CustomCkeckbox";
import CustomText from "../../components/CustomText";
import SelectDates from "../components/SelectDates";
import CustomInput from "../../components/CustomInput";

export default function IdaYvuelta() {
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

      <SelectDates text1="Partida" text2="Regreso" />

      <CustomCkeckbox text="Todavía no decidí la fecha" />

      <CustomText fontSize={12} style={{ textTransform: "uppercase" }}>
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
