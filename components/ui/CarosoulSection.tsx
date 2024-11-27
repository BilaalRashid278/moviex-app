import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import RatingCard from './RatingCard';
import { BASE_URL, getImageUri, headers } from '@/api/urls';

const CarosoulSection = ({ title, types = [] }: { title: string, types : {title? : string, apiKey? : string}[] }) => {
    const [activeType, setActiveType] = React.useState(0);
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const Cards = React.useMemo(() => {
        return data?.results?.map((c : any, i : number) => <RatingCard key={i} isLocalImage={!Boolean(c?.poster_path?.length)} imageUrl={getImageUri(c?.poster_path) || ""} title={c?.title} date={c?.release_date} rating={c?.vote_average}/>)
    },[data]);
    const _hanldeFetchCardsData = async () => {
        setLoading(true);
        try {
            const res = await fetch(`${BASE_URL}${types[activeType]?.apiKey}`,{
                method : "GET",
                headers : headers 
            });
            const data = await res.json();
            setData(data);
        } catch (error) {} finally {
            setLoading(false);
        }
    };
    React.useEffect(() => {
        _hanldeFetchCardsData();
    },[activeType]);
    return (
        <View>
            <View style={{ flexDirection: 'row', flexGrow: 1, paddingVertical: 25, paddingHorizontal: 15, justifyContent: "space-between", alignItems: 'center' }}>
                <Text style={{ color: "white", fontSize: 23 }}>{title?.length > 8 ? `${title?.slice(0,7)}...` : title}</Text>
                <View style={styles.types}>
                    {types?.map((t: any, i: number) => (
                        <TouchableOpacity onPress={() => setActiveType(i)} key={i}>
                            <View style={{ backgroundColor: activeType === i ? "#FF8540" : "", width: 100, height: "100%", borderRadius: 20, flexDirection: 'row', justifyContent: 'center', display: 'flex', alignItems: 'center' }}>
                                <Text style={{ textAlign: 'center', color: activeType === i ? "white" : 'black' }}>{t?.title}</Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
            <View style={styles.radingCardContainer}>
                <ScrollView horizontal style={{display : 'flex'}}>
                    {Cards}
                </ScrollView>
            </View>
        </View>
    )
}

export default CarosoulSection

const styles = StyleSheet.create({
    types: {
        backgroundColor: "white",
        borderRadius: 20,
        height: 35,
        padding: 2,
        display: 'flex',
        flexDirection: "row",
        gap: 2
    },
    radingCardContainer : {
        // borderWidth : 2,
        // borderColor : "white",
        padding : 4,
        minHeight : 250,
    }
})