import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useState, type PropsWithChildren } from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import { styles } from './styles';


type Props = PropsWithChildren<{
  uri: string;
  label: string;
}>;

export default function CustomDrawerItem({
  uri,
  label
}: Props) {
  

  const [isPressed, setIsPressed] = useState<boolean>(false);
  

  return (
    <Pressable
       onPressIn={() => setIsPressed(true)}  
       onPressOut={() => setIsPressed(false)} 
    >
      <View style={[styles.container, {backgroundColor: 'white', opacity: isPressed ? 0.8 : 1}]}>
          <View style={styles.content}>
            <Image source={{uri: uri}} height={28} width={28} style={{borderRadius:6}}/>
            <Text style={styles.text}>{label}</Text> 
          </View>
          <View>
            <Ionicons name='star-outline' size={24}/>
          </View>
      </View>
    </Pressable>
   
  );
}

