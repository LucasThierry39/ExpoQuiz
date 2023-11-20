// -- IMPORTAÇÕES -- \\
import { React, useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  // -- USE-STATE -- \\
  const titulos = [
    "A mãe de Mary teve quatro filhos. Abril, Maio e Junho foram os três primeiros. Qual o nome da 4ª criança?",
    "Quantas patas têm um casal de patos?",
    "O que sobe uma chaminé para baixo, mas não desce uma chaminé para cima?",
    "O que pode correr, mas nunca anda; tem leito, mas nunca dorme; nasce, mas não morre?",
  ];
  const respostas = [
    " Mary. A charada já deu essa informação no início.",
    "Têm 5, porque cada pato têm 2 patas (2 + 2 = 4) e somando com a pata (fêmea do casal), temos 5 patas.",
    "Um guarda-chuva. Porque para baixo, ou seja, fechado, ele cabe na chaminé. O guarda-chuva para cima, ou seja, aberto, não cabe.",
    "100",
  ];

  const [quiz, setQuiz] = useState(0);
  const [resposta, setResposta] = useState(0);
  const questions = [
    {
      question: "A mãe de Mary teve quatro filhos. Abril, Maio e Junho foram os três primeiros. Qual o nome da 4ª criança?",
      options: [
        "Julho ",
        "Março ",
        "Julha ",
        "Mary ",
      ],
      correctAnswer: 3,
    },
    {
      question: "Quantas patas têm um casal de patos?",
      options: [
        "5 ",
        "3 ",
        "2 ",
        "4 ",
      ],
      correctAnswer: 0,
    },

    {
      question: "O que sobe uma chaminé para baixo, mas não desce uma chaminé para cima?",
      options: [
        "Fumaça ",
        "Guarda-chuva ",
        "Papel ",
        "Baloão de ar-quente ",
      ],
      correctAnswer: 1,
    },

    {
      question: "O que pode correr, mas nunca anda; tem leito, mas nunca dorme; nasce, mas não morre?",
      options: [
        "Rio ",
        "Vento ",
        "Sonho ",
        "Estrada ",
      ],
      correctAnswer: 0,
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState(null);
  const [correctAnswer, setCorrectAnswer] = useState(null);

  const handleOptionChange = (e) => {
    setUserAnswer(e.target.value);
  };

  const handleNextQuestion = () => {
    setCurrentQuestion((prev) => (prev + 1) % questions.length);
    setUserAnswer(null);
  };

  const handleSubmit = () => {
    setCorrectAnswer(questions[currentQuestion].correctAnswer);
  };
  const renderOptions = () => {
    return questions[currentQuestion].options.map((option, index) => (
      <label key={index}>
        <input
          type="radio"
          value={index}
          checked={userAnswer === index}
          onChange={handleOptionChange}
        />
        {option}
      </label>
    ));
 };

 const renderResults = () => {
    return userAnswer === correctAnswer ? (
      <p>Parabéns! A resposta está correta.</p>
    ) : (
      <p>A resposta correta é: {questions[currentQuestion].options[correctAnswer]}.</p>
    );
 };

  // -- USE-EFFECT -- \\
  useEffect(() => {
    document.title = titulos[quiz];
  }, [quiz]);

  useEffect(() => {
    document.title = respostas[resposta];
  }, [resposta]);

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
    <h2 style={styles.h2}>{questions[currentQuestion].question}</h2>
      <form style={styles.form} onSubmit={(e) => e.preventDefault()}>
        {renderOptions()}
        <button style={styles.botao} onClick={handleSubmit}>Verificar</button>
        <button style={styles.botao} onClick={handleNextQuestion}>Próxima pergunta</button>
      </form>
      {userAnswer !== null && renderResults()}
    </View>
  );
}

// -- ESTILOS -- \\
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ADD8E6",
    alignItems: "center",
    justifyContent: "center",
  },
  h2: {
    backgroundColor: "#1981CD",
    borderRadius: 10,
    padding: 2,
    color: "#00DDFF"
  },

  form: {
    backgroundColor: "#1981CD",
    padding: 6,
    borderRadius: 10

  },
  titulo: {
    color: "white",
    backgroundColor: "#00A4CD",
    borderRadius: 15,
    padding: 10,
  },
  charada: {
    fontSize: 24,
    padding: 4,
  },
  botao: {
    padding: 10,
    backgroundColor: "#1981CD",
    color: "white",
    borderRadius: 10,
  },
});
