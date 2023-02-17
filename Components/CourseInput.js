import React from "react";
import { useState } from "react";

import { View, TextInput, Button, StyleSheet, Modal, Image, Alert } from "react-native";

function CourseInput(props) {
    const [course, setCourse] = useState('');
    function handleInputCourse(value) {
        setCourse(value);
    }
    function handleAddCourse() {
        if (course == '') return;
        props.handleCallAddCourse(course);
        setCourse('');
    }

    function handleShowAlert() {
        if (course == '') {
            Alert.alert('Please enter the course', '', [
                {text:'Cancel', onPress: () => console.log('show alert')},
            ]);
        } else {
            Alert.alert('Are you sure add course', '', [
                {text:'Cancel', onPress: () => console.log('show alert')},
                {text: 'Yes', onPress: handleAddCourse}
            ]);
        }
    }
    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputCourseContainer}>
                <Image source={require('../assets/paper.png')} style={styles.imageDocument}/>
                <TextInput
                    style={styles.textInput}
                    placeholder="Please input course"
                    onChangeText={handleInputCourse}
                    value={course}
                />
                <View style={styles.buttonContainer}>
                    <View style={[styles.button, styles.buttonAdd]}>
                        <Button 
                            title= 'Add Course'
                            onPress={handleShowAlert}
                            color='#fff'
                        />
                    </View>
                    <View style={[styles.button, styles.buttonCancel]}>
                        <Button 
                            title="Cancel"
                            color='#fff'
                            onPress={props.onCancelAddCourse}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    )
}


export default CourseInput;

const styles = StyleSheet.create({
    inputCourseContainer: {
        flex: 1,
        flexDirection: "colum",
        justifyContent: "center",
        alignItems: "center",
        borderColor: "#fff",
        backgroundColor: '#311b6b'
    },
    textInput: {
        height: 50,
        color: "#120438",
        borderWidth: 1,
        borderColor: "#e4d0ff",
        padding: 8,
        width: '70%',
        marginRight: 8,
        fontSize: 18,
        borderRadius: 6,
        backgroundColor: '#e4d0ff'
    },
    button: {
        borderRadius: 10,
        width: 120,
        marginLeft: 5,
        marginRight: 5
    },
    buttonCancel: {
        backgroundColor: '#f31282'
    },
    buttonAdd: {
        backgroundColor: '#0066FF',
    },
    buttonContainer: {
        flexDirection: "row",
        marginTop: 16
    },
    imageDocument: {
        width: 100,
        height: 100,
        marginBottom: 30
    }
});