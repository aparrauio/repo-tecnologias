# Semana 3 · Clase 1 — Introducción a TypeScript

## Contenido de la sesión
Fundamentos de TypeScript: interfaces, tipos primitivos, tipos union
de literales y funciones tipadas, partiendo de una base de JavaScript.

## Objetivos de aprendizaje
- Comprender qué problemas resuelve TypeScript sobre JavaScript.
- Migrar un programa completo de JavaScript a TypeScript paso a paso.
- Aplicar interfaces, anotaciones de tipo y tipos union en un ejercicio
  nuevo.

## Estructura de esta carpeta

```
Semana3-Clase1/
├── actividad-0-js-a-ts/            ← Actividad previa: de JS a TS
│   ├── README.md                     (enunciado, pista, diferencias, instrucciones)
│   ├── js/                           ← Versión JavaScript (introducción)
│   │   ├── README.md
│   │   └── src/index.js              (código completo y funcional)
│   └── ts/                           ← Versión TypeScript (migración)
│       ├── package.json
│       ├── tsconfig.json
│       └── src/index.ts              (plantilla con TODOs)
│
└── actividad-1-inventario-tienda/  ← Reto principal: Sistema de Inventario
    ├── README.md                     (enunciado, pista, instrucciones, prompt)
    ├── package.json
    ├── tsconfig.json
    ├── src/index.ts                  (plantilla con TODOs)
    └── solucion/
        ├── package.json
        ├── tsconfig.json
        └── src/index.ts              (código completo y comentado)
```

## Cómo usar esta carpeta en clase

### Paso 1 — Actividad 0: De JavaScript a TypeScript (≈25 minutos)
Los estudiantes primero ejecutan y exploran la versión JavaScript del
Gestor de Reseñas de Películas en `actividad-0-js-a-ts/js/`, intentando
"romperla" a propósito. Luego migran el mismo programa a TypeScript en
`actividad-0-js-a-ts/ts/`, completando los TODO de tipado y comprobando
cómo TypeScript detecta los mismos errores en tiempo de compilación.
Instrucciones y tabla comparativa completas en su `README.md`.

### Paso 2 — Actividad 1: Sistema de Inventario (≈35 minutos)
Los estudiantes aplican lo aprendido en un ejercicio nuevo e
independiente: un sistema de inventario con interfaces, funciones
tipadas y un tipo union de valores literales para restringir
categorías válidas. Instrucciones completas en `actividad-1-inventario-tienda/README.md`.

### Patrón general
1. El estudiante abre la carpeta de la actividad correspondiente
   (no la de `solucion/`).
2. Para la versión JS: ejecuta directamente con `node src/index.js`.
3. Para las versiones TS: ejecuta `npm install`, luego `npm run build`
   y `npm start` (o `npm run dev` para recompilar automáticamente).
4. Completa los `TODO` marcados en los archivos `.ts`.
5. Compara su resultado contra `solucion/` cuando termine o si se atora.

## Comandos generales

```bash
# Versión JavaScript (sin instalación):
node src/index.js

# Cualquier carpeta TypeScript (actividad o su solución):
npm install       # instala TypeScript
npm run build     # compila .ts a .js (carpeta dist/)
npm start         # ejecuta el resultado compilado
npm run dev       # recompila automáticamente al guardar cambios
```

Requisitos previos: tener Node.js 18+ instalado.
