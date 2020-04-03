import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Button, Text, ScrollView, FlatList } from 'react-native';

export default function App() {

  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [
      ...currentGoals, 
      { key: Math.random().toString(), value: enteredGoal}
    ]);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Enter New Goal" 
              style={styles.input} 
              onChangeText={goalInputHandler}
              value={enteredGoal}/>
        <Button title="ADD" onPress={addGoalHandler}/>
      </View>
      <FlatList 
        data={courseGoals}
        renderItem={itemData => (

        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 80
  },
  inputContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center'
  },
  input: {
    width: '70%', 
    borderBottomColor: 'black', 
    borderBottomWidth: 1, 
    padding: 10
  }
});
