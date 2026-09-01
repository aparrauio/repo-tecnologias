// Header: barra superior fija (sticky) con el nombre de marca, la
// navegación principal y un botón de llamada a la acción secundario.
export default function Header() {
  return (
    <header className="header">
      <p className="marca">Órbita Studio</p>

      {/* Los href="#seccion" apuntan a los id definidos en cada
          sección (ej. id="servicios" en Servicios.jsx), permitiendo
          scroll interno sin necesidad de un router. */}
      <nav>
        <a href="#inicio">Inicio</a>
        <a href="#servicios">Servicios</a>
        <a href="#testimonios">Testimonios</a>
        <a href="#contacto">Contacto</a>
      </nav>

      <button
        className="btn-cta-small"
        onClick={() => alert('¡Gracias por tu interés! Pronto te contactaremos.')}
      >
        Empezar proyecto
      </button>
    </header>
  )
}
