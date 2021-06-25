import AddItem from './components/AddItem';
import Index from './components/Lista/Index';
import ModalF from './components/Modal';
import React from 'react';
import {View} from 'react-native';
import styles from './Styles'
import {useState} from 'react';

export default function App() {
  const [itemList, setItemList] = useState<Array<Datos>>([]);
  const [itemSelected, setItemSelected] = useState<any>({});
  const [modalVisible, setModalVisible] = useState(false);
  const [textState, setTextState] = useState('');


  const handleAddItem = () => {
    setItemList(() => [
      ...itemList,
      {
        id: Math.random().toString(),
        value: textState
      },
    ])
    setTextState('');
  }
  const handelConfirmDeleteItem = () => {
    const id: string = itemSelected.id;
    setItemList(itemList.filter((item) => item.id !== id));
    setModalVisible(false)
    setItemSelected({})
  }

  const handelNotConfirmDeleteItem = () => {
    setModalVisible(false)
    setItemSelected({})
  }

  const handelModal = (id: string) => {
    setItemSelected(itemList.find(item => item.id === id))
    setModalVisible(true)
  }

  return (
    <View style={styles.firstView}>
      <AddItem
        textState={textState}
        handleAddItem={handleAddItem}
        setTextState={setTextState}
      />
      <Index
      itemList ={itemList}
      handelModal ={handelModal}
      />
      <ModalF
        modalVisible={modalVisible}
        handelConfirmDeleteItem={handelConfirmDeleteItem}
        handelNotConfirmDeleteItem={handelNotConfirmDeleteItem}
        itemSelected={itemSelected}
      />
    </View>
  );
}

interface Datos {
  id: string,
  value: string
}

