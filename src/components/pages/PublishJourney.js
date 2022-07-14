import React from 'react';

// UI
import {View, Text, StyleSheet, Button} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

// Component
import JourneyForm from '../UI/JourneyForm';

const PublishJourney = ({navigation}) => {
    const styles = StyleSheet.create({
        pageBlock: {
            padding: 15,
            flex:1,
            justifyContent: 'space-between'
        },
        userIcon: {
            alignSelf: 'flex-end',
            fontSize: 50,
        },
        validateButtonAndFormBlock: {
            borderWidth: 2,
            borderRadius: 15,
            padding: 15,
        },
    });

    return (
        <View style={styles.pageBlock}>
            <FontAwesome5 
                name="user-circle" 
                onPress={() => navigation.navigate('Profile')}
                style={styles.userIcon}>
            </FontAwesome5>
            <View style={styles.validateButtonAndFormBlock}>
                <JourneyForm isPublishingJourney={true}></JourneyForm>
            </View>
            <Button title="Publish"></Button>
        </View>
    );
};

export default PublishJourney;