# Actividad 1 · Reto principal — Contador avanzado: estado compartido y persistencia

## Objetivo
Extender el proyecto del Contador de la clase anterior aplicando dos
conceptos nuevos: **lifting state up** (elevar el estado al componente
padre para compartirlo entre hermanos) y **useEffect** (sincronizar un
componente con un sistema externo, en este caso `localStorage`).

## El reto
1. Modifiquen la app para que el estado de **cada** `Contador` viva en
   `App` (el padre), y se le pase a cada `Contador` mediante props
   (`valor` y funciones `onIncrementar` / `onDecrementar`).
2. Agreguen en `App` un total que sume los tres contadores y lo muestren
   en pantalla ("Suma total: X").
3. Usen `useEffect` en `App` para guardar el arreglo de valores en
   `localStorage` cada vez que cambie, y para leerlo al cargar la
   página (si ya existe algo guardado, la app debe iniciar con esos
   valores en lugar de ceros).

## Pista
- Con lifting state up, `Contador` deja de tener su propio `useState`:
  ahora es un componente "controlado" que solo recibe `valor` y dos
  funciones por props, y las ejecuta al hacer clic en los botones.
- `useEffect(() => { ... }, [dependencias])` se ejecuta cada vez que
  cambia algo en el arreglo de dependencias. Para guardar en
  `localStorage` en cada cambio, usen el arreglo de valores como
  dependencia. Para leer al cargar, usen otro `useEffect` con arreglo
  de dependencias vacío `[]`.
- `localStorage.setItem('clave', JSON.stringify(datos))` guarda datos;
  `JSON.parse(localStorage.getItem('clave'))` los recupera.

## Instrucciones de ejecución

1. Abran una terminal dentro de esta carpeta (`actividad-1-lista-tareas/`).
2. Instalen las dependencias:
   ```bash
   npm install
   ```
3. Levanten el servidor de desarrollo:
   ```bash
   npm run dev
   ```
4. Abran la URL indicada por Vite (usualmente `http://localhost:5173`).
5. Completen los `TODO` en `src/App.jsx` y `src/components/Contador.jsx`.
6. Prueben: cambien los valores, recarguen la página (F5) y verifiquen
   que los contadores mantienen los valores guardados.
7. Consulten `solucion/` si necesitan comparar su resultado.

## Prompt sugerido (si usan un asistente de IA para practicar)

> "Tengo un componente Contador con useState propio. Quiero mover ese
> estado al componente padre (lifting state up) y además persistirlo en
> localStorage con useEffect. Guíame con preguntas y pistas, no me des
> el código completo de una vez."
