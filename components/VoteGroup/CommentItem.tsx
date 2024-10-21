import React from 'react';
import Comment from '../../assets/icons/Comment';
import { useState, type PropsWithChildren } from 'react';
import {  View, Text, Pressable } from 'react-native';
import { styles } from './styles';


type Props = PropsWithChildren<{
  label: string;
}>;

export default function CommentItem({ label }: Props) {

  const [isPressed, setIsPressed] = useState<boolean>(false);

  return (
    <Pressable
    onPressIn={() => setIsPressed(true)}  
    onPressOut={() => setIsPressed(false)} 
 >
       <View style={[styles.commentContainer, {opacity: isPressed ? 0.8 : 1}]}>
         <View style={styles.commentContent}>
             <Comment/>
             <Text style={styles.text}>{label}</Text> 
         </View>
       </View>
   </Pressable>

   
  );
}

