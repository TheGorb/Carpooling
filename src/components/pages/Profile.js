import React from 'react';

// UI
import {View, Text, StyleSheet} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Profile = () => {
    const styles = StyleSheet.create({
        pageBlock :{
            padding: 15,
        },
        userIcon: {
            alignSelf: 'center',
            fontSize: 150,
        }
    });

    return (
        <View>
            <FontAwesome5 
                name="user-circle" 
                style={styles.userIcon}>
            </FontAwesome5>
            <View>
                <Text>My reservations</Text>
                <Text>My journeys</Text>
            </View>
        </View>
    );
};

export default Profile;