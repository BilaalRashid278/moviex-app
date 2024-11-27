import { StyleSheet, View, ScrollView } from 'react-native'
import React from 'react'
import { CustomColors } from '@/constants/Colors'
import Header from '@/components/ui/Header'
import useFetch from '@/hooks/useFetch'
import { paths } from '@/api/api_urls'
import HeroBanner from '@/components/ui/HeroBanner'
import { getImageUri } from '@/api/urls'
import { generateRandomIndex } from '@/constants/common'
import CarosoulSection from '@/components/ui/CarosoulSection'
const HomePage = () => {
  const topRated = useFetch(paths.moive.top_rated, {
    method: 'get'
  });
  const BackdropImagePath = React.useMemo(() => {
    const topRatedLength = topRated?.data?.results?.length;
    if (!topRatedLength) return "";
    return getImageUri(topRated?.data?.results[generateRandomIndex(topRatedLength)]?.backdrop_path);
  }, [topRated.data]);
  return (
    <View style={{ flex: 1, ...styles.root }}>
      <Header />
      <HeroBanner backgroundImageUrl={BackdropImagePath} />
      <View style={{ flex: 1, paddingTop: 30 }}>
        <ScrollView horizontal={false}>
          <CarosoulSection types={[
            { title: "Day", apiKey: "trending/all/day" },
            { title: "Week", apiKey: "trending/all/week" },
          ]} title='Trending' />
          <CarosoulSection types={[
            { title: "Movies", apiKey: "movie/popular" },
            { title: "Tv Shows", apiKey: "tv/popular" },
          ]} title="What's Popular" />
          <CarosoulSection types={[
            { title: "Movies", apiKey: "movie/top_rated" },
            { title: "Tv Shows", apiKey: "tv/top_rated" },
          ]} title="Top Rated" />
          <CarosoulSection types={[
            { title: "Movies", apiKey: "movie/upcoming" },
          ]} title="Upcoming" />
        </ScrollView>
      </View>
    </View>
  )
}

export default HomePage

const styles = StyleSheet.create({
  root: {
    backgroundColor: CustomColors.background
  }
})