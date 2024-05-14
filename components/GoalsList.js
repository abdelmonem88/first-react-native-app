import { View, Text, FlatList } from "react-native";
import React from "react";

const GoalsList = ({ goals }) => {
  return (
    <View>
      <FlatList
        data={goals}
        renderItem={(itemData) => (
          <View>
            <Text>{itemData.item}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default GoalsList;
