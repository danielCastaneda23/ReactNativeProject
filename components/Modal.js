import { Button, Modal, Text, View } from 'react-native';

import PropTypes from 'prop-types'
import React from 'react'

function ModalF(props) {
    return (
        <>
            <Modal animationType="fade" visible={props.modalVisible}>
                <Text> ¿Desea Eliminar Este Elemento?</Text>
                <Text>{props.itemSelected.value}</Text>
                <View>
                    <Button title="Confirm" onPress={props.handelConfirmDeleteItem}></Button>
                    <Button title="Not" onPress={props.handelNotConfirmDeleteItem}></Button>
                </View>
            </Modal>
        </>
    )
}

export default ModalF

