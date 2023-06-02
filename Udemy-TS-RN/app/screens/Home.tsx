import { FC } from 'react';
import {StyleSheet, TouchableOpacity, View,Text} from 'react-native';

interface Props {}
const Home: FC<Props> = (): JSX.Element => {
  return <View style={styles.container}>
    {/* Image Capture  Button  */ }
    <View  style={styles.btnContainer}>
  <TouchableOpacity style={styles.button}>
  </TouchableOpacity>
  <Text style={styles.btnLabel}>Capture</Text>
  </View>

      {/* Image Select Button  */ }
  <View  style={styles.btnContainer}>
  <TouchableOpacity style={styles.button}>
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
},
btnLabel:{
    textAlign : 'center' , 
    fontWeight : '500' , 
}
});

export default Home;