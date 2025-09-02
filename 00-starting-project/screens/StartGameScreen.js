import { View, Text, TextInput,StyleSheet } from 'react-native'
import PrimaryButton from '../components/PrimaryButton';

const StartGameScreen = () => {
  return ( 
  <View style={styles.inputContainer}>
    <TextInput />
    <PrimaryButton> reset</PrimaryButton>
    <PrimaryButton> confirm </PrimaryButton>
  </View>    
);
}

export default StartGameScreen

const styles = StyleSheet.create({
    inputContainer: {
       
        padding: 16,
        marginTop: 100,
        marginHorizontal: 24,
        backgroundColor: '#6f63f6ff',
        borderRadius: 8,
        elevation: 7,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
    
        },
});