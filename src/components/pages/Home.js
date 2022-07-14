import React, {useState, useEffect} from 'react';

//UI
import {View, Text, StyleSheet, Button, TextInput, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

// Utils
import DatePicker from 'react-native-date-picker';
import { getHours, getMinutes, getMonth, format } from 'date-fns'

// Components
import JourneyForm from '../UI/JourneyForm';

const Home = ({navigation}) => {
    // Local state
    const [test, setTest] = useState("17")
    const [date, setDate] = useState(new Date())
    const [time, setTime] = useState(new Date())
    const [openDate, setOpenDate] = useState(false)
    const [openTime, setOpenTime] = useState(false)

    const [minute, setMinute] = useState()
    const [hour, setHour] = useState()
    const [day, setDay] = useState()
    const [month, setMonth] = useState()
    const [year, setYear] = useState()

    const months = {
        "0": "January",
        "1": "February",
        "2": "March",
        "3": "April",
        "4": "May",
        "5": "June",
        "6": "July",
        "7": "August",
        "8": "September",
        "9": "October",
        "10": "November",
        "11": "December"
    }

    useEffect(() => {
        const formatedMonth = date.getMonth().toString();
        setMonth(months[formatedMonth]);
        // setMonth(format(date, 'MM').toString())
        setDay(format(date, 'dd').toString())
        setYear(format(date, 'yyyy').toString())
    }, [date])

    useEffect(() => {
        setHour(format(time, 'HH').toString());
        setMinute(format(time, 'mm').toString());
    }, [time])

    const styles = StyleSheet.create({
        pageBlock: {
            padding: 15,
            flex:1,
            justifyContent: 'space-between'
        },
        textInput: {
            flex: 1,
            borderWidth: 1,
            borderRadius: 15
        },
        validateButton: {
            borderRadius: 25,
        },
        validateButtonAndFormBlock: {
            borderWidth: 2,
            borderRadius: 15,
            padding: 15,
        },
        inputBlock: {
            alignItems: 'center',
            flexDirection: 'row',
        },
        userIcon: {
            alignSelf: 'flex-end',
            fontSize: 50,
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
                <JourneyForm></JourneyForm>
                <Button
                    title="Find a journey"
                    color="#841584"
                    style={styles.validateButton}
                >
                </Button>
                {/* <FontAwesome5.Button name="search-location">Validate</FontAwesome5.Button> */}
            </View>
            <Button 
                    title="Publish a journey"
                    onPress={() => navigation.navigate('PublishJourney')}
                />
        </View>
    );
};

export default Home;