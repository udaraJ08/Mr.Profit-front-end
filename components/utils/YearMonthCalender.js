
import React, { useState, useCallback } from 'react';
import { View, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import MonthPicker from 'react-native-month-year-picker';
import Icon from 'react-native-vector-icons/FontAwesome';


const YearMonthCalender = (props) => {
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);

    const showPicker = useCallback((value) => setShow(value), []);

    const onValueChange = useCallback(
        (event, newDate) => {
            const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
            const selectedDate = newDate || date;
            const orDate = new Date(selectedDate);

            const month = months[orDate.getMonth()]
            const year = orDate.getFullYear()

            props.setNewDate(month.toLocaleLowerCase(), year)

            showPicker(false);
            setDate(selectedDate);
        },
        [date, showPicker],
    );

    return (
        <SafeAreaView>
            <TouchableOpacity style={{
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 1000,
                padding: 10,
                backgroundColor: '#43a8d6'
            }} onPress={() => showPicker(true)}>
                <Icon name="calendar" color={"white"} size={30} />
            </TouchableOpacity>
            {show && (
                <MonthPicker
                    onChange={onValueChange}
                    value={date}
                    minimumDate={new Date(2010, 1)}
                    maximumDate={new Date()}
                    locale="full"
                />
            )}
        </SafeAreaView>
    );
};

export default YearMonthCalender
