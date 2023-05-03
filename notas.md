## Notas

### Para crear el proyecto con VITE

- npm create vite@latest
- SWC - Speedy Web Compiler

### Para ejecutar la app

- npm run dev

### Configurar el linter

- npm install standard -D

- package.json
  "eslintConfig": {
  "extends": "./node_modules/standard/eslintrc.json"
  }

- agregar package-lock.json al .gitignore

### Para aplicar standard a SRC

- npx standard --fix ./src

### Comando docker

- docker run --rm -it -p 5173:5173 -v C:\\dev\\React\\vite_plantilla\\vite_template:/usr/src/app node:18.16-slim bash

### para lanzar el contenedor

- docker-compose up
