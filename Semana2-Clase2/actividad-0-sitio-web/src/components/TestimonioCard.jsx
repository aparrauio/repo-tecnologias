// Igual que ServicioCard, TestimonioCard es puramente presentacional:
// recibe los datos de un testimonio por props y los renderiza.
export default function TestimonioCard({ nombre, cargo, comentario }) {
  return (
    <div className="testimonio-card">
      <p className="comentario">"{comentario}"</p>
      <p className="autor">{nombre}</p>
      <p className="cargo">{cargo}</p>
    </div>
  )
}
