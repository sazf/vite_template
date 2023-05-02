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

### Configurar el prettier con el standard

- npm install prettier-config-standard -D

### Para aplicar standard a SRC

- npx standard --fix ./src
