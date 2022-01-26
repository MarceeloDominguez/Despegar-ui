import React from "react";
import { StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import CustomText from "../../components/CustomText";
import CustomButton from "../../components/CustomButton";
import SelectedHour from "../components/SelectedHour";
import CustomInput from "../../components/CustomInput";

export default function ToTheAirport() {
  return (
    <Card style={styles.card}>
      <CustomText
        fontSize={12}
        style={{ textTransform: "uppercase", marginTop: 22 }}
      >
        desde
      </CustomText>

      <CustomInput text="ingresá un hotel o lugar" nameIcon="locate-outline" />

      <CustomText
        fontSize={12}
        style={{ textTransform: "uppercase", marginTop: 12 }}
      >
        hasta
      </CustomText>

      <CustomInput text="ingresá un aeropuerto" nameIcon="location-sharp" />

      <CustomText
        fontSize={12}
        style={{ textTransform: "uppercase", marginTop: 12 }}
      >
        llegada del vuelo
      </CustomText>

      <SelectedHour text="Partida" />

      <CustomText
        fontSize={12}
        style={{ textTransform: "uppercase", marginTop: 12 }}
      >
        pasajeros
      </CustomText>

      <CustomInput text="1 persona" nameIcon="person" />

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
