import { Producto, EstadoPeticion } from '../tipos'

interface TablaInventarioProps {
  productos: Producto[]
  minimoStock: number
  tasaCambio: EstadoPeticion<number>
}

// Traduce una categoría (tipo union de literales) a un texto legible.
// Esta función no necesita tipo de retorno explícito porque TypeScript
// lo infiere como "string" — aun así, el parámetro SÍ está tipado con
// Producto['categoria'], restringiendo los valores válidos de entrada.
function nombreCategoria(categoria: Producto['categoria']): string {
  const nombres: Record<Producto['categoria'], string> = {
    electronica: 'Electrónica',
    ropa: 'Ropa',
    alimentos: 'Alimentos',
  }
  return nombres[categoria]
}

export default function TablaInventario({ productos, minimoStock, tasaCambio }: TablaInventarioProps) {
  // Función auxiliar: calcula el precio en euros solo si la tasa ya
  // está disponible; de lo contrario retorna null para mostrar "—".
  function precioEnEuros(precioUSD: number): number | null {
    if (tasaCambio.estado === 'listo') {
      return precioUSD * tasaCambio.datos
    }
    return null
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Categoría</th>
          <th>Precio (USD)</th>
          <th>Precio (EUR)</th>
          <th>Cantidad</th>
        </tr>
      </thead>
      <tbody>
        {productos.map((producto) => {
          const precioEUR = precioEnEuros(producto.precio)
          const stockBajo = producto.cantidad < minimoStock
          return (
            <tr key={producto.id}>
              <td>{producto.nombre}</td>
              <td>
                <span className="categoria-pill">{nombreCategoria(producto.categoria)}</span>
              </td>
              <td>${producto.precio.toFixed(2)}</td>
              <td>{precioEUR !== null ? `€${precioEUR.toFixed(2)}` : '—'}</td>
              <td className={stockBajo ? 'stock-bajo' : ''}>
                {producto.cantidad}{stockBajo ? ' ⚠️' : ''}
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
