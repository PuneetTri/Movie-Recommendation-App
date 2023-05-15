import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Header from "../components/Header";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native";
import RoundedGreenButton from "../components/RoundedGreenButton";

const AccountScreen = () => {
  const navigation = useNavigation();
  return (
    <View className="flex-1 bg-black">
      <Header screenName={"Account settings"} navigation={navigation} />

      <View className="p-4 flex-1">
        <View className="space-y-4">
          <View className="py-4">
            <Text className="text-white text-2xl font-bold">
              Change account details
            </Text>
            <Text className="text-md text-gray-400">
              Change personal details for your{" "}
              <Text className="text-green-500">Chhello</Text> account. These
              details would relect across the app, be it you name or your email
              address.
            </Text>
          </View>

          <View className="space-y-2">
            <Text className="text-white">First Name</Text>
            <TextInput
              placeholder="John"
              placeholderTextColor={"#6B7280"}
              style={{ borderBottomWidth: 1 }}
              className="text-white text-sm bg-zinc-900 p-4 rounded-lg"
            />
          </View>

          <View className="space-y-2">
            <Text className="text-white">Last Name</Text>
            <TextInput
              placeholder="Doe"
              placeholderTextColor={"#6B7280"}
              style={{ borderBottomWidth: 1 }}
              className="text-white text-sm bg-zinc-900 p-4 rounded-lg"
            />
          </View>

          <View className="space-y-2">
            <Text className="text-white">Email</Text>
            <TextInput
              placeholder="johndoe@mail.com"
              placeholderTextColor={"#6B7280"}
              style={{ borderBottomWidth: 1 }}
              className="text-white text-sm bg-zinc-900 p-4 rounded-lg"
            />
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate("ChangePassword")}
          >
            <Text className="text-red-500 text-xl">Change Password</Text>
          </TouchableOpacity>
        </View>

        <RoundedGreenButton
          text="SAVE"
          navigation={navigation}
          navigateTo={"Home"}
        />
      </View>
    </View>
  );
};

export default AccountScreen;
