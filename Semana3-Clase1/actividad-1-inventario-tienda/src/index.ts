// ── Sistema de Inventario (TypeScript) ────────────────────────────
// Completa los TODO para tipar correctamente la interfaz y las
// funciones de este sistema de inventario.

// TODO 1: Define la interfaz "Producto" con los campos:
//   id: number, nombre: string, precio: number, cantidad: number,
//   categoria: 'electronica' | 'ropa' | 'alimentos'
interface Producto {
  id: number
  nombre: string
  precio: number
  cantidad: number
  categoria: 'electronica' | 'ropa' | 'alimentos' | 'mascotas'
}


// TODO 2: Anota los tipos de "inventario" (Producto) y "producto" (Producto)
// y el tipo de retorno (Producto[]).
function agregarProducto(inventario: Producto[], producto: Producto): Producto[] {
  return [...inventario, producto]
}

// TODO 3: Anota el parámetro (Producto[]) y el retorno (number).
function calcularValorTotal(inventario: Producto[]): number {
  return inventario.reduce((total, producto) => total + producto.precio * producto.cantidad, 0)
}

// TODO 4: Anota los parámetros (Producto[], y la categoría con el tipo
// union correspondiente) y el retorno (Producto[]).
function buscarPorCategoria(inventario: Producto[], categoria: Producto['categoria']): Producto[] {
  return inventario.filter((producto) => producto.categoria === categoria)
}

// TODO 5: Anota los parámetros (Producto[], number) y el retorno (Producto[]).
function productoConStockBajo(inventario: Producto[], minimo: number): Producto[] {
  return inventario.filter((producto) => producto.cantidad < minimo)
}

//Funcion para mostrar todos los productos con todos sus detalles
function imprimirProductos(lista: Producto[]): void {
  lista.forEach((producto) => console.log(`${producto.id} - ${producto.nombre} - ${producto.precio} - ${producto.cantidad} - ${producto.categoria}`))
}

// ── Datos de prueba y uso del programa ─────────────────────────────
let inventario: Producto[] = [] // TODO 6: anota este arreglo como Producto[]

inventario = agregarProducto(inventario, { id: 1, nombre: 'Audífonos', precio: 25, cantidad: 40, categoria: 'electronica' })
inventario = agregarProducto(inventario, { id: 2, nombre: 'Camiseta', precio: 12, cantidad: 5, categoria: 'ropa' })
inventario = agregarProducto(inventario, { id: 3, nombre: 'Arroz 1kg', precio: 2, cantidad: 100, categoria: 'alimentos' })
inventario = agregarProducto(inventario, { id: 4, nombre: 'Comida para gatos', precio: 2, cantidad: 100, categoria: 'mascotas' })

console.log('Valor total del inventario:', calcularValorTotal(inventario))
console.log('Productos de electrónica:', buscarPorCategoria(inventario, 'electronica'))
console.log('Productos con stock bajo (< 10):', productoConStockBajo(inventario, 10))

imprimirProductos(inventario)

// TODO 7: Descomenta la siguiente línea y confirmen que TypeScript
// marca un error de compilación por la categoría inválida:
// inventario = agregarProducto(inventario, { id: 4, nombre: 'Yoyo', precio: 3, cantidad: 20, categoria: 'juguetes' })
