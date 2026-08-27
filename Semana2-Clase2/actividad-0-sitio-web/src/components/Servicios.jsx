import ServicioCard from './ServicioCard.jsx'

// Los datos viven como un arreglo de objetos simple (no necesitan
// useState porque no cambian en tiempo de ejecución en este ejercicio).
const listaServicios = [
  { id: 1, icono: '🎨', titulo: 'Branding', descripcion: 'Identidad visual completa para tu marca.' },
  { id: 2, icono: '💻', titulo: 'Desarrollo Web', descripcion: 'Sitios rápidos, modernos y responsivos.' },
  { id: 3, icono: '📱', titulo: 'Apps Móviles', descripcion: 'Aplicaciones nativas e híbridas a medida.' },
]

export default function Servicios() {
  return (
    <section className="servicios" id="servicios">
      <h2>Nuestros servicios</h2>
      <div className="servicios-grid">
        {/* .map() transforma cada objeto del arreglo en un elemento JSX.
            "key={servicio.id}" es obligatorio: le permite a React
            identificar de forma única cada elemento de la lista y
            actualizar el DOM de forma eficiente si la lista cambia.
            Todas las demás propiedades del objeto se pasan como props
            individuales al componente hijo. */}
        {listaServicios.map((servicio) => (
          <ServicioCard
            key={servicio.id}
            icono={servicio.icono}
            titulo={servicio.titulo}
            descripcion={servicio.descripcion}
          />
        ))}
      </div>
    </section>
  )
}
