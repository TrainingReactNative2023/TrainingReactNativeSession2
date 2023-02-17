import React from "react";

import {View, Text, StyleSheet, Pressable } from 'react-native';

function courseItem(props) {
    return (
        <View style={styles.courseItem}>
            <Pressable 
                onPress={props.onDeleteCourse.bind(this, props.id)}
                style={({pressed}) => pressed && styles.pressedItem}
                >
                <Text style={styles.textCourse}> {props.text} </Text>
            </Pressable>
        </View>
    )
}

export default courseItem;

const styles = StyleSheet.create({
    courseItem: {
        margin: 8,
        padding: 8,
        borderRadius: 10,
        backgroundColor: '#5e0acc'
      },
      textCourse: {
        color: '#fff'
      },
      pressedItem: {
        opacity: 0.5
      }
});