import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Servicios from './components/Servicios.jsx'
import Testimoniales from './components/Testimoniales.jsx'
import Footer from './components/Footer.jsx'

// App actúa como el "orquestador" de la página: no dibuja nada por sí
// mismo, solo compone (ordena) los cinco componentes de sección en el
// orden en que deben aparecer visualmente. Esta es la esencia de la
// composición de componentes en React: piezas pequeñas y reutilizables
// que se combinan para formar una interfaz completa.
export default function App() {
  return (
    <div className="pagina">
      <Header />
      <Hero />
      <Servicios />
      <Testimoniales />
      <Footer />
    </div>
  )
}
