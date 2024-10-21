import { StyleSheet } from "react-native";

export const  drawerStyles = StyleSheet.create({
    leftHeader:{
        display: 'flex',
        flexDirection: 'row',
        gap: 20,
        alignItems:'center',
        paddingLeft: 25
    },
    rightHeader:{
        paddingRight: 25,
    },
    titleText:{
        color: '#4c9dff',
        fontSize: 20,
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 8, 
    }
})
  