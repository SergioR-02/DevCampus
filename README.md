# 🎓 DevCampus - Plataforma de Cursos Online

Una plataforma moderna de cursos online desarrollada con **React** y **Strapi CMS**, que permite explorar, buscar y filtrar cursos de tecnología de manera intuitiva.

## ✨ Características principales

- 🔍 **Búsqueda avanzada**: Busca cursos por título
- 🏷️ **Filtros dinámicos**: Filtra por nivel de dificultad 
- 📱 **Diseño responsivo**: Interfaz adaptada para móviles y escritorio
- 🌙 **Tema oscuro**: Diseño moderno con interfaz dark mode
- 📚 **Gestión de contenido**: Panel administrativo completo con Strapi
- 🎨 **Rich Text**: Soporte para contenido enriquecido en descripciones

## 🛠️ Tecnologías utilizadas

### Frontend
- **React 19** - Librería principal para la interfaz
- **TypeScript** - Tipado estático
- **Vite** - Build tool y dev server
- **React Router** - Navegación entre páginas
- **Tailwind CSS** - Framework de estilos
- **Lucide React** - Iconografía
- **@strapi/blocks-react-renderer** - Renderizado de contenido enriquecido

### Backend
- **Strapi 5.19** - Headless CMS
- **Better SQLite3** - Base de datos
- **Node.js** - Runtime de JavaScript

## 🚀 Instalación y configuración

### Prerrequisitos
- Node.js (versión 20)
- npm o yarn

### 1. Clonar el repositorio
```bash
git clone https://github.com/SergioR-02/DevCampus.git
cd DevCampus
```

### 2. Backend (Strapi)
```bash
cd backend
npm install
cp .env.example .env
npm run strapi -- import -f export_20250727195433.tar.gz --force
npm run develop
```

El panel de administración estará disponible en: http://localhost:1337/admin

### 3. Frontend
```bash
cd ../frontend
npm install
npm run dev
```

La aplicación estará disponible en: http://localhost:5173

## 📊 Datos de ejemplo

El proyecto incluye un archivo de exportación (`export_20250727174333.tar.gz`) con datos de ejemplo 

## 🏗️ Estructura del proyecto

```
DevCampus/
├── backend/                 # API Strapi
│   ├── src/
│   │   ├── api/               # Endpoints personalizados
│   │   │   ├── course/        # API de cursos
│   │   │   └── lesson/        # API de lecciones
│   │   └── index.ts           # Punto de entrada
│   ├── config/                # Configuraciones
│   └── database/              # Migraciones
│
└── frontend/                  # Aplicación React
    ├── src/
    │   ├── features/           # Funcionalidades por dominio
    │   │   └── courses/        # Módulo de cursos
    │   │       ├── api/        # Servicios y transformadores
    │   │       ├── components/ # Componentes UI
    │   │       ├── hooks/      # Custom hooks
    │   │       └── types/      # Tipos TypeScript
    │   ├── pages/              # Páginas principales
    │   ├── router/             # Configuración de rutas
    │   └── shared/             # Componentes compartidos
    └── public/                 # Archivos estáticos
```

## 📡 API Endpoints

### Cursos
- `GET /api/courses` - Listar todos los cursos
- `GET /api/courses/:id` - Obtener curso por ID
- `GET /api/courses?filters[slug][$eq]=:slug` - Obtener curso por slug

### Parámetros de consulta soportados
- `filters` - Filtrado dinámico
- `sort` - Ordenamiento
- `populate` - Incluir relaciones
- `pagination` - Paginación



## 📚 Lo que aprendí durante esta prueba

### 1. ¿Qué aprendiste de nuevo durante esta prueba?

Durante esta prueba aprendí que es posible hacer búsquedas y filtros directamente desde una sola API en Strapi sin necesidad de múltiples endpoints o endpoints personalizados. Utilizando parámetros como filters, sort, y populate, se pueden construir consultas dinámicas que permiten buscar cursos, ordenarlos y filtrarlos con gran flexibilidad. Esto fue muy importante para implementar la barra de búsqueda y los filtros.

### 2. ¿Qué obstáculos encontraste y cómo los resolviste?

Uno de los principales obstáculos fue cómo compartir los datos del backend sin subir la base de datos directamente al repositorio, lo cual no es una práctica recomendada. Finalmente  investigué en la documentación oficial de Strapi y encontré el comando `npm run strapi export -- --no-encrypt` que permite exportar toda la estructura y datos en un archivo comprimido. Lo que permite que cualquier persona pueda importar los mismos datos con `npm run strapi import -f export_file.tar.gz --force`.

### 3. ¿Qué mejorarías si tuvieras más tiempo?

Me habría gustado implementar una colección de categorías para organizar mejor los cursos y permitir filtrarlos por temática, como Frontend, Backend o Diseño. Además, habría agregado más información a las colecciones, como si el usuario está inscrito o no, su progreso dentro del curso y la autenticación de usuarios, para guardar el avance de cada persona.


### 4. ¿Qué parte del stack no conocías antes?

Una herramienta que no conocía y fue muy útil es @strapi/blocks-react-renderer, una librería oficial de Strapi que permite interpretar contenido enriquecido (Rich Text) creado con el editor visual del CMS. Gracias a esta librería, pude renderizar correctamente los bloques dentro de React, sin tener que crear un renderizador personalizado. 

## 📄 Licencia

Este proyecto fue desarrollado como prueba técnica para fines educativos.

## 👨‍💻 Desarrollado por

**Sergio Ruiz** - [GitHub](https://github.com/SergioR-02)
