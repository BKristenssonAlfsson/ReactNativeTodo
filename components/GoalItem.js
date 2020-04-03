import React from 'react';

const GoalItem = props => {
    return (
    <View style={styles.listItem}>
        <Text>{itemData.item}</Text>
    </View>
    );
};

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        margin: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1
      }
});

export default GoalItem;