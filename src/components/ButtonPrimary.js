import { StyleSheet, Text, Pressable } from "react-native";
import React from "react";

const ButtonPrimary = ({ text, onPress }) => {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Text style={styles.textButton}>{text}</Text>
    </Pressable>
  );
};

export default ButtonPrimary;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#566573",
    padding: 10,
    width: 40,
    height: 40,
    margin: 5,
    borderRadius: 6,
    alignItems: "center",
  },
  textButton: {
    color: "white",
    fontWeight: "bold",
  },
});
