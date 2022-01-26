import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Ranting from "./Ranting";
import Price from "./Price";
import Carousel from "./Carousel";
import Suggestion from "./Suggestion";

export default function CarouselDetails({ items }) {
  const getItems = items;
  const {
    subTitle,
    subDescription,
    arrayImages,
    nameHotel,
    distance,
    overview,
    info,
    textPrice,
    suggestion,
    arraySuggestion,
    arrayIcon,
  } = getItems;

  return (
    <View style={{ marginBottom: 26 }}>
      <View style={styles.container}>
        <Text style={styles.subTitle}>{subTitle}</Text>
        <Text style={styles.subDescription}>{subDescription}</Text>
      </View>
      <View style={styles.containerCard}>
        <View style={styles.headerCard}>
          <Icon
            name="bed-outline"
            color="#fff"
            style={{ alignSelf: "center", marginRight: 6 }}
            size={18}
          />
          <Text style={styles.headerText}>
            ¡Este es el alojamiento que estás buscando!
          </Text>
        </View>

        <Carousel arrayImages={arrayImages} />

        <View style={{ backgroundColor: "#fff" }}>
          <Text style={styles.nameHotel}>{nameHotel}</Text>
          <Text style={styles.distance}>{distance}</Text>
          <View style={{ marginHorizontal: 6 }}>
            <Ranting item={getItems} />
          </View>

          <View style={styles.containerIcon}>
            {arrayIcon.map((item, index) => (
              <Icon
                key={index}
                name={item.nameIcon}
                size={18}
                style={{ marginRight: 5 }}
              />
            ))}
          </View>

          <TouchableOpacity style={styles.touchableOpacity}>
            <Icon
              name="alert-circle-outline"
              style={{ alignSelf: "center", marginRight: 5 }}
              size={16}
            />
            <Text style={styles.textTouchable}>
              Opciones con reserva flexible
            </Text>
          </TouchableOpacity>
          <View style={styles.containerOverview}>
            <Text style={styles.textOverview}>{overview}</Text>
          </View>
          <View style={styles.containerInfo}>
            <Text style={styles.textInfo}>
              {info} <Text>{textPrice}</Text>{" "}
            </Text>
            <TouchableOpacity style={styles.containerButton}>
              <Text style={styles.textButton}>Ver detalle</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.containerPrice}>
            <Price item={getItems} />
          </View>
          <View style={styles.line} />
          <Text style={styles.textFooter}>Pagá el alojamiento en 1 pago</Text>
        </View>
      </View>

      <Suggestion arraySuggestion={arraySuggestion} suggestion={suggestion} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginVertical: 22,
  },
  subTitle: {
    fontSize: 30,
    fontWeight: "700",
    marginBottom: 14,
    color: "#444444",
  },
  subDescription: {
    fontSize: 16,
    color: "#666666",
  },
  containerCard: {
    marginHorizontal: 16,
    backgroundColor: "#270570",
    borderWidth: 2,
    borderColor: "#270570",
    borderRadius: 10,
    overflow: "hidden",
  },
  headerCard: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  headerText: {
    color: "#fff",
    fontSize: 14,
    width: 220,
    lineHeight: 20,
  },
  nameHotel: {
    color: "#444444",
    fontSize: 22,
    marginHorizontal: 20,
    width: 240,
    fontWeight: "700",
    marginBottom: 5,
    marginTop: 16,
  },
  distance: {
    marginHorizontal: 20,
    color: "#666666",
    marginBottom: 5,
  },
  containerIcon: {
    marginHorizontal: 20,
    marginVertical: 5,
    flexDirection: "row",
  },
  touchableOpacity: {
    marginHorizontal: 20,
    marginVertical: 12,
    borderWidth: 0.5,
    borderColor: "#ccc",
    flexDirection: "row",
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 4,
    width: "70%",
  },
  textTouchable: {
    fontWeight: "700",
    color: "#270570",
  },
  containerOverview: {
    borderBottomWidth: 0.5,
    borderBottomColor: "#ccc",
  },
  textOverview: {
    marginHorizontal: 20,
    color: "#666666",
    marginBottom: 5,
    lineHeight: 20,
    marginBottom: 12,
  },
  containerInfo: {
    flexDirection: "row",
    marginLeft: 20,
    marginRight: 10,
    marginTop: 12,
  },
  textInfo: {
    width: 180,
    color: "#666666",
  },
  containerButton: {
    height: 40,
    borderRadius: 50,
    flex: 1,
    backgroundColor: "#4300D2",
    alignSelf: "center",
    justifyContent: "center",
  },
  textButton: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "700",
    color: "#fff",
  },
  containerPrice: {
    paddingHorizontal: 6,
    marginBottom: 12,
  },
  line: {
    borderBottomWidth: 0.5,
    borderBottomColor: "#ccc",
  },
  textFooter: {
    color: "#666666",
    paddingVertical: 12,
    paddingHorizontal: 20,
  },

  // text: {
  //   color: "#fff",
  //   fontSize: 30,
  //   fontWeight: "bold",
  // },
});
