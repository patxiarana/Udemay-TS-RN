import { FC } from 'react';
import {StyleSheet,PermissionsAndroid, View,Text,Alert, Button,TouchableOpacity,} from 'react-native';
import { Entypo, AntDesign  } from '@expo/vector-icons'; 
import LargeIconButton from '../components/LargeIconButton'; 
import RequestCameraPermission from '../utils/helper';
import { Camera, CameraType } from 'expo-camera';
import { useState } from 'react';

interface Props {}

const Home: FC<Props> = (): JSX.Element => {

  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
        <View style={styles.container}>
      {/* App Titles */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Choose Your Image</Text>
        <Text style={styles.secondaryText}>
          You can select your image using one of these option which you want to
          convert to passport size.
        </Text>
      </View>
      
  <LargeIconButton title='Capture' onPress={requestPermission}>
  <Entypo name="camera" />
  </LargeIconButton>
  <LargeIconButton title='Select'>
 <AntDesign name="folderopen"/>
  </LargeIconButton>
  </View>
    );
  }
  
  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

  return (
    <View style={styles.containerCamera}>
      <Camera style={styles.camera} type={type}>
        <View style={styles.buttonContainerCamera}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
            <Text style={styles.textCamera}>Flip Camera</Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  )
}


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
},
camera: {
  flex: 0,
},
buttonContainerCamera: {
 // flex: 1,
  flexDirection: 'row',
  backgroundColor: 'transparent',
  margin: 100,
},
textCamera: {
  fontSize: 24,
  fontWeight: 'bold',
  color: 'white',
},
containerCamera: {
 // flex: 1,
  justifyContent: 'center',
}
});

export default Home;