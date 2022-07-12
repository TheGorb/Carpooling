import React, {useState} from 'react';

//UI
import {View, Text, StyleSheet, Button, TextInput, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DatePicker from 'react-native-date-picker';

const Home = ({navigation}) => {
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)

    const styles = StyleSheet.create({
        pageBlock: {
            padding: 15,
            flex:1,
        },
        textInput: {
            flex: 1,
            borderWidth: 1,
        },
        validateButton: {
            borderRadius: 25,
        },
        userIcon: {
            alignSelf: 'flex-end',
            fontSize: 50,
        },
        textInputIcons: {
            fontSize: 25,
            marginRight: 5,
        },
        slashIcon: {
            fontSize: 25
        },
        formBlock: {
            marginBottom: 15,
        },
        validateButtonAndFormBlock: {},
        inputBlock: {
            alignItems: 'center',
            flexDirection: 'row',
        }
    });

    return (
        <View style={styles.pageBlock}>  
            <FontAwesome5 
                name="user-circle" 
                onPress={() => navigation.navigate('Profile')}
                style={styles.userIcon}>
            </FontAwesome5>
            <View>
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
                            <TouchableOpacity 
                                onPress={() => setOpen(true)} 
                                style={{
                                    flex: 1,
                                    flexDirection: 'row',
                                    alignItems: 'center'
                                }}>
                                <FontAwesome5 name="calendar" style={styles.textInputIcons}>
                                </FontAwesome5>
                                <DatePicker date={date} onDateChange={setDate} modal/>
                                <TextInput 
                                    style={styles.textInput}
                                    editable={false}> 
                                </TextInput>
                                <MaterialCommunityIcons 
                                    name="slash-forward" 
                                    style={styles.slashIcon}></MaterialCommunityIcons>
                                <TextInput 
                                    style={styles.textInput}
                                    editable={false}> 
                                </TextInput>
                                <MaterialCommunityIcons 
                                    name="slash-forward" 
                                    style={styles.slashIcon}></MaterialCommunityIcons>
                                <TextInput 
                                    style={styles.textInput}
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
                            <TextInput 
                                placeholder="Estimated time of arrival" 
                                style={styles.textInput}> 
                            </TextInput>
                        </View>
                    </View>
                </View>
                <Button
                    title="Validate"
                    color="#841584"
                    style={styles.validateButton}
                >
                    <FontAwesome5 
                        name="user-circle" 
                    >
                    </FontAwesome5>
                </Button>
                {/* <FontAwesome5.Button name="search-location">Validate</FontAwesome5.Button> */}
                <Button 
                    title="Publish a journey"
                    onPress={() => navigation.navigate('PublishJourney')}
                />
                <DatePicker
                    style={{
                        borderWidth: 1,
                    }}
                    modal
                    open={open}
                    date={date}
                    onConfirm={(date) => {
                        setOpen(false)
                        setDate(date)
                    }}
                    onCancel={() => {
                        setOpen(false)
                    }}
                />
            </View>
        </View>
    );
};

export default Home;