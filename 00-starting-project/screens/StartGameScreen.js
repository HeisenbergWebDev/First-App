import { View, Text, TextInput } from 'react-native'
import PrimaryButton from '../components/PrimaryButton';

const StartGameScreen = () => {
  return ( <View>
    <TextInput />
    <PrimaryButton> reset</PrimaryButton>
    <PrimaryButton> confirm </PrimaryButton>
  </View>    
);
}

export default StartGameScreen