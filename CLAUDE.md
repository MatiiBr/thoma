# Thoma v2 — Convenciones

## Stack
- Next.js 15 (App Router) + TypeScript + Tailwind CSS 4
- Three.js via React Three Fiber + Drei
- GSAP + @gsap/react para animaciones
- Lenis para smooth scroll

## Estructura
- src/components/ui/ — componentes reutilizables (botones, inputs)
- src/components/layout/ — navbar, footer
- src/components/three/ — escenas y objetos 3D
- src/sections/ — secciones de la landing (Hero, Services, etc.)
- src/lib/ — utilidades, constantes
- src/hooks/ — custom hooks
- public/models/ — archivos 3D (.glb/.gltf)

## Convenciones de código
- Sin punto y coma (Prettier)
- Single quotes
- Componentes: PascalCase (archivo y export)
- Hooks: camelCase con prefijo "use"
- Tailwind: utility-first, evitar CSS custom salvo animaciones complejas
- Three.js: componentes 3D siempre dentro de <Canvas>, lazy load del canvas
