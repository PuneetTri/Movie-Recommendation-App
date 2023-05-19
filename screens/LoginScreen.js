import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Header from "../components/Header";

const LoginScreen = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

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
      </ScrollView>
    </View>
  );
};

export default LoginScreen;
