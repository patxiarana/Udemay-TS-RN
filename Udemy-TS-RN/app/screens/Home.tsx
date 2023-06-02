import { FC } from 'react';
import {StyleSheet, TouchableOpacity, View,Text} from 'react-native';
import { Entypo, AntDesign  } from '@expo/vector-icons';  
interface Props {}
const Home: FC<Props> = (): JSX.Element => {
  return <View style={styles.container}>
    {/* Image Capture  Button  */ }
    <View  style={styles.btnContainer}>
  <TouchableOpacity style={styles.button}>
  <Entypo name="camera" style={styles.icon} />
  </TouchableOpacity>
  <Text style={styles.btnLabel}>Capture</Text>
  </View>

      {/* Image Select Button  */ }
  <View  style={styles.btnContainer}>
  <TouchableOpacity style={styles.button}>
  <AntDesign name="folderopen" style={styles.icon} />
  </TouchableOpacity>
  <Text style={styles.btnLabel}>Select</Text>
  </View >
  </View>;
};

const styles = StyleSheet.create({
  container: {
  //  flex: 1 ,
   justifyContent : 'center', 
   alignItems : 'center' , 
   marginTop: 200,
  // display: 'none', 
  },
  btnContainer : {
    width : 120 ,
    height : 120 , 
    marginVertical : 25 , 
}, 
button: {
    width : '100%',
    height : '100%',
     borderWidth : 4 ,
    borderColor : '#6C9ADE' ,
    borderRadius : 7 , 
    alignItems : 'center',
    justifyContent: 'center'
},
btnLabel:{
    textAlign : 'center' , 
    fontWeight : '500' , 
},
icon : {
    fontSize:55,
    color:"#6C9ADE",
}
});

export default Home;