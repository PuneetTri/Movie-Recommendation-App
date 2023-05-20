import { View } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import WatchlistItem from "../components/WatchlistItem";
import Header from "../components/Header";
import { ScrollView } from "react-native";
import axios from "axios";
import { BASE_URL, userId } from "../config/config";

const WatchlistScreen = () => {
  const [movies, setMovies] = useState([]);
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(`${BASE_URL}/bookmark/fetch`, {
          userId: userId,
        });
        setMovies(response.data);
        console.log(movies);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <View className="flex-1 bg-black">
      {/* Header */}
      <Header screenName="Watchlist" navigation={navigation} />

      {/* Body */}
      <View className="flex-1">
        <ScrollView>
          {movies.map((movie) => {
            return (
              <WatchlistItem
                key={movie._id}
                posterImgUrl={movie.posterImg}
                movieId={movie._id}
                title={movie.name}
                cast={movie.cast}
                director={movie.director}
                genre={movie.genre}
                description={movie.description}
                link={movie.link}
              />
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default WatchlistScreen;
