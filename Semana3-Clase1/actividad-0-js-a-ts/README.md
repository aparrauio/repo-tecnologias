# Actividad 0 · Calentamiento — De JavaScript a TypeScript

## Objetivo
Ver un ejemplo completo primero en JavaScript y luego migrarlo a
TypeScript paso a paso, entendiendo qué cambia, qué se agrega y por qué
esos cambios hacen el código más seguro y fácil de mantener.

## El ejemplo: Gestor de Reseñas de Películas 🎬

Ambas versiones (JS y TS) implementan la misma mini-aplicación de
consola: un catálogo de películas con funciones para agregar reseñas,
calcular el promedio de calificación y filtrar películas por género.

## El reto

### Parte 1 — Explorar la versión JavaScript
1. Abran la carpeta `js/` y revisen `src/index.js`.
2. Ejecuten el código (ver instrucciones abajo) y observen su
   comportamiento. Identifiquen: ¿qué forma tiene una película? ¿qué
   forma tiene una reseña? Nada en el código los obliga a saberlo con
   certeza — ¡ese es el problema que resolveremos!
3. Intenten romper el programa a propósito: agreguen una reseña con una
   calificación como texto (`"cinco"` en vez de `5`) o agreguen una
   película sin el campo `genero`. Observen que JavaScript no los
   detiene.

### Parte 2 — Migrar a TypeScript
1. Abran la carpeta `ts/` y revisen `src/index.ts` — notarán varios
   `TODO` donde falta anotar tipos.
2. Completen los `TODO`:
   - Definan una interfaz `Pelicula` con los campos correctos y sus tipos.
   - Definan una interfaz `Resena` con los campos correctos y sus tipos.
   - Anoten los parámetros y el tipo de retorno de cada función
     (`agregarResena`, `calcularPromedio`, `filtrarPorGenero`).
3. Ejecuten el mismo "intento de ruptura" de la Parte 1 (calificación
   como texto, película sin género) y observen cómo TypeScript ahora
   marca el error **antes** de ejecutar el programa.

## Pista
- Una interfaz en TypeScript se declara así:
  ```ts
  interface Pelicula {
    id: number;
    titulo: string;
    genero: string;
    resenas: Resena[]; // arreglo de objetos Resena
  }
  ```
- Para anotar una función: el tipo de cada parámetro va después de `:`,
  y el tipo de retorno va después de los paréntesis, también con `:`.
  ```ts
  function calcularPromedio(pelicula: Pelicula): number { ... }
  ```
- Si una función no retorna nada (solo modifica datos), su tipo de
  retorno es `void`.

## Diferencias clave entre la versión JS y TS

| Aspecto | JavaScript | TypeScript |
|---|---|---|
| Forma de los datos | Implícita, solo se "sabe" leyendo el código | Explícita, declarada con `interface` |
| Parámetros de función | Sin anotación, cualquier tipo es aceptado | Anotados con `: tipo`, el compilador valida |
| Errores de tipo | Se descubren en tiempo de ejecución (o nunca) | Se descubren en tiempo de compilación |
| Autocompletado del editor | Limitado | Preciso, basado en las interfaces |
| Configuración necesaria | Ninguna | Requiere `tsconfig.json` y un paso de compilación (`tsc`) |
| Extensión de archivo | `.js` | `.ts` |

## Instrucciones de ejecución

### Versión JavaScript
```bash
cd js
node src/index.js
```
(No requiere instalación: Node.js ejecuta `.js` de forma nativa.)

### Versión TypeScript
```bash
cd ts
npm install
npm run build     # compila TypeScript a JavaScript (carpeta dist/)
npm start          # ejecuta el resultado compilado
```
También pueden usar `npm run dev` para que TypeScript recompile
automáticamente cada vez que guarden un cambio.

Si dejan algún `TODO` sin completar, `npm run build` mostrará errores de
compilación señalando exactamente qué falta anotar — esa es una de las
grandes ventajas de TypeScript.

## Prompt sugerido (si usan un asistente de IA para practicar)

> "Tengo esta función en JavaScript sin tipos. Ayúdame a entender qué
> interfaces de TypeScript necesitaría definir para sus parámetros y su
> valor de retorno, pero no me des las interfaces completas de una vez:
> guíame con preguntas para que yo las escriba."
