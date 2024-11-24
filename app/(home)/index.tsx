import { StyleSheet, View } from 'react-native'
import React from 'react'
import { CustomColors } from '@/constants/Colors'
import Header from '@/components/ui/Header'
import useFetch from '@/hooks/useFetch'
import { paths } from '@/api/api_urls'
import HeroBanner from '@/components/ui/HeroBanner'
import { getImageUri } from '@/api/urls'
import { generateRandomIndex } from '@/constants/common'
const HomePage = () => {
  const topRated = useFetch(paths.moive.top_rated, {
    method : 'get'
  });
  const BackdropImagePath = React.useMemo(() => {
    const topRatedLength = topRated?.data?.results?.length;
    if(!topRatedLength) return "";
    return getImageUri(topRated?.data?.results[generateRandomIndex(topRatedLength)]?.backdrop_path);
  },[topRated.data]);
  return (
    <View style={{ flex: 1, ...styles.root }}>
      <Header/>
      <HeroBanner backgroundImageUrl={BackdropImagePath}/>
    </View>
  )
}

export default HomePage

const styles = StyleSheet.create({
  root: {
    backgroundColor: CustomColors.background
  }
})