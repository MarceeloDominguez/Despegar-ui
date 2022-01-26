import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Card } from "react-native-paper";
import CustomText from "../../components/CustomText";
import ButtonHorizontal from "./ButtonHorizontal";
import PreviousPrice from "./PreviousPrice";
import Price from "./Price";
import Ranting from "./Ranting";

export default function Cards({
  text1,
  text2,
  text3,
  cardLeft,
  cardRight,
  navigation,
}) {
  const handleItems = (item) => {
    if (item.title === "Alojamientos") {
      navigation.navigate("HotelDetails", item);
    }
    if (item.title === "Seguros") {
      navigation.navigate("InsurenceDetails", item);
    }
    if (item.title === "Autos") {
      navigation.navigate("CarDetails", item);
    }
    if (item.title === "Actividades") {
      navigation.navigate("ActivitiesDetails", item);
    }
    if (item.title === "Vuelos") {
      navigation.navigate("FlightsDetails", item);
    }
    if (item.title === "Vuelo + alojamiento") {
      navigation.navigate("FlightsAndHotelDetails", item);
    }
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>{text1}</Text>
        <View style={styles.viewOrlando}>
          <Text numberOfLines={2} style={styles.titleOrlando}>
            {text2},{" "}
            <Text numberOfLines={2} style={styles.subTitleOrlando}>
              {text3}
            </Text>
          </Text>
        </View>
      </View>

      <View style={styles.body}>
        <View style={{ flex: 1, marginRight: 4 }}>
          {cardLeft?.map((item, index) => (
            <TouchableOpacity key={index} onPress={() => handleItems(item)}>
              <Card style={styles.card}>
                <CustomText
                  fontSize={14}
                  style={styles.titleCards}
                  color="#666666"
                >
                  {item.title}
                </CustomText>

                <Image
                  style={{ height: 100 }}
                  source={{
                    uri: item.image,
                  }}
                  resizeMode="cover"
                />

                {item.numberNights && (
                  <TouchableOpacity style={styles.floatingButton}>
                    <Text style={styles.textFloatingButton}>
                      {item.numberNights}
                    </Text>
                  </TouchableOpacity>
                )}

                <Text numberOfLines={2} style={styles.descriptionCards}>
                  {item.description}
                </Text>

                <Ranting item={item} />

                {item.airline && (
                  <Text style={styles.textAirline}>{item.airline}</Text>
                )}

                <ButtonHorizontal item={item} />

                <View style={styles.divisor} />

                {item.info && <Text style={styles.info}>{item.info}</Text>}

                {item.textPrice && (
                  <Text style={styles.textPrice}>{item.textPrice}</Text>
                )}

                <Price item={item} />

                <PreviousPrice item={item} />
              </Card>
            </TouchableOpacity>
          ))}
        </View>
        <View style={{ flex: 1, marginLeft: 4 }}>
          {cardRight?.map((item, index) => (
            <TouchableOpacity key={index} onPress={() => handleItems(item)}>
              <Card style={styles.card}>
                <CustomText
                  fontSize={14}
                  style={styles.titleCards}
                  color="#666666"
                >
                  {item.title}
                </CustomText>

                <Image
                  style={{ height: 100 }}
                  source={{
                    uri: item.image,
                  }}
                  resizeMode="cover"
                />

                {item.numberNights && (
                  <TouchableOpacity style={styles.floatingButton}>
                    <Text style={styles.textFloatingButton}>
                      {item.numberNights}
                    </Text>
                  </TouchableOpacity>
                )}

                <Text numberOfLines={2} style={styles.descriptionCards}>
                  {item.description}
                </Text>

                <Ranting item={item} />

                {item.airline && (
                  <Text style={styles.textAirline}>{item.airline}</Text>
                )}

                <ButtonHorizontal item={item} />

                <View style={styles.divisor} />

                {item.info && <Text style={styles.info}>{item.info}</Text>}

                {item.textPrice && (
                  <Text style={styles.textPrice}>{item.textPrice}</Text>
                )}

                <Price item={item} />

                <PreviousPrice item={item} />
              </Card>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginVertical: 16,
  },

  title: {
    textTransform: "uppercase",
    fontWeight: "bold",
    color: "#666666",
    fontSize: 13,
  },

  viewOrlando: {
    flexDirection: "row",
    marginTop: 14,
  },

  titleOrlando: {
    color: "#444444",
    fontWeight: "bold",
    fontSize: 24,
  },

  subTitleOrlando: {
    color: "#444444",
    fontWeight: "500",
    fontSize: 24,
  },

  body: {
    flexDirection: "row",
    marginHorizontal: 12,
  },

  card: {
    marginVertical: 3,
    elevation: 0,
    borderWidth: 1,
  },

  titleCards: {
    paddingHorizontal: 6,
    textTransform: "uppercase",
    marginTop: 5,
    marginBottom: 8,
    letterSpacing: 1,
    fontSize: 12,
  },

  descriptionCards: {
    marginHorizontal: 12,
    marginVertical: 12,
    fontSize: 14,
    fontWeight: "bold",
    color: "#444444",
  },

  textAirline: {
    fontSize: 12,
    marginHorizontal: 12,
    marginBottom: 8,
    color: "#666666",
  },

  floatingButton: {
    marginHorizontal: 12,
    marginBottom: 14,
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 3,
    position: "absolute",
    top: 120,
    backgroundColor: "#24056c",
  },

  textFloatingButton: {
    fontWeight: "bold",
    color: "#fff",
    fontSize: 12,
    textTransform: "uppercase",
  },

  button: {
    marginHorizontal: 12,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    width: "65%",
    paddingHorizontal: 8,
    paddingVertical: 2,
  },

  textButton: {
    fontWeight: "bold",
    color: "#24056c",
    fontSize: 12,
  },

  divisor: {
    backgroundColor: "#ccc",
    height: 0.5,
  },

  info: {
    fontSize: 12,
    marginHorizontal: 12,
    marginTop: 8,
    color: "#666666",
  },

  textPrice: {
    fontSize: 12,
    marginHorizontal: 12,
    color: "#666666",
    marginBottom: 4,
  },
});
