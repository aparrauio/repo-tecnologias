import { Producto } from './tipos'

// Las 4 funciones de la Semana 3 · Clase 1, ya completas. Esta sesión
// las reutiliza tal cual: el nuevo trabajo está en el hook y los
// componentes de presentación, no aquí.

export function agregarProducto(inventario: Producto[], producto: Producto): Producto[] {
  return [...inventario, producto]
}

export function calcularValorTotal(inventario: Producto[]): number {
  return inventario.reduce((total, producto) => total + producto.precio * producto.cantidad, 0)
}

export function buscarPorCategoria(inventario: Producto[], categoria: Producto['categoria']): Producto[] {
  return inventario.filter((producto) => producto.categoria === categoria)
}

export function productoConStockBajo(inventario: Producto[], minimo: number): Producto[] {
  return inventario.filter((producto) => producto.cantidad < minimo)
}

// Datos de partida para esta sesión (ya no hace falta escribir el
// inventario a mano en cada archivo).
export const inventarioBase: Producto[] = [
  { id: 1, nombre: 'Audífonos', precio: 25, cantidad: 40, categoria: 'electronica' },
  { id: 2, nombre: 'Camiseta', precio: 12, cantidad: 5, categoria: 'ropa' },
  { id: 3, nombre: 'Arroz 1kg', precio: 2, cantidad: 100, categoria: 'alimentos' },
  { id: 4, nombre: 'Smartwatch', precio: 80, cantidad: 8, categoria: 'electronica' },
]
