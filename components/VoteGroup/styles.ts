import { StyleSheet } from "react-native";

export 
const styles = StyleSheet.create({
  upContainer:{
    borderTopLeftRadius: 8, 
    borderBottomLeftRadius: 8, 
    borderWidth: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    width: 'auto',
    paddingHorizontal: 12,
    borderColor:'#e0e0e0',
  },
  downContainer:{
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    borderWidth: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    width: 'auto',
    height: 46,
    borderColor:'#e0e0e0',
    marginLeft: -1
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    gap: 16,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    padding: 10
    

  },
  commentContainer:{
    borderRadius: 8,
    borderWidth: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    width: 'auto',
    height: 46,
    paddingHorizontal: 12,
    borderColor:'#e0e0e0',
  },
  commentContent: {
    flex: 1,
    flexDirection: 'row',
    gap: 20,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    padding: 10
  },
  text:{
    fontWeight: 'bold',
    fontSize: 16,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center'
  }
});