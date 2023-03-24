import { View, Text } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Header from "../components/Header";
import RoundedGreenButton from "../components/RoundedGreenButton";
import { TouchableOpacity } from "react-native";
import CounterButton from "../components/CounterButton";

const WatchlistSettingScreen = () => {
  const navigation = useNavigation();
  return (
    <View className="flex-1 bg-black">
      <Header screenName={"Watchlist settings"} navigation={navigation} />
      <View className="p-4 space-y-4">
        <View className="flex-row items-center">
          <Text className="text-white text-sm flex-1">
            Set limit of movies in watchlist
          </Text>
          <CounterButton val={7} lowerLimit={1} upperLimit={10} />
        </View>
        <View className="flex-row items-center">
          <Text className="text-white text-sm flex-1">
            Ephemeral duration of watchlist (Days)
          </Text>
          <CounterButton val={3} lowerLimit={1} upperLimit={7} />
        </View>
      </View>
      <RoundedGreenButton text="SAVE" />
    </View>
  );
};

export default WatchlistSettingScreen;
