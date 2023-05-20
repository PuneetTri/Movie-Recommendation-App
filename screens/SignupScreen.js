import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Header from "../components/Header";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BASE_URL } from "../config/config";

const SignupScreen = () => {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const [loading, SetLoading] = useState(false);

  const handleSignup = async () => {
    SetLoading(true);
    try {
      const response = await axios.post(`${BASE_URL}/user/new`, {
        firstname: firstName,
        lastname: lastName,
        email,
        password,
      });

      if (response.status === 200) {
        const { userId, firstname, lastname, email } = response.data;

        // Store data in AsyncStorage
        await AsyncStorage.setItem("userId", userId);
        await AsyncStorage.setItem("firstname", firstname);
        await AsyncStorage.setItem("lastname", lastname);
        await AsyncStorage.setItem("email", email);

        SetLoading(false);
        navigation.navigate("Preferences");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const navigation = useNavigation();
  return (
    <View className="flex-1 bg-black">
      <Header screenName={"Sign up"} navigation={navigation} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        className="p-8 space-y-4"
      >
        <View className="space-y-2">
          <Text className="text-white">First Name</Text>
          <TextInput
            value={firstName}
            onChangeText={(val) => setFirstName(val)}
            placeholder="John"
            placeholderTextColor={"#6B7280"}
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
            className="text-white text-sm bg-zinc-900 p-4 rounded-lg"
          />
        </View>

        <View className="space-y-2">
          <Text className="text-white">Password</Text>
          <TextInput
            secureTextEntry
            value={password}
            onChangeText={(val) => setPassword(val)}
            placeholder="Pick a strong password"
            placeholderTextColor={"#6B7280"}
            className="text-white text-sm bg-zinc-900 p-4 rounded-lg"
          />
        </View>

        <TouchableOpacity disabled={loading} onPress={() => handleSignup()}>
          <View className="bg-green-500 items-center p-4 rounded-lg">
            {loading ? (
              <ActivityIndicator />
            ) : (
              <Text className="text-white">Create Account</Text>
            )}
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          className="self-center"
          onPress={() => navigation.navigate("Login")}
        >
          <Text className="text-white">
            Already have an account?{" "}
            <Text className="text-green-500">Login</Text>
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default SignupScreen;
