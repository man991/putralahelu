
import { PropsWithChildren, useRef, useState } from 'react';
import { TouchableOpacity,Animated } from 'react-native';
import React from 'react';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import CarretDown from '@/assets/icons/CaretDown';
import { styles } from './styles';

export function Collapsible({ children, title }: PropsWithChildren & { title: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const rotateValue = useRef(new Animated.Value(0)).current;

  const toggleCaret = () => {
    setIsOpen(!isOpen);
    
    Animated.timing(rotateValue, {
      toValue: isOpen ? 0 : 1,
      duration: 180,
      useNativeDriver: true,
    }).start();
  };

  const rotateInterpolate = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  return (
    <ThemedView>
      <TouchableOpacity
        style={styles.heading}
        onPress={toggleCaret}
        activeOpacity={0.8}>
          <ThemedText type="defaultSemiBold">{title}</ThemedText>
          <Animated.View style={{ transform: [{ rotate: rotateInterpolate }] }}>
            <CarretDown/>
        </Animated.View>
      </TouchableOpacity>
      {isOpen && <ThemedView style={styles.content}>{children}</ThemedView>}
    </ThemedView>
  );
}

