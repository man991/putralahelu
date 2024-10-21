
import React from 'react';
import Share from '../../assets/icons/Share';
import { useState } from 'react';
import { View, Pressable } from 'react-native';
import { styles } from './styles';


export default function ShareItem() {
  const [isPressed, setIsPressed] = useState<boolean>(false);
  return (
    <Pressable
    onPressIn={() => setIsPressed(true)}  
    onPressOut={() => setIsPressed(false)} 
 >
       <View style={[styles.container, {opacity: isPressed ? 0.8 : 1}]}>
         <View style={styles.content}>
             <Share/>
         </View>
       </View>
   </Pressable>
  );
}


