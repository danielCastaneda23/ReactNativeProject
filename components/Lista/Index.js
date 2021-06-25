import {FlatList, ScrollView} from 'react-native';

import ItemList from './ItemList';
import React from 'react'
import styles from '../../Styles'

export default function Index(props) {
    return (
        <ScrollView style={styles.thirdView}>
            <FlatList
                data={props.itemList}
                renderItem={data => <ItemList data={data} handelModal ={props.handelModal}/>}
                keyExtractor={item => item.id}
            />
        </ScrollView>
    )
}
