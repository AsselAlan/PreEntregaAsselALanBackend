# 🛒 PreEntrega Backend - CoderHouse | Alan Assel

Proyecto de backend desarrollado como parte del curso de **Backend en CoderHouse**. Este servidor simula un sistema de gestión para un e-commerce básico, incluyendo autenticación, manejo de sesiones, productos, carritos y roles de usuario.

## 🚀 Tecnologías utilizadas

- **Node.js**
- **Express.js**
- **MongoDB + Mongoose**
- **Handlebars**
- **Passport.js**
- **JWT**
- **Express Session + MongoStore**
- **dotenv**

## 📁 Estructura del proyecto

📦src
┣ 📂config # Configuraciones de base de datos y Passport
┣ 📂controllers # Lógica de negocios
┣ 📂dao # Data Access Objects (MongoDB)
┣ 📂middlewares # Validaciones y autorizaciones
┣ 📂models # Modelos de Mongoose
┣ 📂public # Archivos estáticos
┣ 📂routes # Rutas agrupadas por entidad
┣ 📂services # Lógica reutilizable (como hashing, auth)
┣ 📂utils # Herramientas auxiliares (logs, errores)
┗ 📜app.js # Inicialización del servidor Express

markdown
Copiar
Editar

## 🔐 Autenticación y sesiones

- Registro y login con Passport (estrategia local y JWT).
- Sesiones persistentes con MongoStore.
- Protecciones por rol (`admin`, `user`, etc.).
- Rutas públicas, privadas y protegidas.

## 🧪 Funcionalidades principales

- ✔️ Registro e inicio de sesión
- ✔️ Vista de productos (con Handlebars)
- ✔️ Gestión de productos (CRUD)
- ✔️ Carrito de compras
- ✔️ Control de roles y permisos
- ✔️ Persistencia en MongoDB

## 🧑‍💻 Scripts

```bash
npm install    # Instala dependencias
npm start      # Inicia el servidor en producción
npm run dev    # Inicia el servidor en modo desarrollo con nodemon
🔧 Variables de entorno .env
Crear un archivo .env en la raíz del proyecto con las siguientes claves:

ini
Copiar
Editar
PORT=8080
MONGO_URL=mongodb://localhost:27017/ecommerce
JWT_SECRET=tu_clave_secreta
SESSION_SECRET=otra_clave
📦 Requisitos previos
Node.js v18+

MongoDB local o Atlas

Postman o Insomnia para probar endpoints

📬 Endpoints destacados
Método	Ruta	Descripción
POST	/api/sessions/login	Login de usuario
POST	/api/sessions/register	Registro nuevo usuario
GET	/api/products	Obtener productos disponibles
POST	/api/carts/:cid/products/:pid	Agregar producto al carrito

📸 Vistas (Handlebars)
/products: Muestra el catálogo de productos

/login: Formulario de acceso

/register: Registro de nuevo usuario

/profile: Muestra datos del usuario logueado

🛠 Posibles mejoras futuras
Envío de emails con nodemailer

Implementación de WebSockets para notificaciones en tiempo real

Pagos integrados (MercadoPago / Stripe)

Tests automáticos con Jest

👨‍💻 Autor
Alan Assel
GitHub | LinkedIn
