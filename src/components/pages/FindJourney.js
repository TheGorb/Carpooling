import React from 'react';

// UI
import {View, Text, StyleSheet} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

// Components
import JourneyCard from '../UI/JourneyCard';
import CurrentSearch from '../UI/CurrentSearch';

const FindJourney = ({navigation}) => {
    const styles = StyleSheet.create({
        pageBlock: {
            flex: 1,
            padding: 15,
        },
        userIcon: {
            color: 'black',
            alignSelf: 'flex-end',
            fontSize: 50,
        },
    });

    return (
        <View style={styles.pageBlock}>
            {/* <FontAwesome5
                name="user-circle"
                onPress={() => navigation.navigate('Profile')}
                style={styles.userIcon}>   
            </FontAwesome5> */}
            <CurrentSearch></CurrentSearch>
            <JourneyCard 
                departure={"Thionville"}
                arrival={"Luxembourg"}
                date={"15/07/2022"}
                time={"08h00"}
                publisherIsDriver={true}
            ></JourneyCard>
        </View>
    );
};

export default FindJourney;