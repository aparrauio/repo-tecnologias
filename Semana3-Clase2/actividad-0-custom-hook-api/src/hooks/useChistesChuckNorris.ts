import { useState, useEffect, useCallback } from 'react'
import { EstadoPeticion } from '../tipos'

const URL_API = 'https://api.chucknorris.io/jokes/random'

// TODO: Implementa el hook useChistesChuckNorris().
// Debe:
//  1. Mantener un estado tipado como EstadoPeticion<string>, inicializado en { estado: 'cargando' }.
//  2. En un useEffect (con [] de dependencias), hacer fetch a URL_API,
//     parsear el JSON y actualizar el estado a { estado: 'listo', datos: json.value }.
//     Si algo falla (catch), actualizar a { estado: 'error', mensaje: '...' }.
//  3. Exponer una función pedirOtroChiste() que repita el fetch (puedes
//     extraer la lógica del fetch a una función interna reutilizable).
//  4. Retornar { resultado, pedirOtroChiste } (o el nombre que prefieras).

export function useChistesChuckNorris() {
  const [resultado, setResultado] = useState<EstadoPeticion<string>>({ estado:"cargando"})

  const pedirChiste = useCallback( async () => {
    setResultado( { estado: "cargando"})
    try {
      const respuesta = await fetch(URL_API)
      if (!respuesta.ok) {
        throw new Error("Error HTTP: " + respuesta.status)
      }
      const datos = await respuesta.json()
      setResultado({ estado: "listo", datos: datos.value } )
    } catch (error) {
      const mensaje = error instanceof Error ? error.message : "Erorr desconocido"
      setResultado({estado: "error", mensaje})
    }
  }, [])

  useEffect(() => {
    pedirChiste()
  }, [pedirChiste])

  return { resultado, pedirOtroChiste: pedirChiste}
}
