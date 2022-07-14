import React, {useState, useEffect} from 'react';

//UI
import {View, Text, StyleSheet, Button, TextInput, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';

// Utils
import DatePicker from 'react-native-date-picker';
import { getHours, getMinutes, getMonth, format } from 'date-fns';

const JourneyForm = props => {
    // Local state
    const [isDriver, setIsDriver] = useState()

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
        formBlock: {
            marginBottom: 15,
        },
        inputBlock: {
            alignItems: 'center',
            flexDirection: 'row',
        },
        textInput: {
            flex: 1,
            borderWidth: 1,
            borderRadius: 15
        },

        // Icons
        textInputIcons: {
            fontSize: 25,
            marginRight: 5,
        },
        slashIcon: {
            fontSize: 25
        },
        twoDotsIcon: {
            fontSize: 25
        },
    });

    const renderDatePickers = () => {
        return (
            <>
                <DatePicker
                    modal
                    mode="date"
                    open={openDate}
                    date={date}
                    onConfirm={(date) => {
                        setOpenDate(false)
                        setDate(date)
                    }}
                    onCancel={() => {
                        setOpenDate(false)
                    }}
                />
                <DatePicker
                    modal
                    mode="time"
                    open={openTime}
                    date={date}
                    onConfirm={(time) => {
                        setOpenTime(false)
                        setTime(time)
                    }}
                    onCancel={() => {
                        setOpenTime(false)
                    }}
                />
            </>
        );
    }

    const renderForm = () => {
        return (
            <View style={styles.formBlock}>
                <View>
                    <Text>Departure</Text>
                    <View style={styles.inputBlock}>
                        <FontAwesome5 name="route" style={styles.textInputIcons}>
                        </FontAwesome5>
                        <TextInput 
                            placeholder="Departure" 
                            style={styles.textInput}> 
                        </TextInput>
                    </View>
                </View>
                <View>
                    <Text>Arrival</Text>
                    <View style={styles.inputBlock}>
                        <FontAwesome5 name="route" style={styles.textInputIcons}>
                        </FontAwesome5>
                        <TextInput 
                            placeholder="Arrival" 
                            style={styles.textInput}> 
                        </TextInput>
                    </View>
                </View>
                <View>
                    <Text>Date</Text>
                    <View style={styles.inputBlock}>
                        <FontAwesome5 name="calendar-alt" style={styles.textInputIcons}></FontAwesome5>
                        <TouchableOpacity 
                            onPress={() => setOpenDate(true)} 
                            style={{
                                flex: 1,
                                flexDirection: 'row',
                                alignItems: 'center'
                            }}>
                            <TextInput 
                                style={styles.textInput}
                                textAlign="center"
                                editable={false}
                                value={day}> 
                            </TextInput>
                            <MaterialCommunityIcons 
                                name="slash-forward" 
                                style={styles.slashIcon}></MaterialCommunityIcons>
                            <TextInput 
                                style={styles.textInput}
                                textAlign="center"
                                value={month}
                                editable={false}> 
                            </TextInput>
                            <MaterialCommunityIcons 
                                name="slash-forward" 
                                style={styles.slashIcon}></MaterialCommunityIcons>
                            <TextInput 
                                style={styles.textInput}
                                textAlign="center"
                                value={year}
                                editable={false}> 
                            </TextInput>
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <Text>Estimated time of arrival</Text>
                    <View style={styles.inputBlock}>
                        <FontAwesome5 name="clock" style={styles.textInputIcons}>
                        </FontAwesome5>
                        <TouchableOpacity 
                            onPress={() => setOpenTime(true)} 
                            style={{
                                flex: 1,
                                flexDirection: 'row',
                                alignItems: 'center'
                            }}>
                            <TextInput 
                                value={hour}
                                textAlign="center"
                                style={styles.textInput}
                                editable={false}> 
                            </TextInput>
                            <Entypo name="dots-two-vertical"></Entypo>
                            <TextInput 
                                value={minute}
                                textAlign="center"
                                style={styles.textInput}
                                editable={false}> 
                            </TextInput>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }

    const renderTest = () => {
        return(
            <View style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap'
                }}>
                <TouchableOpacity 
                    onPress={() => setIsDriver(true)}
                    style={{
                        borderWidth: 1,
                        borderRadius: 15,
                        padding: 10,
                        flexWrap: 'wrap',
                        backgroundColor: isDriver ? 'blue' : 'white'
                }}>
                    <Text>I am the driver for this Journey</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    borderWidth: 1,
                    borderRadius: 15,
                    padding: 10,
                    flexWrap: 'wrap'
                }}>
                    <Text>I am looking for a driver for this Journey</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View>
            {props.isPublishingJourney === true ? renderTest() : null}
            {renderForm()}
            {renderDatePickers()}
        </View>
    );
};

export default JourneyForm;