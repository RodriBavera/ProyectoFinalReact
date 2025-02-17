# NetoTech Store

NetoTech Store es una tienda en línea de productos tecnológicos desarrollada con React y Vite. Permite a los usuarios navegar por diferentes categorías de productos, agregar artículos al carrito y finalizar su compra.

## 🚀 Tecnologías Utilizadas

- **React**: Biblioteca para la creación de interfaces de usuario.
- **Vite**: Entorno de desarrollo rápido para aplicaciones modernas.
- **Firebase**: Base de datos y autenticación en tiempo real.
- **React Router**: Manejo de rutas en la aplicación.
- **CSS Puro**: Para estilizar la aplicación con un diseño moderno y oscuro.

## 📦 Instalación y Uso

### 1️⃣ Clonar el Repositorio
```sh
git clone https://https://github.com/RodriBavera/ProyectoFinalReact
cd ProyectoFinalReact
```

### 2️⃣ Instalar Dependencias
```sh
npm install
```

### 3️⃣ Ejecutar el Proyecto
```sh
npm run dev
```

La aplicación estará disponible en `http://localhost:5173/`.

## 📂 Estructura del Proyecto
```
📁 src
 ┣ 📂 components    # Componentes reutilizables
 ┣ 📂 pages         # Páginas principales
 ┣ 📂 services      # Configuración de Firebase
 ┣ 📂 context       # Contexto global (Carrito de compras, usuario, etc.)
 ┣ 📂 styles        # Archivos CSS
 ┣ 📜 main.jsx      # Punto de entrada de la aplicación
 ┣ 📜 App.jsx       # Componente principal
```

## 🛒 Funcionalidades
✅ Listado de productos por categoría  
✅ Agregar y eliminar productos del carrito  
✅ Manejo de stock con Firebase  
✅ Finalización de compra y generación de orden  

## 🔧 Configuración de Firebase
Para conectar la aplicación con Firebase, crea un archivo `.env` en la raíz del proyecto con las siguientes variables:
```sh
VITE_API_KEY=tu_api_key
VITE_AUTH_DOMAIN=tu_auth_domain
VITE_PROJECT_ID=tu_project_id
VITE_STORAGE_BUCKET=tu_storage_bucket
VITE_MESSAGING_SENDER_ID=tu_messaging_sender_id
VITE_APP_ID=tu_app_id
```

## 📜 Licencia
Este proyecto está bajo la licencia MIT.

---
¡Gracias por visitar NetoTech Store! 🚀

