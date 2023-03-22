import { View, Text } from "react-native";
import React from "react";
import Header from "../components/Header";
import { useNavigation } from "@react-navigation/native";

const AccountScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Header screenName={"Account settings"} navigation={navigation} />
    </View>
  );
};

export default AccountScreen;
