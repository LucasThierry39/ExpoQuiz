import {React, useState, useEffect} from 'react'
import { StyleSheet, Text, View, TouchableOpacit, detox } from 'react-native';

export default function App() {
  const titulos = ['Quanto é 2+2','Quanto é 2+3', 'Quanto é 2/2', 'Quanto é 50+50']
  const respostas = ['Resposta: 4', 'Resposta: 5', 'Resposta: 1', 'Resposta: 100']
  const [quiz, setQuiz] = useState(0);
  const [resposta, setResposta] = useState(0);

  useEffect(() => {
    document.title = titulos[quiz];
  }, [quiz])

  useEffect(() => {
    document.title = respostas[resposta];
  }, [resposta])

  const botaoEvento = () => {
    setQuiz((prevQuiz) => (prevQuiz + 1) % titulos.length);
  };
  const botaoEventoResposta = () => {
    setQuiz((prevResposta) => (prevResposta + 1) % respostas.length);
  };

  return (
    <View style={styles.container}>
      <h1>QUIZ</h1>
      <p>{titulos[quiz]}</p>
      <p>Digite sua Resposta</p><input type="text" />
      <p>Resposta correta: </p>
     <button onClick={botaoEvento}>Proxima questao</button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
