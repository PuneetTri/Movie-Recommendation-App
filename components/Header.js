import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { ChevronLeftIcon } from "react-native-heroicons/solid";

const Header = ({ screenName, navigation }) => {
  return (
    <View
      style={{ borderBottomWidth: 1 }}
      className="flex-row items-center p-4 space-x-2 border-green-500 bg-black"
    >
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <ChevronLeftIcon size={30} color="white" />
      </TouchableOpacity>
      <Text className="text-xl text-white">{screenName}</Text>
    </View>
  );
};

export default Header;
