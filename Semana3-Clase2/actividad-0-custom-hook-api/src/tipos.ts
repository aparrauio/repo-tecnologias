// TODO 1: Define el tipo genérico "EstadoPeticion<T>" como un
// discriminated union con 3 formas posibles, todas compartiendo el
// campo "estado" con un valor literal distinto:
//   - { estado: 'cargando' }
//   - { estado: 'error'; mensaje: string }
//   - { estado: 'listo'; datos: T }
//
// export type EstadoPeticion<T> = ...
export type EstadoPeticion<T> = 
  | { estado: 'cargando' }
  | { estado: 'error'; mensaje: string }
  | { estado: 'listo'; datos: T };