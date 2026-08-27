// Hero: la primera sección que ve el usuario. Contiene el mensaje
// principal de valor y dos botones CTA (Call To Action) con distinta
// jerarquía visual: uno primario (acción principal) y otro secundario
// (acción alternativa, menos prioritaria).
export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <h1>Diseñamos experiencias digitales que conectan</h1>
      <p className="subtitulo">
        En Órbita Studio combinamos branding, desarrollo web y apps
        móviles para llevar tu marca al siguiente nivel.
      </p>
      <div className="botones">
        <button
          className="btn-primario"
          onClick={() => alert('Formulario de cotización próximamente 🚀')}
        >
          Solicitar cotización
        </button>
        <button
          className="btn-secundario"
          onClick={() => alert('Mostrando portafolio... 🎨')}
        >
          Ver portafolio
        </button>
      </div>
    </section>
  )
}
