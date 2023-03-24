import { View, Text } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Header from "../components/Header";

const WatchlistSettingScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Header screenName={"Watchlist settings"} navigation={navigation} />

      <View>
        <Text>Watchlist</Text>
      </View>
    </View>
  );
};

export default WatchlistSettingScreen;
