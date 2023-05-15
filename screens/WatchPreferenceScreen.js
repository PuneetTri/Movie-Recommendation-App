import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import Header from "../components/Header";
import { useNavigation } from "@react-navigation/native";
import GenreSelectButton from "../components/GenreSelectButton";
import RoundedGreenButton from "../components/RoundedGreenButton";

const WatchPreferenceScreen = () => {
  const genres = [
    {
      id: 1,
      name: "🔫 Action",
      selected: false,
    },
    {
      id: 2,
      name: "🤣 Comedy",
      selected: false,
    },
    {
      id: 3,
      name: "😭 Drama",
      selected: false,
    },
    {
      id: 4,
      name: "👻 Horror",
    },
    {
      id: 4,
      name: "🎶 Musical",
    },
    {
      id: 4,
      name: "💕 Romance",
    },
  ];
  const navigation = useNavigation();
  return (
    <View className="bg-black flex-1">
      <Header screenName={"Preferences"} navigation={navigation} />

      <View className="p-4 flex-1">
        <View className="py-4">
          <Text className="text-white text-2xl font-bold">
            What do you want to see?
          </Text>
          <Text className="text-md text-gray-400">
            Select you favourite genres of movies, or genres you are intrested
            in watching. <Text className="text-green-500">Chhello</Text> will
            provide you recommendations based on preferences you have selected.
          </Text>
        </View>

        <View className="flex-row flex-wrap">
          {genres.map((genre) => {
            return (
              <GenreSelectButton
                GenreName={genre.name}
                isSelected={genre.selected}
              />
            );
          })}
        </View>

        <RoundedGreenButton
          text="SAVE"
          navigation={navigation}
          navigateTo={"Streaming"}
        />
      </View>
    </View>
  );
};

export default WatchPreferenceScreen;
