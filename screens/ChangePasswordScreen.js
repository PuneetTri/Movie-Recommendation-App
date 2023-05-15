import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import Header from "../components/Header";
import { useNavigation } from "@react-navigation/native";
import RoundedGreenButton from "../components/RoundedGreenButton";

const ChangePasswordScreen = () => {
  const navigation = useNavigation();
  return (
    <View className="flex-1 bg-black">
      <Header screenName={"Change Password"} navigation={navigation} />

      <View className="p-4 flex-1">
        <View className="space-y-4">
          <View className="py-4">
            <Text className="text-white text-2xl font-bold">
              Change Password
            </Text>
            <Text className="text-md text-gray-400">
              Choose a new password for your{" "}
              <Text className="text-green-500">Chhello</Text> account. Keep in
              mind to select a strong password, your password must contain both
              uppercase and smallercase letters, numbers, and special
              characters.
            </Text>
          </View>

          <View className="space-y-2">
            <Text className="text-white">Current Password</Text>
            <TextInput
              placeholder="Type your current password"
              placeholderTextColor={"#6B7280"}
              style={{ borderBottomWidth: 1 }}
              className="text-white text-sm bg-zinc-900 p-4 rounded-lg"
            />
          </View>

          <View className="space-y-2">
            <Text className="text-white">New Password</Text>
            <TextInput
              placeholder="Select a strong password"
              placeholderTextColor={"#6B7280"}
              style={{ borderBottomWidth: 1 }}
              className="text-white text-sm bg-zinc-900 p-4 rounded-lg"
            />
          </View>

          <View className="space-y-2">
            <Text className="text-white">Confirm Password</Text>
            <TextInput
              placeholder="Renter the password"
              placeholderTextColor={"#6B7280"}
              style={{ borderBottomWidth: 1 }}
              className="text-white text-sm bg-zinc-900 p-4 rounded-lg"
            />
          </View>
        </View>

        <RoundedGreenButton
          text="SAVE"
          navigation={navigation}
          navigateTo={"Account"}
        />
      </View>
    </View>
  );
};

export default ChangePasswordScreen;
