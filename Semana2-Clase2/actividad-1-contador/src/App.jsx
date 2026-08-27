import Contador from './Contador.jsx'

// TODO: Renderiza aquí tres instancias de <Contador />.
// Pista: cada una debe funcionar de forma independiente, sin pasarle
// ningún prop de estado compartido.

export default function App() {
  return (
    <div className="app">
      <h1>🔢 Contadores independientes</h1>
      <div className="contadores">
        <Contador />
        <Contador />
        <Contador />
      </div>
    </div>
  )
}
