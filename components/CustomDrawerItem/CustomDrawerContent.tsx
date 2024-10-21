import { View, Text } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer'
import { Collapsible } from '../Collapsible/Collapsible'
import CustomDrawerItem from './CustomDrawerItem'
import Peringkat from '@/assets/icons/Peringkat'
import Tersimpan from '@/assets/icons/Tersimpan'
import Acak from '@/assets/icons/Acak'
import Donatur from '@/assets/icons/Donatur'
import Medali from '@/assets/icons/Medali'
import TokoKoin from '@/assets/icons/TokoKoin'
import Discord from '@/assets/icons/Discord'

export default function CustomDrawerContent(props: any) {
  return (
    <DrawerContentScrollView {...props} style={{marginBottom:40}}>
        <DrawerItemList {...props}/>
        <View
        style={{
          borderBottomColor: 'grey',
          borderBottomWidth: 0.5,
          paddingTop: 8,
          marginBottom: 10
        }}
      />
        <Collapsible title="Meme lain">
          <DrawerItem label={'Peringkat'} labelStyle={{marginLeft: -20}} icon={()=> (<Peringkat/>)} onPress={()=>{}}/>
          <DrawerItem label={'Tersimpan'} labelStyle={{marginLeft: -20}} icon={()=> (<Tersimpan/>)} onPress={()=>{}}/>
          <DrawerItem label={'Acak'} labelStyle={{marginLeft: -20}} icon={()=> (<Acak/>)} onPress={()=>{}}/>
       </Collapsible>
        <View
          style={{
            borderBottomColor: 'grey',
            borderBottomWidth: 0.5,
            paddingTop: 8,
            marginBottom: 10
            
          }}
        />
       <Collapsible title="Jelajah">
          <DrawerItem label={'Donatur'} labelStyle={{marginLeft: -20}} icon={()=> (<Donatur/>)} onPress={()=>{}}/>
          <DrawerItem label={'Medali'} labelStyle={{marginLeft: -20}} icon={()=> (<Medali/>)} onPress={()=>{}}/>
          <DrawerItem label={'Toko Koin'} labelStyle={{marginLeft: -20}} icon={()=> (<TokoKoin/>)} onPress={()=>{}}/>
          <DrawerItem label={'Discord'} labelStyle={{marginLeft: -20}} icon={()=> (<Discord/>)} onPress={()=>{}}/>
       </Collapsible>
        <View style={{marginTop: 8, marginBottom: -18, marginLeft: -2}}>
          <DrawerItem label={'Telusuri'} labelStyle={{color:'#4c9dff', fontWeight: 'bold', fontSize: 18}} onPress={()=>{}}/>
        </View>
       

        <CustomDrawerItem label='Lucu' uri='https://lahelu.com/media/hashtags/funny.jpg'/>
        <CustomDrawerItem label='Relate' uri='https://lahelu.com/media/hashtags/relate.jpg'/>
        <CustomDrawerItem label='Gaming' uri='https://lahelu.com/media/hashtags/gaming.jpg'/>
        <CustomDrawerItem label='Nostalgia' uri='https://lahelu.com/media/hashtags/nostalgia.jpg'/>
        <CustomDrawerItem label='Sad' uri='https://lahelu.com/media/hashtags/sad.jpg'/>
        <CustomDrawerItem label='Random' uri='https://lahelu.com/media/hashtags/random.jpg'/>
        <CustomDrawerItem label='Wtf' uri='https://lahelu.com/media/hashtags/wtf.jpg'/>
        <CustomDrawerItem label='Rage' uri='https://lahelu.com/media/hashtags/rage.jpg'/>
        <CustomDrawerItem label='Anime' uri='https://lahelu.com/media/hashtags/anime.jpg'/>
        <CustomDrawerItem label='Sarkas' uri='https://lahelu.com/media/hashtags/sarcastic.jpg'/>
        <CustomDrawerItem label='Dark' uri='https://lahelu.com/media/hashtags/dark.jpg'/>
        <CustomDrawerItem label='Absurd' uri='https://lahelu.com/media/hashtags/absurd.jpg'/>
        <CustomDrawerItem label='Cringe' uri='https://lahelu.com/media/hashtags/cringe.jpg'/>
        <CustomDrawerItem label='Sus' uri='https://lahelu.com/media/hashtags/sus.jpg'/>
        <CustomDrawerItem label='Binatang' uri='https://lahelu.com/media/hashtags/animal.jpg'/>

        <View style={{marginTop: 8, marginBottom: -18, marginLeft: -2}}>
          <DrawerItem label={'Informasi'} labelStyle={{color:'#4c9dff', fontWeight: 'bold', fontSize: 18}} onPress={()=>{}}/>
        </View>
        
        <View style={{flexDirection: 'row', gap: 14, marginHorizontal: 18,
                      marginVertical: 6}}>

            <Text>Kontak</Text>
            <Text>Aturan</Text>
            <Text>Ketentuan</Text>
        </View>

        <View style={{flexDirection: 'row', gap: 14, marginHorizontal: 18,
                marginVertical: 8}}>

            <Text>Kebijakan</Text>
            <Text>Lahelu+</Text>
            <Text>Koin</Text>
        </View>
    </DrawerContentScrollView>
  )
}