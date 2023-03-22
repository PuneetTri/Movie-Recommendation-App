import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import React from "react";
import Header from "../components/Header";
import { useNavigation } from "@react-navigation/native";

const PreferencesScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Header className="flex-1" navigation={navigation} />

      <View className="m-4 space-x-2 space-y-2">
        <View className="flex-row space-x-2">
          <TouchableHighlight className="flex-1 h-20 w-1/3">
            <Image
              source={require("../assets/streamingServicesLogo/primevideo.png")}
              className="h-full w-full"
            />
          </TouchableHighlight>
          <TouchableHighlight className="flex-1 h-20 w-1/3">
            <Image
              source={require("../assets/streamingServicesLogo/netflix.png")}
              className="h-full w-full"
            />
          </TouchableHighlight>
        </View>

        <View className="flex-row space-x-2">
          <TouchableHighlight className="flex-1 h-20 w-1/3">
            <Image
              source={require("../assets/streamingServicesLogo/hotstar.png")}
              className="h-full w-full"
            />
          </TouchableHighlight>
          <TouchableHighlight className="flex-1 h-20 w-1/3">
            <Image
              source={require("../assets/streamingServicesLogo/sonyliv.png")}
              className="h-full w-full"
            />
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
};

export default PreferencesScreen;
