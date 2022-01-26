import React from "react";
import { View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import CustomContainerInput from "../../components/CustomContainerInput";
import CustomText from "../../components/CustomText";

export default function SelectRooms() {
  return (
    <>
      <CustomText
        fontSize={12}
        style={{ textTransform: "uppercase", marginTop: 12 }}
      >
        Habitaciones
      </CustomText>

      <View style={{ flexDirection: "row" }}>
        <CustomContainerInput
          style={{
            flex: 1,
            marginTop: 7,
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
            marginTop: 12,
          }}
        >
          <Icon
            name="bed-outline"
            size={22}
            style={{
              alignSelf: "flex-end",
            }}
            color="#666866"
          />
          <View style={{ marginLeft: 12 }}>
            <CustomText fontSize={18} color="#ccc" fontWeight="normal">
              1 habitación
            </CustomText>
          </View>
        </CustomContainerInput>
        <CustomContainerInput
          style={{
            flex: 1,
            marginTop: 7,
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
            marginTop: 12,
          }}
        >
          <Icon
            name="person"
            size={22}
            style={{
              alignSelf: "flex-end",
            }}
            color="#666866"
          />
          <View style={{ marginLeft: 12 }}>
            <CustomText fontSize={18} color="#ccc" fontWeight="normal">
              2 personas
            </CustomText>
          </View>
        </CustomContainerInput>
      </View>
    </>
  );
}
