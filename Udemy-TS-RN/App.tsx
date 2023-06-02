import React, {FC} from 'react';
import { Text, View , StyleSheet} from 'react-native';
import Home from './app/screens/Home'

interface Props {}


const  App: FC<Props> = (props) : JSX.Element => {
  return (
    <View>
      <Home/>
 </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    textAlign: 'center',
  },
});


export default App ; 
