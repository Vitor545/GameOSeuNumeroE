import React, { useState } from "react";
import "./styles.css";
import imgGit from "./img/GitHub.png";
import imgLink from "./img/linkedin.png";

export default function App() {
  const [estado, setEstado] = useState("ENTRADA");
  const [chute, setChute] = useState(250);
  const [numeroChute, setNumeroChute] = useState(1);
  const [minimo, setMinimo] = useState(0);
  const [maximo, setMaximo] = useState(500);

  const menor = () => {
    setNumeroChute(numeroChute + 1);
    setMaximo(chute);
    const proximoChute = Math.trunc((chute - minimo) / 2) + minimo;
    setChute(proximoChute);
  };

  const maior = () => {
    setNumeroChute(numeroChute + 1);
    setMinimo(chute);
    const proximoChute = Math.trunc((maximo - chute) / 2) + chute;
    setChute(proximoChute);
  };

  const acertou = () => {
    setEstado("FIM");
  };

  const iniciarGame = () => {
    setEstado("RUN");
    setChute(250);
    setMaximo(500);
    setMinimo(0);
    setNumeroChute(1);
  };

  if (estado === "ENTRADA") {
    return (
      <div className="App">
        <button className="button inicia" onClick={iniciarGame}>
          Novo Jogo
        </button>
      </div>
    );
  }

  if (estado === "FIM") {
    return (
      <div className="App">
        <p className="paragrafo">Número de tentativas</p>
        <p className="numero">{numeroChute}</p>
        <button className="button inicia" onClick={iniciarGame}>
          Novo Jogo
        </button>
        <div>
          <a href="https://github.com/Vitor545">
            <img className="logo" src={imgGit} alt="git" />
          </a>
          <a href="https://www.linkedin.com/in/vitor-souza-da-silva/">
            <img className="logo" src={imgLink} alt="link" />
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <p className="paragrafo2">Escolha um número de 0 a 499</p>
      <p className="paragrafo">O seu número é ?</p>
      <p className="numero">{chute}</p>
      <div>
        <button onClick={menor} className="button menor">
          Menor
        </button>
        <button onClick={acertou} className="button acertou">
          Acertou!
        </button>
        <button onClick={maior} className="button maior">
          Maior
        </button>
      </div>
    </div>
  );
}
