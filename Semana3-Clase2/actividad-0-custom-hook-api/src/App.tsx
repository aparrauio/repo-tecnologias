// TODO: importa useChistesChuckNorris desde './hooks/useChistesChuckNorris'
import { useChistesChuckNorris } from "./hooks/useChistesChuckNorris"

// TODO: Construye el componente App:
//  1. Usa el hook para obtener el resultado (EstadoPeticion<string>) y pedirOtroChiste.
//  2. Con un switch (o if) sobre resultado.estado, muestra:
//     - "Cargando..." si estado === 'cargando'
//     - El mensaje de error si estado === 'error'
//     - El chiste (resultado.datos) si estado === 'listo'
//  3. Agrega un botón "Otro chiste 🥋" que llame a pedirOtroChiste().
export default function App() {
  const { resultado, pedirOtroChiste } = useChistesChuckNorris()

  function renderizarContenido () {
    switch (resultado.estado) {
      case 'cargando':
        return <p>Cargando chiste...</p>
      case 'error':
        return <p className="error">{resultado.mensaje}</p>
      case 'listo':
        return <p>{resultado.datos}</p>
    }
  }

  return (
    <div className="app">
      <h1>🥋 Chistes de Chuck Norris</h1>
      <div className="chiste-card">{renderizarContenido()}</div>
      <button onClick={pedirOtroChiste}>Otro chiste 🥋</button>
    </div>
  )
}
