import React from "react";
import { View, ScrollView } from "react-native";
import CardContainer from "../../components/CardContainer";
import CustomText from "../../components/CustomText";
import TabNavigator from "../NavigatoPaquete/TabNavigator";
import Cards from "../components/Cards";
import { cardLeft, cardRight } from "../../util/dataPaquetes";
import { cardLeftParis, cardRightParis } from "../../util/dataPaquetesParis";
import { cardLeftLondon, cardRightLondon } from "../../util/dataLondon";
import { cardLeftBA, cardRightBA } from "../../util/dataBsAs";

export default function Paquetes({ navigation }) {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{ backgroundColor: "#d4ccec" }}>
        <CardContainer>
          <CustomText style={{ margin: 16, width: 200 }}>
            Paquetes turísticos con reserva flexible
          </CustomText>
          <TabNavigator />
        </CardContainer>
      </View>
      <Cards
        cardLeft={cardLeft}
        cardRight={cardRight}
        text1="aprovechá"
        text2="Orlando"
        text3="tierra de fantasías"
        navigation={navigation}
      />
      <Cards
        cardLeft={cardLeftParis}
        cardRight={cardRightParis}
        text1="explorá"
        text2="París"
        text3="la ciudad de las luces"
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
        text1="viajá a"
        text2="Buenos Aires"
        text3="la París de América Latina"
        navigation={navigation}
      />
    </ScrollView>
  );
}
