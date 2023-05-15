import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Header from "../components/Header";

const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <View className="flex-1 bg-black">
      <Header screenName={"Log in"} navigation={navigation} />

      <View className="p-8 space-y-4">
        <View className="space-y-2">
          <Text className="text-white">Email</Text>
          <TextInput
            placeholder="johndoe@mail.com"
            placeholderTextColor={"#6B7280"}
            style={{ borderBottomWidth: 1 }}
            className="text-white text-sm bg-zinc-900 p-4 rounded-lg"
          />
        </View>

        <View className="space-y-2">
          <Text className="text-white">Password</Text>
          <TextInput
            placeholder="Pick a strong password"
            placeholderTextColor={"#6B7280"}
            style={{ borderBottomWidth: 1 }}
            className="text-white text-sm bg-zinc-900 p-4 rounded-lg"
          />
        </View>

        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <View className="bg-green-500 items-center p-4 rounded-lg">
            <Text className="text-white">Log in</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          className="self-center"
          onPress={() => navigation.navigate("Signup")}
        >
          <Text className="text-white">
            Dont have an account? <Text className="text-green-500">Signup</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
