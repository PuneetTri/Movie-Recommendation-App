import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  BookmarkIcon,
  BookmarkSlashIcon,
} from "react-native-heroicons/outline";
import WatchlistModal from "./WatchlistModal";

const Card = ({ posterImg, name, description }) => {
  const [bookmark, setBookmark] = useState(false);
  const [watchlistModalVisibility, setWatchlistModalVisibility] =
    useState(false);
  const [descriptionCollapsed, setDescriptionCollapsed] = useState(false);

  const toggleDescription = () => {
    setDescriptionCollapsed(!descriptionCollapsed);
  };
  return (
    <View className="bg-white h-full w-screen relative -mt-12 -ml-5 rounded-xl overflow-hidden">
      <Image
        source={{
          uri: posterImg,
        }}
        className="h-full w-full"
        style={{ height: "100%", width: "100%" }}
      />
      <TouchableOpacity
        onLongPress={() => {
          console.log("Added");
          setWatchlistModalVisibility(true);
          setTimeout(() => setWatchlistModalVisibility(false), 1000);
          setBookmark(!bookmark);
        }}
        className="absolute right-0 top-0 m-3 p-3 bg-black rounded-full"
      >
        {bookmark === true ? (
          <BookmarkSlashIcon size={35} color="#4CAF50" />
        ) : (
          <BookmarkIcon size={35} color="#4CAF50" />
        )}
      </TouchableOpacity>
      {descriptionCollapsed === true ? (
        <View className="absolute h-3/4 bottom-0 left-0 w-full">
          <LinearGradient
            colors={["transparent", "rgba(0, 0, 0, 1)"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            className="absolute bottom-0 w-screen h-full"
          />
          <View className="absolute bottom-0 left-0 p-4">
            <Text className="text-green-500 text-3xl">{name}</Text>
            <TouchableOpacity onPress={() => toggleDescription()}>
              <Text className="text-white">{description}</Text>
              <View className="flex-row items-center flex-wrap">
                <Text className="text-white border-2 border-white p-2 mt-4 mr-4 rounded-2xl">
                  Genre
                </Text>
                <Text className="text-white border-2 border-white p-2 mt-4 mr-4 rounded-2xl">
                  Director
                </Text>
                <Text className="text-white border-2 border-white p-2 mt-4 mr-4 rounded-2xl">
                  Actor, Actress, Side-role, Another role
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View className="absolute h-1/3 bottom-0 left-0 w-full">
          <LinearGradient
            colors={["transparent", "rgba(0, 0, 0, 1)"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            className="absolute bottom-0 w-screen h-full"
          />
          <View className="absolute bottom-0 left-0 p-4">
            <Text className="text-green-500 text-3xl">{name}</Text>
            <TouchableOpacity onPress={() => toggleDescription()}>
              <Text className="text-white" numberOfLines={3}>
                {description}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      {/* Watchlist Modal */}
      <WatchlistModal
        isVisible={watchlistModalVisibility}
        bookmark={bookmark}
      />
    </View>
  );
};

export default Card;
