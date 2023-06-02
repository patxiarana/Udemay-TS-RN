import React, {FC} from 'react';
import { Text, View } from 'react-native';
import Home from './app/screens/Home'

interface Props {}


const  App: FC<Props> = (props) : JSX.Element => {
  return (
    <View>
      <Home/>
 </View>
  );
}

export default App ; 
