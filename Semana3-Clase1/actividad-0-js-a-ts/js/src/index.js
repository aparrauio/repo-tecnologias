// ── Gestor de Reseñas de Películas (versión JavaScript) ──────────────
// En JavaScript, la "forma" de una película o una reseña vive solo en
// la cabeza de quien escribió el código (o en comentarios, como este).
// Nada impide crear un objeto con campos incorrectos o faltantes.

// Catálogo inicial de películas.
// Cada película tiene: id, titulo, genero, y un arreglo de reseñas.
const peliculas = [
  { id: 1, titulo: 'Viaje Estelar', genero: 'Ciencia ficción', resenas: [] },
  { id: 2, titulo: 'Risas en la Oficina', genero: 'Comedia', resenas: [] },
  { id: 3, titulo: 'El Último Faro', genero: 'Drama', resenas: [] },
]

// Agrega una reseña a una película. Cada reseña tiene: autor y
// calificacion (se espera un número entre 1 y 5).
function agregarResena(pelicula, autor, calificacion) {
  pelicula.resenas.push({ autor, calificacion })
}

// Calcula el promedio de calificaciones de una película.
// Si no tiene reseñas, retorna 0.
function calcularPromedio(pelicula) {
  if (pelicula.resenas.length === 0) return 0
  const suma = pelicula.resenas.reduce((total, resena) => total + resena.calificacion, 0)
  return suma / pelicula.resenas.length
}

// Filtra el catálogo de películas por género.
function filtrarPorGenero(listaPeliculas, genero) {
  return listaPeliculas.filter((pelicula) => pelicula.genero === genero)
}

// ── Uso del programa ──────────────────────────────────────────────
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

// ── Intenten "romper" el programa (sin que JavaScript se queje) ──
// agregarResena(peliculas[0], 'Pedro', 'cinco')   // calificación como texto
// peliculas.push({ id: 4, titulo: 'Sin Género' })  // falta el campo genero y resenas
