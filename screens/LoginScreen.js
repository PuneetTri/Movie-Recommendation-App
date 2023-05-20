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
import { BASE_URL } from "../config/config";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginScreen = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    axios
      .post(`${BASE_URL}/user`, {
        email,
        password,
      })
      .then(async (res) => {
        if (res.status === 200) {
          const { userId, firstname, lastname, email } = res.data;

          // Store data in AsyncStorage
          await AsyncStorage.setItem("userId", userId);
          await AsyncStorage.setItem("firstname", firstname);
          await AsyncStorage.setItem("lastname", lastname);
          await AsyncStorage.setItem("email", email);

          setLoading(false);
          navigation.navigate("Home");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const navigation = useNavigation();
  return (
    <View className="flex-1 bg-black">
      <Header screenName={"Log in"} navigation={navigation} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        className="p-8 space-y-4"
      >
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

        <TouchableOpacity
          disabled={loading}
          onPress={() => {
            handleLogin();
          }}
        >
          <View className="bg-green-500 items-center p-4 rounded-lg">
            {loading ? (
              <ActivityIndicator />
            ) : (
              <Text className="text-white">Log in</Text>
            )}
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
      </ScrollView>
    </View>
  );
};

export default LoginScreen;
