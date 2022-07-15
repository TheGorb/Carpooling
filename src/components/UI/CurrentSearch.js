import React from 'react';

// UI
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const CurrentSearch = ({navigation}) => {
    const styles = StyleSheet.create({
        cardBlock: {
            borderWidth: 1,
            padding: 10,
            flexDirection: 'row',
            alignItems: 'center'
        },
        leftArrowIcon: {
            fontSize: 25,
            marginRight: 20
        },
        departureToArrivalBlock: {
            flexDirection: 'row'
        }
    });

    return (
        <TouchableOpacity style={styles.cardBlock} >
            <FontAwesome5
                name="arrow-left"
                // onPress={() => navigation.navigate('Home')}
                style={styles.leftArrowIcon}>   
            </FontAwesome5>
            <View style={styles.departureToArrivalBlock}>
                <Text>Thionville</Text>
                <Text> -> </Text>
                <Text>Luxembourg</Text>
            </View>
        </TouchableOpacity>
    );
};

export default CurrentSearch;