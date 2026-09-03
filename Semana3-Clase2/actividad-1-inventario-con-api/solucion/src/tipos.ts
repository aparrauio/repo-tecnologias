// Interfaz definida en la Semana 3 · Clase 1. La traemos tal cual,
// como base sobre la que construiremos esta sesión.
export interface Producto {
  id: number
  nombre: string
  precio: number
  cantidad: number
  categoria: 'electronica' | 'ropa' | 'alimentos'
}

// NUEVO en esta clase: un discriminated union genérico para modelar los
// 3 estados posibles de cualquier dato que provenga de una API externa.
// Es el mismo patrón usado en la Actividad 0, ahora aplicado a un number
// (una tasa de cambio) en vez de a un string (un chiste).
export type EstadoPeticion<T> =
  | { estado: 'cargando' }
  | { estado: 'error'; mensaje: string }
  | { estado: 'listo'; datos: T }
