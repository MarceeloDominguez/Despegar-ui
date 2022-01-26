import React from "react";
import { View, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import CardContainer from "../../components/CardContainer";
import CustomButton from "../../components/CustomButton";
import CustomContainerInput from "../../components/CustomContainerInput";
import CustomLocationButton from "../../components/CustomLocationButton";
import CustomText from "../../components/CustomText";
import Cards from "../components/Cards";
import { cardLeftD, cardRightD } from "../../util/dataDisney";
import { cardLeftLondon, cardRightLondon } from "../../util/dataLondon";
import { cardLeftBA, cardRightBA } from "../../util/dataBsAs";

export default function Actividades({ navigation }) {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: "#EEEEEE" }}
    >
      <View style={{ backgroundColor: "#d4ccec" }}>
        <CardContainer style={{ paddingHorizontal: 16, paddingVertical: 16 }}>
          <CustomText>Actividades</CustomText>
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
              Actividades cercanas a mí
            </CustomText>
          </CustomLocationButton>
          <CustomText
            fontSize={12}
            style={{ textTransform: "uppercase", marginTop: 12 }}
          >
            Destino
          </CustomText>
          <CustomContainerInput style={{ marginTop: 12 }}>
            <Icon
              name="location-sharp"
              size={22}
              style={{
                alignSelf: "flex-end",
              }}
              color="#666866"
            />
            <View style={{ marginLeft: 12 }}>
              <CustomText fontSize={18} color="#666866" fontWeight="normal">
                Cerca de mi ubicación actual
              </CustomText>
            </View>
          </CustomContainerInput>
          <CustomButton onPress={() => console.log("Pressed")}>
            Buscar
          </CustomButton>
        </CardContainer>
      </View>

      <Cards
        cardLeft={cardLeftD}
        cardRight={cardRightD}
        text1="sentí"
        text2="Orlando"
        text3="tierra de fantasías"
        navigation={navigation}
      />
      <Cards
        cardLeft={cardLeftLondon}
        cardRight={cardRightLondon}
        text1="descubrí"
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
