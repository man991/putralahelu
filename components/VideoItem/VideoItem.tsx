import { View,  Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import {  ResizeMode, Video } from 'expo-av';
import { Ionicons } from '@expo/vector-icons';
import { Slider } from '@miblanchard/react-native-slider';
import { styles } from './styles';

export default function VideoItem({ item, shouldPlay }: {shouldPlay: boolean; item: string}) {
    const video = React.useRef<Video | null>(null);
    const [status, setStatus] = useState<any>(null);
    const [muted, setMuted] = useState<boolean>(true);
  
    const [duration, setDuration] = useState<number>(0);
    const [position, setPosition] = useState<number>(0);
    const [isPaused, setIsPaused] = useState<boolean>(false);
  
   

    const handleValueChange = () => {
      setIsPaused(true);
    };
  
    const stopVideo =  () => {
      if (video.current) {
         video.current.stopAsync();
        setPosition(0);
        setIsPaused(false);
      }
    };

    const seekToPosition = async (value: any) => {
      if (video.current) {
        await video.current.setPositionAsync(value * 1000);
        setPosition(value);
        await video.current?.playAsync();
        setIsPaused(false)
      }
    };

    const handlePlaybackStatus = (status: any) => {
      setStatus(status);
     
      if (status.isLoaded) {
        setDuration(status.durationMillis / 1000);
        setPosition(status.positionMillis / 1000);
      }
    };

    const videoHandler = async () => {
      if (status.isPlaying) {
          await video.current?.pauseAsync();
          setIsPaused(true);
      }
      else{
          await video.current?.playAsync();
          setIsPaused(false);
      }
  }
  

  useEffect(() => {
    if (!shouldPlay) {
      stopVideo()
    }
    // if (video.current) {
    //   video.current.unloadAsync();
    // }
  }, [position]);


  
    return (
      <>
      <View style={styles.mainContainer}>
      <Pressable onPress={ videoHandler }>
        <View style={styles.videoContainer}>
            <Video 
              ref={video}
              shouldPlay= {shouldPlay}
              source={{ uri: item }}
              style={styles.video}
              isMuted ={muted}
              isLooping
              useNativeControls={false}
              resizeMode={ResizeMode.CONTAIN}
              onPlaybackStatusUpdate={handlePlaybackStatus}
            />
            <View>
              
            </View>
            <Pressable onPress={()=> setMuted(!muted)}>
                <View style={styles.soundContainer}>
                    <Ionicons 
                        name={ muted ? 'volume-mute-outline' : 'volume-high-outline'} 
                        size={20} color={'white'}
                    />
                </View>
            </Pressable>
          </View>
      <Slider
           
            onValueChange={handleValueChange}
            containerStyle={styles.slider}
            minimumValue={0}
            maximumValue={duration}
            value= {position}
            onSlidingComplete={seekToPosition}
            minimumTrackTintColor="#4c9dff"
            maximumTrackTintColor="black"
            thumbTintColor= { isPaused ? "#4c9dff" : "transparent" }
            trackStyle={{height: isPaused ? 8 : 4}}
            step={0.05}
          />
      </Pressable>
      </View>
     
      </>
     
    );
}


