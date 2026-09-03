# Semana 3 · Clase 2 — TypeScript avanzado y buenas prácticas

## Contenido de la sesión
Tipos utilitarios, discriminated unions, tipado de hooks personalizados
y de APIs externas, construidos sobre el Sistema de Inventario de la
Clase 1.

## Objetivos de aprendizaje
- Modelar los estados de una petición HTTP (cargando / error / listo)
  con un discriminated union genérico.
- Construir un custom hook tipado que obtiene datos de una API externa.
- Usar los datos de una API externa para enriquecer una interfaz ya
  existente, sin romper el tipado del proyecto.
- Practicar tipos utilitarios de TypeScript (Readonly, Pick) de forma
  opcional sobre una base de código real.

## Estructura de esta carpeta

```
Semana3-Clase2/
├── actividad-0-custom-hook-api/         ← Actividad previa: calentamiento
│   ├── README.md                          (enunciado, pista, instrucciones, prompt)
│   ├── package.json, tsconfig.json, vite.config.ts, index.html
│   ├── src/
│   │   ├── main.tsx
│   │   ├── App.tsx                        (plantilla con TODOs)
│   │   ├── tipos.ts                       (plantilla con TODO: EstadoPeticion<T>)
│   │   ├── styles.css
│   │   └── hooks/
│   │       └── useChistesChuckNorris.ts   (plantilla con TODOs)
│
│
└── actividad-1-inventario-con-api/      ← Reto principal
    ├── README.md                          (enunciado, pista, instrucciones, prompt)
    ├── package.json, tsconfig.json, vite.config.ts, index.html
    ├── src/
    │   ├── main.tsx
    │   ├── App.tsx                        (plantilla con TODOs)
    │   ├── tipos.ts                        (heredado de Clase 1 + EstadoPeticion<T>, YA COMPLETO)
    │   ├── inventario.ts                   (heredado de Clase 1, YA COMPLETO)
    │   ├── styles.css
    │   ├── hooks/
    │   │   └── useTasaCambio.ts            (plantilla con TODOs)
    │   └── components/
    │       ├── ResumenInventario.tsx       (plantilla con TODOs)
    │       └── TablaInventario.tsx         (plantilla con TODOs)
    └── solucion/                          ← código completo y comentado
        ├── package.json, tsconfig.json, vite.config.ts, index.html
        └── src/ (misma estructura, TODOs resueltos)
```

## Cómo usar esta carpeta en clase

### Paso 1 — Actividad 0: Custom Hook + API externa (≈20-25 minutos)
Calentamiento independiente: los estudiantes construyen un hook
`useChistesChuckNorris` que consume una API pública, modelando sus
estados con un discriminated union genérico `EstadoPeticion<T>`. Este
mismo patrón se reutiliza después en la Actividad 1. Instrucciones
completas en `actividad-0-custom-hook-api/README.md`.

### Paso 2 — Actividad 1: Inventario enriquecido con API externa (≈35-40 minutos)
Los estudiantes retoman el Sistema de Inventario de la Semana 3 · Clase 1
(ya incluido y funcionando en `src/tipos.ts` y `src/inventario.ts`) y lo
extienden con:
- Un custom hook `useTasaCambio` que trae una tasa de cambio real desde
  la API pública [Frankfurter](https://api.frankfurter.app/latest?from=USD&to=EUR).
- Dos componentes de presentación (`ResumenInventario` y
  `TablaInventario`) que usan esa tasa para mostrar los precios y el
  valor total del inventario también en euros.

Instrucciones completas en `actividad-1-inventario-con-api/README.md`.

### Patrón general
1. El estudiante abre la carpeta de la actividad correspondiente
   (no la de `solucion/`).
2. Ejecuta `npm install` y luego `npm run dev`.
3. Completa los `TODO` marcados en los archivos `.ts` / `.tsx`.
4. Usa `npm run build` para revisar errores de tipos sin necesidad de
   tener el navegador abierto.
5. Compara su resultado contra `solucion/` cuando termine o si se atora.

## Comandos generales

```bash
# Dentro de cualquier carpeta de actividad o su solución:
npm install       # instala React, Vite y TypeScript
npm run dev       # levanta el servidor de desarrollo (Vite)
npm run build     # revisa tipos (tsc) y genera el build de producción
npm run preview   # sirve el build de producción localmente
```

Requisitos previos: tener Node.js 18+ instalado y conexión a internet
(ambas actividades consumen APIs públicas reales en tiempo de ejecución).

## APIs externas usadas

| Actividad | API | Requiere key | Documentación |
|---|---|---|---|
| 0 · Calentamiento | Chuck Norris API | No | https://api.chucknorris.io |
| 1 · Reto principal | Frankfurter (tasas de cambio) | No | https://www.frankfurter.app/docs |

Ambas son gratuitas, no requieren registro ni API key, y tienen CORS
habilitado para poder consumirlas directamente desde el navegador.
