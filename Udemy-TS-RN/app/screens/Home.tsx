import { FC } from 'react';
import {StyleSheet,PermissionsAndroid, View,Text,Alert} from 'react-native';
import { Entypo, AntDesign  } from '@expo/vector-icons'; 
import LargeIconButton from '../components/LargeIconButton'; 
interface Props {}
const Home: FC<Props> = (): JSX.Element => {
  const handleImageCapture = async (): Promise<void> => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Camera Permission',
          message:
            'You have to accept the permission. Only then you will be able to take the picture',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
     console.log(granted);
     const {NEVER_ASK_AGAIN, DENIED} = PermissionsAndroid.RESULTS;
      if (granted === NEVER_ASK_AGAIN)
        return Alert.alert(
          'Failed to open camera',
          "It's looks like you have disabled the camera permission for this app! Please change the setting first.",
        );

      if (granted === DENIED)
        return Alert.alert(
          'Failed to open camera',
          'Sorry but to use this feature you have to accept the CAMERA PERMISSION!',
        );
    } catch (error) {
      console.log('Fail to open camera, error inside camera permission', error);
    }
  };














  return <View style={styles.container}>
      {/* App Titles */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Choose Your Image</Text>
        <Text style={styles.secondaryText}>
          You can select your image using one of these option which you want to
          convert to passport size.
        </Text>
      </View>
   
     {/* Image Capture  Button  */ }

  <LargeIconButton title='Capture' onPress={handleImageCapture}>
  <Entypo name="camera" />
  </LargeIconButton>

   {/* <View  style={styles.btnContainer}>
  <TouchableOpacity style={styles.button}>
  <Entypo name="camera" style={styles.icon} />
  </TouchableOpacity>
  <Text style={styles.btnLabel}>Capture</Text>
</View> */}

      {/* Image Select Button  */ }
 <LargeIconButton title='Select'>
 <AntDesign name="folderopen"/>
  </LargeIconButton>
      
{/* <View  style={styles.btnContainer}>
  <TouchableOpacity style={styles.button}>
  <AntDesign name="folderopen" style={styles.icon} />
  </TouchableOpacity>
  <Text style={styles.btnLabel}>Select</Text>
  </View >*/}
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
  titleContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    marginTop: -100,
  },
  title: {
    fontSize: 25,
    color: '#272727',
    fontWeight: '500',
    textAlign: 'center',
  },
  secondaryText: {
    color: '#272727',
    textAlign: 'center',
    opacity: 0.5,
    lineHeight: 20,
    paddingTop: 5,
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