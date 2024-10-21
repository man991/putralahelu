import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
      borderRadius: 25, 
      borderWidth: 0.65,
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
      width: 'auto',
      paddingHorizontal: 12,
      borderColor:'#e0e0e0'
    },
    content: {
      flex: 1,
      flexDirection: 'row',
      gap: 8,
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
      
  
    },
    text:{
      fontWeight: 'bold',
      fontSize: 14,
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'center'
    }
  });