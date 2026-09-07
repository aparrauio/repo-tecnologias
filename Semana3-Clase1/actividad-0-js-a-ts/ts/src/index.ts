// ── Gestor de Reseñas de Películas (versión TypeScript) ──────────────
// Esta es la migración del mismo programa de la carpeta js/.
// Completa los TODO para darle tipos explícitos a los datos y funciones.

// TODO 1: Define la interfaz "Resena" con los campos:
//   - autor: string
//   - calificacion: number
interface Resena {
  autor: string
  calificacion: number
}

// TODO 2: Define la interfaz "Pelicula" con los campos:
//   - id: number
//   - titulo: string
//   - genero: string
//   - resenas: Resena[]   (arreglo de objetos Resena)
interface Pelicula {
  id: number
  titulo: string
  genero: string
  resenas: Resena[]
}

// Catálogo inicial de películas.
// TODO 3: Anota el tipo del arreglo "peliculas" como Pelicula[]
const peliculas: Pelicula[] = [
  { id: 1, titulo: 'Viaje Estelar', genero: 'Ciencia ficción', resenas: [] },
  { id: 2, titulo: 'Risas en la Oficina', genero: 'Comedia', resenas: [] },
  { id: 3, titulo: 'El Último Faro', genero: 'Drama', resenas: [] },
]

// TODO 4: Anota los parámetros y el tipo de retorno de esta función.
// pelicula debe ser de tipo Pelicula, autor: string, calificacion: number.
// La función no retorna nada útil, así que su tipo de retorno es void.
function agregarResena(pelicula: Pelicula, autor: string, calificacion: number): void {
  pelicula.resenas.push({ autor, calificacion })
}

// TODO 5: Anota el parámetro (Pelicula) y el tipo de retorno (number).
function calcularPromedio(pelicula: Pelicula): number {
  if (pelicula.resenas.length === 0) return 0
  const suma = pelicula.resenas.reduce((total, resena) => total + resena.calificacion, 0)
  return suma / pelicula.resenas.length
}

// TODO 6: Anota los parámetros (Pelicula[], string) y el retorno (Pelicula[]).
function filtrarPorGenero(listaPeliculas: Pelicula[], genero: string): Pelicula[] {
  return listaPeliculas.filter((pelicula) => pelicula.genero === genero)
}

// ── Uso del programa (no necesita cambios) ──────────────────────────
agregarResena(peliculas[0], 'Ana', 5)
agregarResena(peliculas[0], 'Luis', 4)
agregarResena(peliculas[1], 'Marta', 3)

peliculas.forEach((pelicula) => {
  const promedio = calcularPromedio(pelicula)
  console.log(`${pelicula.titulo} (${pelicula.genero}) — Promedio: ${promedio.toFixed(1)}`)
})

console.log('\nPelículas de Comedia:')
const comedias = filtrarPorGenero(peliculas, 'Comedia')
comedias.forEach((p) => console.log(`- ${p.titulo}`))

// ── Ahora intenten "romper" el programa igual que en la versión JS ──
// agregarResena(peliculas[0], 'Pedro', 'cinco')   // ¿qué dice TypeScript ahora?
// peliculas.push({ id: 4, titulo: 'Sin Género' })  // ¿qué error marca el compilador?
