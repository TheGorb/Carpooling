import React from 'react';

// UI
import {View, Text, StyleSheet} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const JourneyCard = (props) => {
    const styles = StyleSheet.create({
        cardBlock: {
            borderWidth: 1,
            borderColor: props.publisherIsDriver ? 'blue' : 'red',
            borderRadius: 15,
            padding: 10
        },
        departureToArrivalBlock: {
            flexDirection: 'row'
        }
    });

    return (
        <View style={styles.cardBlock}>
            <View style={styles.departureToArrivalBlock}>
                <Text>
                    {props.departure}
                </Text>
                <Text> -> </Text>
                <Text>
                    {props.arrival}
                </Text>
            </View>
            <Text>
                {props.date}
            </Text>
            <Text>
                {props.time} 
            </Text>
        </View>
    );
};

export default JourneyCard;