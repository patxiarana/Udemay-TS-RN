import { FC } from 'react';
import {StyleSheet, TouchableOpacity, View,Text} from 'react-native';

interface Props {}
const Home: FC<Props> = (): JSX.Element => {
  return <View style={styles.container}>
    {/* Image Capture  Button  */ }
    <View  style={styles.btnContainer}>
  <TouchableOpacity style={styles.button}>
  </TouchableOpacity>
  <Text>Capture</Text>
  </View>

      {/* Image Select Button  */ }
  <TouchableOpacity style={styles.btnContainer}>
  </TouchableOpacity>
  </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1 ,
   justifyContent : 'center', 
   alignItems : 'center' , 
   display: 'none', 
  },
  btnContainer : {
    width : 120 ,
    height : 120 , 
    marginVertical : 25 , 
}, 
button: {
    borderWidth : 4 ,
    borderColor : '#6C9ADE' ,
    borderRadius : 7 , 
}
});

export default Home;