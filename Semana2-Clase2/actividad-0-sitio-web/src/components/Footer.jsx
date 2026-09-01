// Footer: cierre de la página con información de contacto/legal.
// No recibe props porque su contenido es estático para este ejercicio.
export default function Footer() {
  return (
    <footer className="footer" id="contacto">
      <p>© 2026 Órbita Studio. Todos los derechos reservados.</p>
      <div className="enlaces">
        <a href="#inicio">Inicio</a>
        <a href="#servicios">Servicios</a>
        <a href="#testimonios">Testimonios</a>
      </div>
      <p>Instagram · LinkedIn · X</p>
    </footer>
  )
}
