import React from "react";
import { View, ScrollView } from "react-native";
import CardContainer from "../../components/CardContainer";
import CustomText from "../../components/CustomText";
import Cards from "../components/Cards";
import TabNavigator from "../NavigatorTraslados/TabNavigator";
import { cardLeftD, cardRightD } from "../../util/dataDisney";
import { cardLeftLondon, cardRightLondon } from "../../util/dataLondon";
import { cardLeftBA, cardRightBA } from "../../util/dataBsAs";

export default function Traslados({ navigation }) {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{ backgroundColor: "#d4ccec" }}>
        <CardContainer>
          <CustomText style={{ margin: 16 }}>Traslados</CustomText>
          <TabNavigator />
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
        text1="explorá"
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
