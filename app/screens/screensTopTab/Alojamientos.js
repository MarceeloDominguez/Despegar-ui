import React from "react";
import { View, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import CardContainer from "../../components/CardContainer";
import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";
import CustomLocationButton from "../../components/CustomLocationButton";
import CustomText from "../../components/CustomText";
import Cards from "../components/Cards";
import SelectDates from "../components/SelectDates";
import SelectRooms from "../components/SelectRooms";
import { cardLeftD, cardRightD } from "../../util/dataDisney";
import { cardLeftLondon, cardRightLondon } from "../../util/dataLondon";
import { cardLeftBA, cardRightBA } from "../../util/dataBsAs";

export default function Alojamientos({ navigation }) {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{ backgroundColor: "#d4ccec" }}>
        <CardContainer style={{ paddingHorizontal: 16, paddingVertical: 16 }}>
          <CustomText style={{ width: 210 }}>
            Alojamientos con reserva flexible
          </CustomText>
          <CustomLocationButton>
            <Icon
              name="navigate-outline"
              size={22}
              style={{
                marginRight: 5,
              }}
              color="#fff"
            />
            <CustomText fontSize={15} fontWeight="500">
              Alojamientos cercanos
            </CustomText>
          </CustomLocationButton>
          <CustomText fontSize={12} style={{ textTransform: "uppercase" }}>
            Destino
          </CustomText>

          <CustomInput
            text="Cerca de mi ubicación actual"
            nameIcon="location-sharp"
          />

          <SelectDates text1="Entrada" text2="Salida" />

          <SelectRooms />

          <CustomButton onPress={() => console.log("Pressed")}>
            Buscar
          </CustomButton>
        </CardContainer>
      </View>
      <Cards
        cardLeft={cardLeftD}
        cardRight={cardRightD}
        text1="viví"
        text2="Orlando"
        text3="tierra de fantasías"
        navigation={navigation}
      />
      <Cards
        cardLeft={cardLeftLondon}
        cardRight={cardRightLondon}
        text1="explorá"
        text2="Londres"
        text3="la capital del mundo"
        navigation={navigation}
      />
      <Cards
        cardLeft={cardLeftBA}
        cardRight={cardRightBA}
        text1="conocé"
        text2="Buenos Aires"
        text3="la París de América Latina"
        navigation={navigation}
      />
    </ScrollView>
  );
}
