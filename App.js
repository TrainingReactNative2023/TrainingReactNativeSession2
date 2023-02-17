import { useState } from "react";
import {
  Button,
  View,
  StyleSheet,
  TextInput,
  ScrollView,
  FlatList
} from "react-native";
import { StatusBar } from "expo-status-bar";

import CourseItem from "./Components/CourseItem";
import CourseInput from "./Components/CourseInput";

export default function App() {
  
  const [courses, setCourses] = useState([]);
  const [model, setModel] = useState(false);

  function handleAddCourse(course) {
    setCourses(currenCourses => [
      ...currenCourses, 
      {text: course, id: Math.random().toString()}
    ]);
    setModel(false);
  }
  function handleDeleteCourse(id) {
    setCourses(currenCourses => {
      return currenCourses.filter((item) => item.id !== id );
    });
  }
  function startAddCourseHandle() {
    setModel(true);
  }
  function endAddCourseHandle() {
    setModel(false);
  }
  return (
    <>
      <StatusBar style='dark' />
        <View style={styles.container}>
          <View style={styles.buttonAddNewCourse}>
            <Button visible={model} title="Add New Course" color='#fff' onPress={startAddCourseHandle}/>
          </View>
          <CourseInput 
            visible={model}
            handleCallAddCourse = {handleAddCourse}
            onCancelAddCourse = {endAddCourseHandle}
          />
          <View style={styles.courseContainer}>
            {/* using scrollview */}
            {/* <ScrollView>
              {courses.map((item) => 
                  <View key={item} style={styles.courseItem}>
                    
                    <Text style={styles.textCourse}> {item} </Text>
                  </View>
                )}
            </ScrollView> */}
            {/* using FlastList */}
            <FlatList
              data={courses}
              renderItem={(itemData) =>  {
                return <CourseItem 
                  text={itemData.item.text}
                  onDeleteCourse = {handleDeleteCourse}
                  id={itemData.item.id}
                />
              }}
              keyExtractor={(item, index) => {
                return item.id;
              }}
            />
          </View>
        </View>
    </>
  );
}
 
const styles = StyleSheet.create({
  container: {
      flex: 1,
      paddingTop: 50,
      paddingHorizontal: 16,
      backgroundColor: '#00FFCC'
  },
  courseContainer: {
      flex: 5
  },
  buttonAddNewCourse: {
    backgroundColor: '#0066FF',
    borderRadius: 10,
    width: '100%',
    flexDirection: "row",
    justifyContent: "center",
  }
});
