# Portafolio de Tareas con MongoDB, Express y Frontend HTML

## Estructura

```txt
portafolio-tareas/
├── Backend/
│   ├── server.js
│   ├── seed.js
│   ├── package.json
│   ├── .env.example
│   └── tareas.mongodb.json
└── Frontend/
    └── index.html
```

## 1. Configurar MongoDB Atlas

1. Crear una base de datos en MongoDB Atlas.
2. Crear una colección llamada `tareas`.
3. Insertar los datos del archivo `Backend/tareas.mongodb.json`.

También puedes usar el archivo `seed.js`.

## 2. Ejecutar Backend localmente

```bash
cd Backend
npm install
```

Crea un archivo `.env` tomando como base `.env.example`:

```env
MONGODB_URI=mongodb+srv://USUARIO:PASSWORD@cluster.mongodb.net/portafolio_tareas
PORT=5000
FRONTEND_URL=http://localhost:3000
```

Insertar datos:

```bash
npm run seed
```

Iniciar API:

```bash
npm start
```

Probar endpoint:

```txt
http://localhost:5000/api/tareas
```

## 3. Configurar Frontend

Abrir `Frontend/index.html` y cambiar tus datos escolares:

```html
Nombre
Matrícula
Grupo
```

También cambiar la URL de la API cuando el backend esté publicado:

```js
const API_URL = "https://tu-backend.onrender.com/api/tareas";
```

## 4. Publicar Backend en Render

1. Subir el proyecto a GitHub.
2. Crear un nuevo Web Service en Render.
3. Seleccionar la carpeta `Backend`.
4. Configurar:
   - Build Command: `npm install`
   - Start Command: `npm start`
5. Agregar variables de entorno:
   - `MONGODB_URI`
   - `FRONTEND_URL`

## 5. Publicar Frontend en Vercel

1. Subir el proyecto a GitHub.
2. Crear nuevo proyecto en Vercel.
3. Seleccionar la carpeta `Frontend` si se configura como proyecto independiente.
4. Asegurarse de que `API_URL` apunte al backend de Render.
