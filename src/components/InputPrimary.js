import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";

const InputPrimary = ({ newValueItem, handlerOnChangeItem, errorInput }) => {
  return (
    <View style={styles.containerInput}>
      <TextInput
        value={newValueItem}
        style={styles.input}
        placeholder="Escribe"
        onChangeText={handlerOnChangeItem}
      />
      <Text style={styles.error}>{errorInput ? errorInput : ""}</Text>
    </View>
  );
};

export default InputPrimary;

const styles = StyleSheet.create({
  containerInput: {
    flex: 1,
  },
  input: {
    backgroundColor: "#abb2b9",
    borderBottomColor: "white",
    borderBottomWidth: 2,

    borderRadius: 6,
  },
  error: {
    color: "#ec7063",
  },
});
