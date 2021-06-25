import { Button, TextInput, View } from 'react-native';

import PropTypes from 'prop-types'
import React from 'react'
import styles from '../Styles.jsx'

function AddItem(props) {
    return (
        <>
            <View style={styles.secondView}>
                <TextInput
                    style={styles.firstText}
                    placeholder="Ingrese El Texto"
                    onChangeText={props.setTextState}
                    value={props.textState} />
                <Button title="Add" onPress={() => !!props.textState && props.handleAddItem()} />
            </View>
        </>
    )
}

export default AddItem

