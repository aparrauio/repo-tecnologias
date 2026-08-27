// TODO: Este componente ya NO tiene su propio useState (a diferencia de
// la clase anterior). Ahora es un componente "controlado": recibe el
// valor actual y dos funciones por props, y solo debe:
//  1. Mostrar el valor recibido.
//  2. Llamar a onIncrementar cuando se hace clic en "+1".
//  3. Llamar a onDecrementar cuando se hace clic en "-1".
export default function Contador({ valor, onIncrementar, onDecrementar }) {
  return (
    <div className="contador-card">
      <p className="valor">{valor}</p>
      <div className="botones">
        <button onClick={onDecrementar}>-1</button>
        <button onClick={onIncrementar}>+1</button>
      </div>
    </div>
  )
}
