// ServicioCard es un componente "presentacional": no tiene lógica ni
// estado propio, solo recibe datos por props y los muestra. Esto lo
// hace 100% reutilizable: puede representar cualquier servicio con
// solo cambiar los valores que recibe.
export default function ServicioCard({ icono, titulo, descripcion }) {
  return (
    <div className="servicio-card">
      <p className="icono">{icono}</p>
      <h3>{titulo}</h3>
      <p>{descripcion}</p>
    </div>
  )
}
