import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import React, { useState } from "react";
import Header from "../components/Header";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native";
import RoundedGreenButton from "../components/RoundedGreenButton";
import axios from "axios";
import BASE_URL from "../config/config";

const updateAccount = async (firstName, lastName, email) => {
  try {
    await axios.put(`${BASE_URL}/user/update`, {
      userId: "646798f476369e8f3b76186b",
      data: {
        firstname: firstName,
        lastname: lastName,
        email,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const AccountScreen = () => {
  const [loading, setLoading] = useState(false);
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const navigation = useNavigation();

  const handleSave = async () => {
    setLoading(true);
    await updateAccount(firstName, lastName, email);
    setLoading(false);
  };

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
              value={firstName}
              onChangeText={(val) => setFirstName(val)}
              placeholder="John"
              placeholderTextColor={"#6B7280"}
              style={{ borderBottomWidth: 1 }}
              className="text-white text-sm bg-zinc-900 p-4 rounded-lg"
            />
          </View>

          <View className="space-y-2">
            <Text className="text-white">Last Name</Text>
            <TextInput
              value={lastName}
              onChangeText={(val) => setLastName(val)}
              placeholder="Doe"
              placeholderTextColor={"#6B7280"}
              style={{ borderBottomWidth: 1 }}
              className="text-white text-sm bg-zinc-900 p-4 rounded-lg"
            />
          </View>

          <View className="space-y-2">
            <Text className="text-white">Email</Text>
            <TextInput
              value={email}
              onChangeText={(val) => setEmail(val)}
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

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={handleSave}
          disabled={loading}
          className="absolute bg-green-500 p-4 rounded-full items-center bottom-4 w-full self-center"
        >
          {loading === true ? (
            <ActivityIndicator />
          ) : (
            <Text className="text-xl font-bold text-white">SAVE</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AccountScreen;
