import { useState, useEffect } from 'react'
import Contador from './components/Contador.jsx'

const NOMBRE = 'contador-avanzado'

// TODO 1: Crea el estado "valores", un arreglo de 3 números iniciado en [0, 0, 0].
// TODO 2: Crea una función incrementar(indice) que sume 1 al valor en esa posición.
// TODO 3: Crea una función decrementar(indice) que reste 1 al valor en esa posición.
// TODO 4: Usa useEffect para guardar "valores" en localStorage cada vez que cambie.
// TODO 5: Usa otro useEffect (con [] de dependencias) para leer localStorage al iniciar
//         y, si existe algo guardado, inicializar "valores" con eso.
// Pista: al actualizar un elemento de un arreglo en el estado, no lo mutes directamente;
// crea una copia con [...valores] y modifica la copia.

export default function App() {
  //iniciar con los valores de local storage
  //sino existe, inicializa todo en 0
  const [valores, setValores] = useState(() => {
    const guardado = localStorage.getItem(NOMBRE)
    return guardado ? JSON.parse(guardado) : [0, 0, 0]
  })

  //funcion para incrementar
  //crear una copia del arreglo y retornar luego de incrementar
  function incrementar(indice) {
    setValores((valoresActuales) => {
      const copia = [...valoresActuales]
      copia[indice] = copia[indice] + 1
      return copia
    })
  }

  //funcion para decrementar
  //crear una copia del arreglo y retornar luego de decrementar
  function decrementar(indice) {
    setValores((valoresActuales) => {
      const copia = [...valoresActuales]
      copia[indice] = copia[indice] - 1
      return copia
    })
  }

  //llamar a useEffect para que actualice los valores en local storage
  useEffect(() => {
    localStorage.setItem(NOMBRE, JSON.stringify(valores))
  }, [valores])

  //calcular el total
  const sumaTotal = valores.reduce((acumulado, valor) => acumulado + valor, 0)

  return (
    <div className="app">
      <h1>🔢 Contador avanzado</h1>
      <p className="suma-total">Suma total: {sumaTotal}</p>
      <div className="contadores">
        {valores.map((valor, indice) => (
          <Contador
            key={indice}
            valor={valor}
            onIncrementar={() => incrementar(indice)}
            onDecrementar={() => decrementar(indice)}
          />
        ))}
      </div>
    </div>
  )
}
