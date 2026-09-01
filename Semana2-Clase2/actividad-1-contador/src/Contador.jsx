// TODO 1: Importa useState desde React.
// TODO 2: Crea el estado "valor" inicializado en 0.
// TODO 3: Crea funciones para incrementar y decrementar el valor.
// TODO 4: Muestra el valor actual y dos botones "+1" y "-1".
import { useState } from "react";

export default function Contador() {

  //Crea el estado "valor" inicializado en 0.
  const [valor, setValor] = useState(0);

  function incrementar() {
    setValor((valorActual) => valorActual + 1)
  }

  function decrementar() {
    setValor((valorActual) => valorActual - 1)
  }

  return (
    <div className="contador-card">
      <p className="valor">{valor}</p>
      <div className="botones">
        <button onClick={decrementar}>-1</button>
        <button onClick={incrementar}>+1</button>
      </div>
    </div>
  )
}
