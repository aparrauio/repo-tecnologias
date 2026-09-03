import { EstadoPeticion } from '../tipos'

interface ResumenInventarioProps {
  valorTotalUSD: number
  cantidadProductos: number
  tasaCambio: EstadoPeticion<number>
}

// Componente puramente presentacional: no sabe CÓMO se obtuvo la tasa
// de cambio, solo recibe su estado actual y decide qué mostrar.
export default function ResumenInventario({ valorTotalUSD, cantidadProductos, tasaCambio }: ResumenInventarioProps) {
  function textoValorEnEuros(): string {
    switch (tasaCambio.estado) {
      case 'cargando':
        return 'Cargando tasa...'
      case 'error':
        return 'No disponible'
      case 'listo':
        // Aquí TypeScript SABE que "tasaCambio.datos" es un number,
        // gracias al discriminated union.
        return `€${(valorTotalUSD * tasaCambio.datos).toFixed(2)}`
    }
  }

  return (
    <div className="resumen">
      <div className="resumen-card">
        <p className="etiqueta">Valor total (USD)</p>
        <p className="valor">${valorTotalUSD.toFixed(2)}</p>
      </div>

      <div className="resumen-card">
        <p className="etiqueta">Valor total (EUR)</p>
        <p className="valor">{textoValorEnEuros()}</p>
        {tasaCambio.estado === 'listo' && (
          <p className="nota">Tasa: 1 USD = €{tasaCambio.datos.toFixed(4)}</p>
        )}
      </div>

      <div className="resumen-card">
        <p className="etiqueta">Productos en inventario</p>
        <p className="valor">{cantidadProductos}</p>
      </div>
    </div>
  )
}
