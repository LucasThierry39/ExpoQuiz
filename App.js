// -- IMPORTAÇÕES -- \\
import {React, useState, useEffect} from 'react'
import { StyleSheet, Text, View} from 'react-native';

export default function App() {

// -- USE-STATE -- \\  
  const titulos = ['A mãe de Mary teve quatro filhos. Abril, Maio e Junho foram os três primeiros. Qual o nome da 4ª criança?',
  'Quantas patas têm um casal de patos?', 
  'O que sobe uma chaminé para baixo, mas não desce uma chaminé para cima?', 
  'O que pode correr, mas nunca anda; tem leito, mas nunca dorme; nasce, mas não morre?']
  const respostas = [' Mary. A charada já deu essa informação no início.', 
  'Têm 5, porque cada pato têm 2 patas (2 + 2 = 4) e somando com a pata (fêmea do casal), temos 5 patas.', 
  'Um guarda-chuva. Porque para baixo, ou seja, fechado, ele cabe na chaminé. O guarda-chuva para cima, ou seja, aberto, não cabe.', 
  'O rio.']
  const [quiz, setQuiz] = useState(0);
  const [resposta, setResposta] = useState(0);
  const [taCorreta, setTaCorreta] = useState('');


// -- USE-EFFECT -- \\
  useEffect(() => {
    document.title = titulos[quiz];
  }, [quiz])

  useEffect(() => {
    document.title = respostas[resposta];
  }, [resposta])

// -- EVENTOS-BOTÃO -- \\
  const botaoEvento = () => {
    setQuiz((prevQuiz) => (prevQuiz + 1) % titulos.length);
  };
  const botaoEventoResposta = () => {
    setResposta((prevResposta) => (prevResposta + 1) % respostas.length);
  };

// -- RETURN -- \\
  return (
    <View style={styles.container}>
      <h1 style={styles.titulo}>QUIZ</h1>
      <Text style={styles.charada}>{titulos[quiz]}</Text> <br />
      <button style={styles.botao}onClick={botaoEvento}>Proxima questao</button>
      
    </View>
  );
}

// -- ESTILOS -- \\
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ADD8E6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    color: 'white',
    backgroundColor: '#00A4CD',
    borderRadius: 15,
    padding: 10,
  },
  charada: {
    fontSize: 24,
    padding: 4,
  },
  botao: {
    padding: 10,
    backgroundColor: '#00A4CD',
    color: 'white',
    borderRadius: 15
  },
});
