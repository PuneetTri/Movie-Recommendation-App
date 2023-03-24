import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import Modal from "react-native-modal";
import { XMarkIcon } from "react-native-heroicons/solid";
import { TouchableOpacity } from "react-native";
import WatchNowButton from "./WatchNowButton";

const WatchlistMovieModal = ({
  isVisible,
  setExpanded,
  posterImageUrl,
  title,
  description,
  link,
}) => {
  return (
    <Modal onBackButtonPress={() => setExpanded(false)} isVisible={isVisible}>
      <View
        style={{ marginLeft: -18 }}
        className="bg-black h-screen w-screen p-4"
      >
        <View className="items-end">
          <TouchableOpacity onPress={() => setExpanded(false)}>
            <XMarkIcon size={30} color="white" />
          </TouchableOpacity>
        </View>

        <ScrollView showsVerticalScrollIndicator={false} className="space-y-4">
          <Image
            source={{
              uri: posterImageUrl,
            }}
            className="h-72 w-48 self-center mt-4"
          />
          <Text className="text-gray-500 text-lg self-center">
            Comedy, Drama
          </Text>
          <Text className="text-white">{description}</Text>
          <Text className="text-white">
            <Text className="font-bold">Director:</Text> Director Name
          </Text>
          <Text className="text-white">
            <Text className="font-bold">Stars:</Text> Actor, another actor,
            third actor, supporting actor
          </Text>
          <Text className="text-gray-500 italic">
            <Text className="font-bold italic">Added:</Text> 2 days ago
          </Text>

          <WatchNowButton gotoLink={link} setExpanded={setExpanded} />

          <TouchableOpacity className="bg-green-500 p-4 rounded-full items-center w-full self-center">
            <Text className="text-xl font-bold text-white">
              Remove from watchlist
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </Modal>
  );
};

export default WatchlistMovieModal;
