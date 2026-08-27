import TestimonioCard from './TestimonioCard.jsx'

const listaTestimonios = [
  { id: 1, nombre: 'Ana Torres', cargo: 'CEO, Café Andino', comentario: 'Transformaron nuestra marca por completo.' },
  { id: 2, nombre: 'Luis Herrera', cargo: 'Fundador, TiendaYa', comentario: 'El sitio web superó todas nuestras expectativas.' },
  { id: 3, nombre: 'Marta Ríos', cargo: 'Directora, EcoModa', comentario: 'Equipo profesional y muy creativo.' },
]

export default function Testimoniales() {
  return (
    <section className="testimoniales" id="testimonios">
      <h2>Lo que dicen nuestros clientes</h2>
      <div className="testimoniales-grid">
        {/* Mismo patrón que en Servicios.jsx: .map() + key única +
            props individuales. Practicar este patrón dos veces en la
            misma página ayuda a interiorizarlo. */}
        {listaTestimonios.map((testimonio) => (
          <TestimonioCard
            key={testimonio.id}
            nombre={testimonio.nombre}
            cargo={testimonio.cargo}
            comentario={testimonio.comentario}
          />
        ))}
      </div>
    </section>
  )
}
