import { useState } from "react";
import "./App.css";

function App() {
  const [nome, setNome] = useState("");
  const [participantes, setParticipantes] = useState([]);
  const [sorteado, setSorteado] = useState("");

  function adicionarParticipante() {
    if (nome.trim() === "") return;

    setParticipantes([...participantes, nome]);
    setNome("");
  }

  function sortearNome() {
    if (participantes.length === 0) return;

    const indiceAleatorio = Math.floor(Math.random() * participantes.length);
    setSorteado(participantes[indiceAleatorio]);
  }

  function limparTudo() {
    setNome("");
    setParticipantes([]);
    setSorteado("");
  }

  return (
    <div className="container">
      <div className="card">
        <h1>Sorteador de Nomes</h1>
        <p>Adicione os participantes e faça o sorteio.</p>

        <div className="input-area">
          <input
            type="text"
            placeholder="Digite um nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <button onClick={adicionarParticipante}>Adicionar</button>
        </div>

        <div className="lista">
          <h2>Participantes</h2>
          {participantes.length === 0 ? (
            <p>Nenhum participante adicionado.</p>
          ) : (
            <ul>
              {participantes.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
        </div>

        <div className="acoes">
          <button onClick={sortearNome}>Sortear</button>
          <button onClick={limparTudo} className="limpar">
            Reiniciar
          </button>
        </div>

        {sorteado && (
          <div className="resultado">
            <h2>Nome sorteado</h2>
            <span>{sorteado}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;