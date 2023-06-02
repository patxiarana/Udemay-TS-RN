import React, {FC} from 'react';
import { Text, View } from 'react-native';
import Home from './app/screens/Home'

interface Props {}


const  App: FC<Props> = (props) : JSX.Element => {
  return (
    <View>
      <Text>Probando Render</Text>
      <Home/>
 </View>
  );
}

export default App ; 
