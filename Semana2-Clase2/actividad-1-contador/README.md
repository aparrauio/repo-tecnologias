# Actividad 1 — Reto: Contador aislado 🔢

## Objetivo
Reforzar la construcción de interfaces declarativas en React y el manejo de
estado local con `useState`.

## El reto

Construye:

1. Un componente `Contador` que muestre un número inicial en `0`, con botones
   `"+1"` y `"-1"`.
2. Un componente padre `App` que renderice **tres instancias independientes**
   de `Contador`, demostrando que el estado de cada una es aislado.

## Pista

Cada instancia de un componente con `useState` mantiene su propio estado
interno, sin importar que compartan el mismo código.

## Instrucciones de ejecución

1. Instalen dependencias:
   ```bash
   npm install
   ```
2. Ejecuten el proyecto:
   ```bash
   npm run dev
   ```
   (si usan Vite) — el archivo `package.json` ya está configurado.
3. Abran el navegador en la URL que indique la terminal (usualmente
   `http://localhost:5173`).
4. Verifiquen que cada uno de los tres contadores cambia de forma
   independiente.
5. La solución completa y comentada está en [`solucion/src/Contador.jsx`](./solucion/src/Contador.jsx)
   y [`solucion/src/App.jsx`](./solucion/src/App.jsx).

## Prompt sugerido (si usas un asistente de IA para practicar)

> "Ayúdame a crear un componente React llamado Contador que use useState para
> guardar un número inicial en 0, con dos botones que lo incrementen y
> decrementen en 1. Luego crea un componente App que renderice tres
> instancias de Contador y explícame por qué cada una mantiene su propio
> estado aunque compartan el mismo código."

## Discusión grupal

- ¿Qué pasaría si el estado del contador viviera en `App` en lugar de en
  `Contador`? (Tema de la próxima clase: *lifting state up*).
