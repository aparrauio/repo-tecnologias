import { inventarioBase, calcularValorTotal } from './inventario'
import { useTasaCambio } from './hooks/useTasaCambio'
import ResumenInventario from './components/ResumenInventario'
import TablaInventario from './components/TablaInventario'

const MINIMO_STOCK = 10

export default function App() {
  // El hook encapsula toda la complejidad de ir a buscar la tasa de
  // cambio: App solo necesita su resultado, ya tipado como
  // EstadoPeticion<number>.
  const tasaCambio = useTasaCambio()

  // Reutilizamos tal cual la función de la Semana 3 · Clase 1 — no hizo
  // falta tocarla para agregar la nueva funcionalidad.
  const valorTotalUSD = calcularValorTotal(inventarioBase)

  return (
    <div className="app">
      <h1>📦 Sistema de Inventario</h1>
      <p className="subtitulo">Enriquecido con tasa de cambio en vivo (USD → EUR)</p>

      <ResumenInventario
        valorTotalUSD={valorTotalUSD}
        cantidadProductos={inventarioBase.length}
        tasaCambio={tasaCambio}
      />

      <TablaInventario
        productos={inventarioBase}
        minimoStock={MINIMO_STOCK}
        tasaCambio={tasaCambio}
      />
    </div>
  )
}
