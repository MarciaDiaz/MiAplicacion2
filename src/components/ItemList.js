import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ButtonPrimary from "./ButtonPrimary";

const ItemList = ({ item, onHandlerModal }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.textCard}>{item.value}</Text>
      <ButtonPrimary text="-" onPress={() => onHandlerModal(item)} />
    </View>
  );
};

export default ItemList;

const styles = StyleSheet.create({
  card: {
    width: "80%",
    backgroundColor: "#808b96",
    marginHorizontal: "10%",
    fontWeight: "bold",
    margin: 5,
    borderRadius: 6,
    alignItems: "center",
    padding: 15,
    flexDirection: "row",
  },

  textCard: {
    flex: 1,
    textAlign: "center",
  },
});
