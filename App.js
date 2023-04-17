import { Alert, ScrollView, Image, TouchableOpacity, FlatList, Button, StyleSheet, Text, TextInput, View, } from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState } from "react"

const App = () => {
  const { nome, setNome } = useState('Parabéns');
  const [botao1, setBotao1] = useState(true);
  const apertou = () => {
    setBotao1(!botao1)
  };

  const [donors, setDonors] = useState([
    { id: 1, name: 'João', bloodType: 'A+' },
    { id: 2, name: 'Maria', bloodType: 'O-' },
    { id: 3, name: 'José', bloodType: 'B+' },
    { id: 4, name: 'Ana', bloodType: 'AB-' },
    { id: 5, name: 'Pedro', bloodType: 'O+' },
    { id: 6, name: 'Mariana', bloodType: 'A-' },
    { id: 7, name: 'Lucas', bloodType: 'B-' },
    { id: 8, name: 'Carla', bloodType: 'AB+' },
  ])
    ;

  const renderDonor = ({ item }) => (
    <TouchableOpacity style={{ padding: 10 }}>
      <Text style={{ fontSize: 18 }}>{item.name}</Text>
      <Text style={{ fontSize: 16, color: '#888' }}>{item.bloodType}</Text>
    </TouchableOpacity>
  );
  return (

    <View style={styles.topo}>
      {
        botao1 ?
          <View style={styles.container}>
            <View style={styles.logo}>
              <Image
                source={require('../home/images-removebg-preview.png')}

              />
            </View>
            <View>
              <Text style={styles.texto}>Cadastro para Doação de Sangue</Text>
            </View>
            <View>
              <View style={styles.box2}>
                <View style={styles.box3}>
                  <FontAwesome5 name="house-user" size={24} color="black" />
                  <Text style={{ fontWeight: 'bold', color: 'white' }}> Digite seu Endereço:</Text>
                </View>
                <TextInput
                  multiline
                  style={styles.input}
                  placeholder='Rua amarela 123'
                />
              </View>
              <View style={styles.box2}>
                <View style={styles.box3}>
                  <Fontisto name="blood-drop" size={24} color="red" />
                  <Text style={{ fontWeight: 'bold', color: 'white' }}> Digite seu tipo sanguíneo:</Text>
                </View>
                <TextInput
                  style={styles.input}
                  placeholder='Ex: A, B, AB, O (+ ou -)'
                  maxLength={3}
                />
              </View>
              <View style={styles.box2}>
                <View style={styles.box3}>
                  <MaterialCommunityIcons name="key-outline" size={24} color="black" />
                  <Text style={{ fontWeight: 'bold', color: 'white' }}> Digite seu CPF:</Text>
                </View>
                <TextInput
                  style={styles.input}
                  placeholder='"000.000.000-00"'
                  onChangeText={setNome}
                  keyboardType='numeric'
                  maxLength={14}
                />
              </View>

              <Text style={styles.textosangue}> Uma bolsa de sangue pode salvar até 4 vidas!!!</Text>
            </View>
            <View style={styles.botao}>
              <Button
                title="CADASTRE-SE"
                onPress={() => Alert.alert("Seu cadastro foi realizado com sucesso")}
                color={'red'}
              />
              <View style={styles.espacamento}>

              </View>

              <Button
                title="Lista dos doadores"
                onPress={apertou} color='blue'
              />

            </View>
          </View>
          :
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold', padding: 20, marginLeft: 58, marginTop: 50 }}>Doadores de Sangue</Text>
            <ScrollView>
              <Text style={{ fontSize: 20, fontWeight: 'bold', padding: 10 }}>Doadores recentes:</Text>
              <FlatList
                data={donors}
                renderItem={renderDonor}
                keyExtractor={(item) => item.id.toString()}
                horizontal
              />
              <Text style={{ fontSize: 20, fontWeight: 'bold', padding: 10 }}>Todos os doadores:</Text>
              <FlatList
                data={donors}
                renderItem={renderDonor}
                keyExtractor={(item) => item.id.toString()}
              />
            </ScrollView>
          </View>
      }

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#38a69d',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: 500,

  },
  input: {
    borderWidth: 1,
    BorderColor: 'white',
    padding: 4,
    margin: 7,
    alignItems: 'flex-end',
    width: 160,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  box2: {
    padding: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',

  },
  box3: {
    width: '50%',
    flexDirection: 'row',
  },

  topo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    fontSize: 24,
    fontWeight: 'bold',
    display: 'flex',

  },
  logo: {
    marginBottom: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 45,
  },
  textosangue: {
    justifyContent: 'center',
    display: 'flex',
    marginLeft: 40,
    fontWeight: 'bold',
  },
  botao: {
    width: 200,
    margin: 40,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  espacamento: {
    width: 30,
  }


}
);
export default App;
