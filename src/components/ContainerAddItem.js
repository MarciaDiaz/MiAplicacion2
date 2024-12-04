import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import React from "react";
import ButtonPrimary from "./ButtonPrimary";
import InputPrimary from "./InputPrimary";

const ContainerAddItem = ({
  addItem,
  newValueItem,
  handlerOnChangeItem,
  errorInput,
}) => {
  return (
    <View style={styles.containerAdd}>
      <InputPrimary
        newValueItem={newValueItem}
        handlerOnChangeItem={handlerOnChangeItem}
        errorInput={errorInput}
      />
      <ButtonPrimary text="+" onPress={addItem} />
    </View>
  );
};

export default ContainerAddItem;

const styles = StyleSheet.create({
  containerAdd: {
    backgroundColor: "#abb2b9",
    margin: 10,
    padding: 10,
    flexDirection: "row",
    borderRadius: 6,
  },
});
