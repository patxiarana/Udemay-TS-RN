import { Alert } from "react-native";
//import { PermissionsAndroid } from "react-native";
import * as ImagePicker from 'expo-image-picker';

 export const RequestCameraPermission =  async () : Promise<void> => {
  let messageShown = false;

  const showMessageWithOptions = (): void => {
    Alert.alert(
      'Message',
      'You have to accept the permission. Only then you will be able to take the picture',
      [
        { text: 'Cancel', onPress: () =>{Alert.alert(
          'Failed to open camera',
          'Sorry but to use this feature you have to accept the CAMERA PERMISSION!')}, style: 'cancel' },
        {
          text: 'OK',
          onPress: async () => {
            const { status } = await ImagePicker.requestCameraPermissionsAsync();
            console.log(status)
             if (status === 'granted') {
              const image = await ImagePicker.launchCameraAsync();
               if (!image.canceled) {
                console.log(image);
              }
            } else {
       console.log(status) ;
            }
          },
        },
        { text: 'Ask me later', onPress: () => { Alert.alert(
          'Failed to open camera',
          "It's looks like you have disabled the camera permission for this app! Please change the setting first.",
        );} },
      ],
      { cancelable: false }
    );
  };

  if (!messageShown) {
    showMessageWithOptions();
    messageShown = true;
  }
};
 