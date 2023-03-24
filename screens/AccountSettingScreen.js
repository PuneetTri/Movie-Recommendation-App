import { View, Text } from "react-native";
import React from "react";
import Header from "../components/Header";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native";

const AccountScreen = () => {
  const navigation = useNavigation();
  return (
    <View className="flex-1 bg-black">
      <Header screenName={"Account settings"} navigation={navigation} />

      <View className="p-4">
        <View className="space-y-4">
          <Text className="text-white text-xl">Personal Details</Text>
          <View>
            <Text className="text-xs text-gray-500">Name</Text>
            <TextInput
              placeholder="Enter your name"
              placeholderTextColor={"#6B7280"}
              defaultValue="Joe Biden"
              style={{ borderBottomWidth: 1 }}
              className="text-white text-sm border-gray-800 h-8"
            />
          </View>
          <View>
            <Text className="text-xs text-gray-500">Email</Text>
            <TextInput
              placeholder="Enter your email address"
              placeholderTextColor={"#6B7280"}
              inputMode="email"
              defaultValue="joebiden@gmail.com"
              style={{ borderBottomWidth: 1 }}
              className="text-white text-sm border-gray-800 h-8"
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default AccountScreen;
