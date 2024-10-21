import {
  View,
  Text,
  FlatList,
  Image,
  Alert,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect, useRef } from "react";
import { Post } from "@/models/post";
import  { AxiosResponse } from "axios";
import VideoItem from "@/components/VideoItem/VideoItem";
import CustomLabel from "@/components/CustomLabel/CustomLabel";
import DollarIcon from "@/components/VideoItem/DollarIcon";
import { FontAwesome } from "@expo/vector-icons";
import VoteGroup from "@/components/VoteGroup/VoteGroup";
import CommentItem from "@/components/VoteGroup/CommentItem";
import ShareItem from "@/components/ShareItem/ShareItem";
import More from "@/assets/icons/More";
import formatTimestamp from "@/shared/formatTimestamp";
import { homeStyles as styles } from "@/customstyles/homeStyles";
import { fetchData } from "@/services/post-service";

export default function index() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState<number>(0);
  const [hasMoreData, setHasMoreData] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const [refreshing, setRefreshing] = useState(false);

  const [currentViewableItemIndex, setCurrentViewableItemIndex] = useState(0);
  const viewabilityConfig = { viewAreaCoveragePercentThreshold: 50 };
  const onViewableItemsChanged = ({ viewableItems }: any) => {
    if (viewableItems.length > 0) {
      setCurrentViewableItemIndex(viewableItems[0].index ?? 0);
    }
  };
  const viewabilityConfigCallbackPairs = useRef([
    { viewabilityConfig, onViewableItemsChanged },
  ]);

  
  const loadData = async () => {
    try {
      if (loading || !hasMoreData) return;
      setLoading(true);
      const response: AxiosResponse = await fetchData(`get-posts?feed=1&page=${page}`);
      setLoading(false);
      const newData = response.data.postInfos;
      if (newData.length > 0) {
        setPosts((prevData) => [...prevData, ...newData]);
        setHasMoreData(response.data.hasMore);
        setPage(response.data.nextPage);
      } else {
        setHasMoreData(false);
      }
    } catch  {
      Alert.alert("Error", "Failed to fetch data. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const refreshData = async () => {
    setRefreshing(true);
    setPage(0);

    try {
      const response: AxiosResponse = await fetchData('get-posts?feed=1&page=0')
      setPosts(response.data.postInfos);
      setHasMoreData(true);
      setPage(response.data.nextPage);
    } catch {
      Alert.alert("Error", "Failed to refresh data. Please try again later.");
    } finally {
      setRefreshing(false);
    }
  };

  const postCard = (data: Post, shouldPlay: boolean) => {
    return (
      <>
        <View style={styles.cardContainer}>
          <View style={styles.cardTopContaner}>
            <View style={styles.cardTopLeftContaner}>
              <Image
                style={styles.userIcon}
                source={{
                  uri: `${
                    data.userAvatar
                      ? data.userAvatar
                      : "https://lahelu.com/media/default/pp-not-found.jpg"
                  }`,
                }}
              />
              <Text style={styles.userName}>{data.userUsername}</Text>
              <View style={styles.dotIcon}></View>
              <Text style={styles.period}>
                {formatTimestamp(data.createTime)}
              </Text>
            </View>
            <More />
          </View>
          <Text style={styles.title}>{data.title}</Text>
          {data.mediaType <= 0 ? (
            <Image
              style={styles.image}
              source={{ uri: data.media }}
              resizeMode="contain"
            />
          ) : (
            <VideoItem item={data.media} shouldPlay={shouldPlay} />
          )}

          <View style={styles.hashTagContainer}>
            <CustomLabel
              color="#dea247"
              textColor="white"
              icon={<DollarIcon />}
              label="Sawer"
              height={35}
            />
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ gap: 8 }}
              data={data.hashtags}
              renderItem={({ item }) => (
                <CustomLabel
                  color="transparent"
                  textColor="black"
                  icon={<FontAwesome name="hashtag" size={12} color="black" />}
                  label={item}
                  height={25}
                />
              )}
              keyExtractor={(item, index) => `${item + index.toString()}`}
            />
          </View>

          <View style={styles.buttonCardContainer}>
            <View style={styles.voteGroupContainer}>
              <VoteGroup label={data.totalUpvotes.toString()} />
              <CommentItem label={data.totalComments.toString()} />
            </View>
            <ShareItem />
          </View>
        </View>
      </>
    );
  };

 
  useEffect(() => {
    loadData();
  }, []);


  return (
    <View style={styles.listContainer}>
      <FlatList
        data={posts}
        ItemSeparatorComponent={() => (
          <View style={styles.postListContainer}/>
        )}
        keyExtractor={(item, index) => `${item.postID + index.toString()}`}
        renderItem={({ item, index }) =>
          postCard(item, index === currentViewableItemIndex)
        }
        horizontal={false}
        showsVerticalScrollIndicator={false}
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
        onRefresh={refreshData}
        refreshing={refreshing}
        onEndReached={loadData}
        ListFooterComponent={
          loading ? <ActivityIndicator size="large" /> : null
        }
      />
    </View>
  );
}


