import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { View, StyleSheet } from "react-native";
import uuid from "react-native-uuid";
import ModalDelete from "./src/components/ModalDelete";
import ContainerAddItem from "./src/components/ContainerAddItem";
import ListItems from "./src/components/ListItems";

const App = () => {
  //otro estado para agregar, vacio para que se agregue
  const [newValueItem, setNewValueItem] = useState("");
  //para dar un error
  const [errorInput, setErrorInput] = useState("");
  //creo un estado
  const [items, setItems] = useState([]);
  //Uso del modal
  const [itemSelected, setItemSelected] = useState({});
  //Uso modal visible, con booleano,va a estar o no
  const [modalVisble, setModalVisible] = useState(false);

  const addItem = () => {
    //si no hay nada que retorne y no ejecute
    if (newValueItem == "") {
      //si hay un error o esta vacio
      setErrorInput("campo vacio");
      return;
    }
    //creao un objeto con id y value
    const item = {
      id: uuid.v4(),
      value: newValueItem,
    };
    //le sumo algo al array
    //setItems([...items, newValueItem]);
    setItems((currentItems) => [...currentItems, item]);
    //da la vuelta a cero
    setNewValueItem("");
  };

  //si cambia el texto, se agrega
  const handlerOnChangeItem = (text) => {
    setErrorInput("");
    setNewValueItem(text);
  };
  //se muestra o no si esta el modal, tambien que cuando pongo eliminar se setee el item
  const onHandlerModal = (item) => {
    setItemSelected(item);
    setModalVisible(!modalVisble);
  };
  //funcion para eliminar
  const onHandlerDelete = () => {
    setItems((currentItems) =>
      currentItems.filter((item) => item.id !== itemSelected.id)
    );
    setItemSelected({});
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <ContainerAddItem
        addItem={addItem}
        errorInput={errorInput}
        newValueItem={newValueItem}
        handlerOnChangeItem={handlerOnChangeItem}
      />
      <ListItems items={items} onHandlerModal={onHandlerModal} />

      <ModalDelete
        onHandlerModal={onHandlerModal}
        onHandlerDelete={onHandlerDelete}
        modalVisble={modalVisble}
        itemSelected={itemSelected}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    backgroundColor: "#eaecee",
    borderRadius: 6,
    flex: 1,
  },
});
