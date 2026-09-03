import { useState, useEffect } from 'react'
import { EstadoPeticion } from '../tipos'

// En desarrollo, usamos el proxy de Vite (/api) para evitar errores CORS.
const URL_API = '/api/latest?from=USD&to=EUR'

// Mismo patrón que useChistesChuckNorris (Actividad 0), pero ahora el
// dato que viaja dentro de EstadoPeticion<T> es un "number" (la tasa),
// no un "string". Esa es la ventaja de haber usado un genérico: el
// mismo molde de tipo sirve para cualquier forma de dato.
export function useTasaCambio() {
  const [tasaCambio, setTasaCambio] = useState<EstadoPeticion<number>>({ estado: 'cargando' })

  useEffect(() => {
    async function obtenerTasa() {
      try {
        const respuesta = await fetch(URL_API)
        if (!respuesta.ok) {
          throw new Error(`Error HTTP: ${respuesta.status}`)
        }
        const datos = await respuesta.json()
        // La API anida el valor dentro de "rates.EUR". Si esa propiedad
        // no existe (respuesta inesperada), lanzamos un error a propósito.
        const tasa = datos?.rates?.EUR
        if (typeof tasa !== 'number') {
          throw new Error('La respuesta de la API no tiene el formato esperado.')
        }
        setTasaCambio({ estado: 'listo', datos: tasa })
      } catch (error) {
        const mensaje = error instanceof Error ? error.message : 'Error desconocido'
        setTasaCambio({ estado: 'error', mensaje })
      }
    }
    obtenerTasa()
  }, [])

  return tasaCambio
}
