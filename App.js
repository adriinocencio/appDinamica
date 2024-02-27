import * as React from 'react'; import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{padding: 10}}>Escolha um botão</Text>
      <Button style={{padding: 10, margin: 10}} title="Ollyver" onPress={() => navigation.navigate('Ollyver')} />
      <Button style={{padding: 10, margin: 10}} title="Hugo" onPress={() => navigation.navigate('Hugo')} />
    </View>
  );
}

function OllyverScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{padding: 10}}>Ollyver</Text>
      <Text style={{padding: 10}}>Eu confio nele porque ele é o meu melhor amigo e uma das minhas pessoas favoritas de todo o mundo.</Text>
      <Text style={{padding: 10}}>Por favor, imite um gato chique, como se fosse um barão rico mas na verdade ele é um gato. Ou o gato de botas.</Text>
      <Button style={{padding: 10, margin: 10}} title="Ver Hugo" onPress={() => navigation.navigate('Hugo')} />
      <Button style={{padding: 10, margin: 10}} title="Voltar para a página inicial" onPress={() => navigation.navigate('Home')} />
      <Button style={{padding: 10, margin: 10}} title="Voltar para a página anterior" onPress={() => navigation.goBack()} />
    </View>
  );
}

function HugoScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{padding: 10}}>Hugo</Text>
      <Text style={{padding: 10}}>Mesmo sendo um pouco chato as vezes, ele é um bom amigo.</Text>
      <Text style={{padding: 10}}>Imite a voz do Gru falando qualquer coisa que você quiser.</Text>
      <Button style={{padding: 10, margin: 10}} title="Ver Ollyver" onPress={() => navigation.navigate('Ollyver')} />
      <Button style={{padding: 10, margin: 10}} title="Voltar para a página inicial" onPress={() => navigation.navigate('Home')} />
      <Button style={{padding: 10, margin: 10}} title="Voltar para a página anterior" onPress={() => navigation.goBack()} />
    </View>
  );
}


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Ollyver" component={OllyverScreen} />
        <Stack.Screen name="Hugo" component={HugoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;