import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default function BannerSelectDate({ item }) {
  return (
    <View style={styles.body}>
      <View style={{ width: 200 }}>
        <View style={styles.containerIconCity}>
          <Icon
            name="location-sharp"
            color="#fff"
            size={16}
            style={styles.icon}
          />
          <Text style={styles.city}>{item.city}</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity style={{ flexDirection: "row" }}>
            <Icon
              name="calendar-outline"
              color="#fff"
              size={16}
              style={styles.icon}
            />

            <Text style={styles.selectedData}>Selecciona una fecha</Text>
          </TouchableOpacity>
          <Icon
            name="person-outline"
            color="#fff"
            size={16}
            style={[{ marginLeft: 15 }, styles.icon]}
          />
        </View>
      </View>
      <View style={styles.containerIconSearch}>
        <View>
          <Icon
            name="search-outline"
            color="#fff"
            size={16}
            style={styles.iconSearch}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#270570",
    flexDirection: "row",
    paddingHorizontal: 12,
    paddingVertical: 18,
  },
  containerIconCity: {
    flexDirection: "row",
    marginBottom: 5,
  },
  city: {
    color: "#fff",
    fontSize: 14,
    marginHorizontal: 6,
  },
  selectedData: {
    color: "#fff",
    fontSize: 14,
    marginHorizontal: 6,
  },
  icon: {
    alignSelf: "center",
  },
  containerIconSearch: {
    justifyContent: "center",
    flex: 1,
    alignItems: "flex-end",
  },
  iconSearch: {
    padding: 10,
    backgroundColor: "#FA503F",
    borderRadius: 100,
  },
});
