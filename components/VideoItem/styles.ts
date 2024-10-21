import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    mainContainer:{
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
     backgroundColor: '#F1F1EF',
  },
      videoContainer: {
        flexDirection: 'row',
        marginLeft: Dimensions.get('window').height / 21,
        width: '80%',
        height: Dimensions.get('window').height,
        backgroundColor: 'black'
      },
      video: {
        width: '100%',
        height: '100%',
      },
      sliderContainer:{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
      },
      slider: {
          width: '100%',
          height: 40,
          marginTop: -20,
          marginBottom: 10
        },
        soundContainer:{
          marginTop: Dimensions.get('window').height - 50,
          width: 30,
          height: 30,
          borderRadius: 30 / 2,
          overflow: "hidden",
          backgroundColor: '#666666',
          alignItems: 'center',
          alignContent: 'center',
          justifyContent: 'center'
      },
      dollarIcon: {
        backgroundColor: 'white',
        width: 15,
        height: 15,
        borderRadius: 15 / 2,
        overflow: "hidden",
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'
      },
        
    })