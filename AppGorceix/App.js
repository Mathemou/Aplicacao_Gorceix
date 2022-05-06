import React from 'react';
import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';

const App = () => {
  return (
    <ScrollView>
      <SafeAreaView style={style.container}>
        <Text style={style.titulo}>Bem-Vindo</Text>
        <Image
          style={style.imagemTitulo}
          source={{
            uri: 'https://site.gorceixonline.com.br/uploads/fundacao_gorceix_2016/layout/logo_rodape.png',
          }}
          resizeMode="contain"
        />

        <TouchableOpacity style={style.botao}>
          <Text style={style.tituloBotao}>SIG</Text>
          <Text style={style.subTituloBotao}>Sistema Integrado Gorceix</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.botao}>
          <Text style={style.tituloBotao}>SAG</Text>
          <Text style={style.subTituloBotao}>Sistema Acadêmico Gorceix</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.botao}>
          <Text style={style.tituloBotao}>SITE</Text>
          <Text style={style.subTituloBotao}>Website Fundação Gorceix</Text>
        </TouchableOpacity>
        <Text style={style.rodape}>© 2022 | Desenvolvido por Update</Text>
      </SafeAreaView>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: '#002498',
    flex: 1,
    alignItems: 'center',
  },
  botao: {
    backgroundColor: '#f6323e',
    alignItems: 'center',
    justifyContent: 'center',
    width: 276,
    height: 73,
    borderRadius: 5,
    marginTop: '5%',
  },
  tituloBotao: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 2,
  },
  subTituloBotao: {
    color: 'white',
    fontSize: 12,
  },
  titulo: {
    color: 'white',
    fontSize: 24,
    marginTop: '30%',
  },
  imagemTitulo: {
    width: 200,
    height: 200,
    marginBottom: '20%',
  },
  rodape: {
    color: 'white',
    fontSize: 10,
    marginTop: '20%',
    marginBottom: '1%',
  },
});

export default App;
