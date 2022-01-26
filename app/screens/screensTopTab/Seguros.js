import React, { useState } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import CardContainer from "../../components/CardContainer";
import CustomText from "../../components/CustomText";
import SelectDates from "../components/SelectDates";
import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";
import Cards from "../components/Cards";
import { cardLeftD, cardRightD } from "../../util/dataDisney";
import { cardLeftLondon, cardRightLondon } from "../../util/dataLondon";
import { cardLeftBA, cardRightBA } from "../../util/dataBsAs";

export default function Seguros({ navigation }) {
  const [selectedPlace, setSelectedPlace] = useState("Europa");

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{ backgroundColor: "#d4ccec" }}>
        <CardContainer style={{ paddingHorizontal: 16, paddingVertical: 16 }}>
          <CustomText style={{ marginBottom: 22 }}>Seguros de viaje</CustomText>
          <CustomText fontSize={12} style={{ textTransform: "uppercase" }}>
            Destino
          </CustomText>
          <View style={styles.container}>
            <Picker
              selectedValue={selectedPlace}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedPlace(itemValue)
              }
            >
              <Picker.Item label="Europa" value="Europa" />
              <Picker.Item label="Latinoamerica" value="Latinoamerica" />
              <Picker.Item label="Resto del mundo" value="RestoDelMundo" />
              <Picker.Item label="Estados unidos" value="EstadosUnidos" />
              <Picker.Item label="Argentina" value="Argentina" />
              <Picker.Item label="Multidestino" value="Multidestino" />
            </Picker>
          </View>

          <SelectDates text1="Partida" text2="Regreso" />

          <CustomText
            fontSize={12}
            style={{ textTransform: "uppercase", marginTop: 12 }}
          >
            Pasajeros
          </CustomText>

          <CustomInput text="1 persona" nameIcon="person" />

          <CustomButton>Buscar</CustomButton>
        </CardContainer>
      </View>
      <Cards
        cardLeft={cardLeftD}
        cardRight={cardRightD}
        text1="recorré"
        text2="Orlando"
        text3="tierra de fantasías"
        navigation={navigation}
      />
      <Cards
        cardLeft={cardLeftLondon}
        cardRight={cardRightLondon}
        text1="conocé"
        text2="Londres"
        text3="la capital del mundo"
        navigation={navigation}
      />
      <Cards
        cardLeft={cardLeftBA}
        cardRight={cardRightBA}
        text1="viajá a"
        text2="Buenos Aires"
        text3="la París de América Latina"
        navigation={navigation}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    marginBottom: 20,
    marginTop: 12,
    borderRadius: 5,
  },
});
