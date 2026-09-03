# Actividad 1 · Reto principal — Sistema de Inventario con TypeScript

## Objetivo
Aplicar interfaces, tipos primitivos, funciones tipadas y tipos union
de TypeScript en un ejercicio nuevo e independiente del ejemplo de
calentamiento, construyendo un pequeño sistema de inventario para una
tienda.

## El reto

Construyan un sistema de inventario que gestione productos con las
siguientes reglas:

1. Definan una interfaz `Producto` con los campos:
   - `id: number`
   - `nombre: string`
   - `precio: number`
   - `cantidad: number`
   - `categoria: 'electronica' | 'ropa' | 'alimentos'` (tipo union de
     valores literales — solo se permiten esas 3 categorías exactas).

2. Implementen las siguientes funciones, todas correctamente tipadas:
   - `agregarProducto(inventario: Producto[], producto: Producto): Producto[]`
     — retorna un nuevo arreglo con el producto agregado (sin mutar el
     original).
   - `calcularValorTotal(inventario: Producto[]): number` — retorna la
     suma de `precio * cantidad` de todos los productos.
   - `buscarPorCategoria(inventario: Producto[], categoria: Producto['categoria']): Producto[]`
     — retorna los productos que coincidan con la categoría.
   - `productoConStockBajo(inventario: Producto[], minimo: number): Producto[]`
     — retorna los productos cuya `cantidad` sea menor al `minimo`.

3. Prueben que TypeScript rechaza una categoría inválida (por ejemplo,
   `'juguetes'`) al compilar.

## Pista
- Un tipo union de valores literales se define separando las opciones
  con `|`, cada una entre comillas:
  ```ts
  type Categoria = 'electronica' | 'ropa' | 'alimentos'
  ```
  Pueden usarlo directamente dentro de la interfaz `Producto`, o
  declararlo aparte y reutilizarlo (como en la pista de
  `buscarPorCategoria`, con `Producto['categoria']`).
- Para no mutar el arreglo original en `agregarProducto`, usen el
  spread operator: `[...inventario, producto]`.

## Instrucciones de ejecución

```bash
npm install
npm run build     # compila TypeScript a JavaScript (carpeta dist/)
npm start          # ejecuta el resultado compilado
```

Usen `npm run dev` para recompilar automáticamente mientras editan.

Completen los `TODO` en `src/index.ts`. Si algo no compila, lean el
mensaje de error de `tsc`: casi siempre indica exactamente qué tipo
falta o no coincide. Consulten `solucion/` si necesitan comparar.

## Prompt sugerido (si usan un asistente de IA para practicar)

> "Estoy diseñando una interfaz de TypeScript para un Producto con una
> categoría limitada a 3 valores posibles. Explícame las opciones que
> tengo (union de literales vs enum) y sus diferencias, pero no me
> escribas la interfaz completa: guíame con preguntas."
