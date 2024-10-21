import { View } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'
import { styles } from './styles'

export default function DollarIcon() {
  return (
    <View style={styles.dollarIcon}>
      <FontAwesome name='dollar' size={10} color='#dea247'/>
    </View>
  )
}
