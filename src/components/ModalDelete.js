import { StyleSheet, Text, View, Modal, Pressable } from "react-native";
import React from "react";

const ModalDelete = ({
  onHandlerModal,
  onHandlerDelete,
  modalVisble,
  itemSelected,
}) => {
  return (
    <Modal animationType="fade" visible={modalVisble} transparent={true}>
      <View style={styles.containerModal}>
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>¿ELIMINAR?{itemSelected.value}</Text>
          <View style={styles.modalButtons}>
            <Pressable onPress={onHandlerDelete} style={styles.modalButton}>
              <Text style={styles.modalButtonText}>Sí</Text>
            </Pressable>
            <Pressable
              onPress={() => onHandlerModal({})}
              style={styles.modalButton}
            >
              <Text style={styles.modalButtonText}>No</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalDelete;

const styles = StyleSheet.create({
  containerModal: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Fondo oscuro translúcido
    justifyContent: "center", // Centra verticalmente
    alignItems: "center", // Centra horizontalmente
  },
  modalContent: {
    width: "80%",
    backgroundColor: "white", // Fondo del modal
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: "center",
  },
  modalText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  modalButton: {
    backgroundColor: "#808b96",
    padding: 10,
    borderRadius: 6,
    alignItems: "center",
    width: "40%",
  },
  modalButtonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
