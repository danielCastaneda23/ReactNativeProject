import { Button, Text, View } from 'react-native';

import React from 'react'
import styles from '../../Styles'

export default function ItemList(props) {
    return (
        <View style={styles.secondView}>
            <Text>{props.data.item.value}</Text>
            <Button title="Remove" onPress={() => props.handelModal(props.data.item.id)} />
        </View>
    );
}
