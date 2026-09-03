# Actividad 0 · Calentamiento — Custom Hook + API externa

## Objetivo
Repasar, con un ejemplo pequeño y divertido, el patrón para construir un
**custom hook** que obtiene datos de una **API externa**, modelando sus
tres posibles estados (cargando, error, listo) con un **discriminated
union** de TypeScript. Este mismo patrón se reutilizará en la Actividad 1
para enriquecer el Sistema de Inventario.

## El reto

Construyan un hook `useChistesChuckNorris` que consuma la API pública
[api.chucknorris.io](https://api.chucknorris.io/jokes/random) (no
requiere API key) y una pantalla que lo consuma.

1. En `src/tipos.ts`, definan el tipo genérico `EstadoPeticion<T>` como
   un **discriminated union** de 3 formas posibles:
   - `{ estado: 'cargando' }`
   - `{ estado: 'error'; mensaje: string }`
   - `{ estado: 'listo'; datos: T }`

2. En `src/hooks/useChistesChuckNorris.ts`, implementen el hook:
   - Debe mantener un estado de tipo `EstadoPeticion<string>` (el chiste
     es un `string`).
   - Al montarse el componente, debe hacer `fetch` a
     `https://api.chucknorris.io/jokes/random` y actualizar el estado a
     `'listo'` con el chiste (`data.value`), o a `'error'` si algo falla.
   - Debe exponer también una función `pedirOtroChiste()` para volver a
     pedir un chiste sin necesidad de recargar la página.

3. En `src/App.tsx`, consuman el hook y muestren un mensaje distinto
   según el `estado` actual (usen un `switch` sobre `estado.estado` —
   TypeScript "reduce" el tipo automáticamente en cada caso). Agreguen
   un botón "Otro chiste 🥋" conectado a `pedirOtroChiste()`.

## Pista
- Un discriminated union funciona porque **todas** sus formas comparten
  un campo con el mismo nombre (`estado`) pero **distintos valores
  literales** (`'cargando'`, `'error'`, `'listo'`). TypeScript usa ese
  campo para saber, dentro de un `switch` o `if`, qué otras propiedades
  están disponibles en cada rama:
  ```ts
  if (resultado.estado === 'listo') {
    console.log(resultado.datos) // TypeScript SABE que "datos" existe aquí
  }
  ```
- El genérico `<T>` en `EstadoPeticion<T>` permite reutilizar el mismo
  tipo para cualquier dato: un `string` (este chiste), o más adelante un
  `number` (una tasa de cambio).
- Usen `useEffect(() => { ... }, [])` para que el fetch inicial ocurra
  una sola vez al montar el componente.

## Instrucciones de ejecución

```bash
npm install
npm run dev
```

Abran la URL indicada por Vite (usualmente `http://localhost:5173`).
Completen los `TODO` en `src/tipos.ts`, `src/hooks/useChistesChuckNorris.ts`
y `src/App.tsx`. Si `npm run build` marca errores, léanlos: casi siempre
indican exactamente qué campo del discriminated union falta tratar.
Consulten `solucion/` si necesitan comparar.

## Prompt sugerido (si usan un asistente de IA para practicar)

> "Quiero crear un custom hook de React con TypeScript que llame a una
> API externa y modele sus 3 estados (cargando, error, listo) como un
> discriminated union genérico. Guíame con preguntas sobre cómo
> estructurar el tipo y el hook, sin escribir el código completo de
> una vez."
