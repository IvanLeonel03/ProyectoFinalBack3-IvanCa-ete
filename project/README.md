# Adoptme API

Proyecto Backend desarrollado con Node.js y Express como entrega final.  
La aplicación se encuentra dockerizada e incluye documentación con Swagger y tests funcionales.

---

## 🐳 Imagen Docker

La imagen del proyecto se encuentra publicada en DockerHub:

👉 https://hub.docker.com/r/ivanleonel03/adoptme



## ▶️ Ejecutar el proyecto con Docker

### 1. Descargar la imagen

docker pull ivanleonel03/adoptme

### 2. Ejecutar el contenedor

docker run -p 8080:8080 ivanleonel03/adoptme

La aplicación quedará disponible en:

👉 http://localhost:8080


### 📚 Documentación Swagger

La documentación del módulo Users se encuentra disponible en:

👉 http://localhost:8080/api/docs

### 🧪 Tests

El proyecto incluye tests funcionales desarrollados para todos los endpoints del router adoption.router.js, cubriendo casos de éxito y de error.

Ejecutar tests localmente

npm install
npm test

### 🚀 Endpoints principales

Adoptions

GET /api/adoptions

POST /api/adoptions

Users

GET /api/users

POST /api/users

### 🛠 Tecnologías utilizadas

Node.js

Express

Mocha

Chai

Supertest

Swagger

Docker