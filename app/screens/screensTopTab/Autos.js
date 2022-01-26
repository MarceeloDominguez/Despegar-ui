import React from "react";
import { View, ScrollView } from "react-native";
import CardContainer from "../../components/CardContainer";
import CustomButton from "../../components/CustomButton";
import CustomCkeckbox from "../../components/CustomCkeckbox";
import CustomInput from "../../components/CustomInput";
import CustomText from "../../components/CustomText";
import Cards from "../components/Cards";
import SelectedHour from "../components/SelectedHour";
import { cardLeftD, cardRightD } from "../../util/dataDisney";
import { cardLeftLondon, cardRightLondon } from "../../util/dataLondon";
import { cardLeftBA, cardRightBA } from "../../util/dataBsAs";

export default function Autos({ navigation }) {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{ backgroundColor: "#d4ccec" }}>
        <CardContainer style={{ paddingHorizontal: 16, paddingVertical: 16 }}>
          <CustomText style={{ width: 180, marginBottom: 22 }}>
            Alquiler de autos con reserva flexible
          </CustomText>

          <CustomText fontSize={12} style={{ textTransform: "uppercase" }}>
            Lugar de retiro
          </CustomText>

          <CustomInput
            text="Ingresá una ciudad o aeropuerto"
            nameIcon="location-sharp"
            marginLeft={6}
          />
          <CustomCkeckbox text="Devolverlo en otro destino" />

          <CustomText fontSize={12} style={{ textTransform: "uppercase" }}>
            Fecha de alquiler
          </CustomText>

          <SelectedHour text="Retiro" />

          <CustomText fontSize={12} style={{ textTransform: "uppercase" }}>
            Fecha de devolución
          </CustomText>

          <SelectedHour text="Devolución" />

          <CustomCkeckbox text="Todavía no decidí la fecha" />

          <CustomButton>Buscar</CustomButton>
        </CardContainer>
      </View>
      <Cards
        cardLeft={cardLeftD}
        cardRight={cardRightD}
        text1="conocé"
        text2="Orlando"
        text3="tierra de fantasías"
        navigation={navigation}
      />
      <Cards
        cardLeft={cardLeftLondon}
        cardRight={cardRightLondon}
        text1="visitá"
        text2="Londres"
        text3="la capital del mundo"
        navigation={navigation}
      />
      <Cards
        cardLeft={cardLeftBA}
        cardRight={cardRightBA}
        text1="recorré"
        text2="Buenos Aires"
        text3="la París de América Latina"
        navigation={navigation}
      />
    </ScrollView>
  );
}
