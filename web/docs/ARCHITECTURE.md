# Arquitectura Frontend Web - LABURAPP

## 1. Introducción

Este documento define la arquitectura para el frontend web de LABURAPP, que incluye tres componentes principales:
1.  **Landing Page Institucional:** Un sitio estático y optimizado para SEO.
2.  **Portal Web del Usuario:** Una aplicación web dinámica (SPA) para clientes y proveedores.
3.  **Panel Administrativo:** Una SPA segura para la gestión de la plataforma.

## 2. Stack Tecnológico

Se ha elegido **Next.js** como el framework principal, utilizando **TypeScript**.

*   **Justificación:**
    *   **Renderizado Híbrido:** Next.js permite generar páginas estáticas (SSG) para la Landing Page, lo que garantiza un rendimiento y SEO excelentes. Al mismo tiempo, permite el renderizado del lado del cliente (CSR) para las aplicaciones dinámicas como el Portal y el Panel de Admin.
    *   **Ecosistema React:** Aprovecha el vasto ecosistema de librerías y la robustez de React para construir interfaces de usuario complejas.
    *   **TypeScript por Defecto:** Asegura un código más seguro y mantenible.
    *   **Routing Basado en Ficheros:** Simplifica la gestión de las rutas de la aplicación.

| Área                 | Tecnología Recomendada      | Alternativas            |
|----------------------|-----------------------------|-------------------------|
| **Framework**        | Next.js                     | Astro, Create React App |
| **Lenguaje**         | TypeScript                  | JavaScript              |
| **Estilizado**       | Tailwind CSS                | Styled Components, Sass |
| **Manejo de Estado** | Redux Toolkit (RTK)         | Zustand, React Context  |
| **UI Components**    | Shadcn/ui o Radix UI        | Material-UI, Ant Design |
| **Formularios**      | React Hook Form             | Formik                  |
| **Llamadas a API**   | Axios / RTK Query           | Fetch API               |
| **Mapas**            | `react-leaflet`             | Google Maps React       |

## 3. Estructura del Proyecto (Monorepo con Next.js)

Se utilizará una única aplicación Next.js para gestionar los tres componentes, aprovechando el enrutamiento y los layouts.

```
web/
├── src/
│   ├── app/
│   │   ├── (landing)/          # Rutas de la Landing Page (layout propio)
│   │   │   ├── page.tsx
│   │   │   └── ...
│   │   ├── (portal)/           # Rutas del Portal de Usuario (layout propio)
│   │   │   ├── dashboard/
│   │   │   ├── profile/
│   │   │   └── layout.tsx
│   │   ├── (admin)/            # Rutas del Panel de Admin (layout propio)
│   │   │   ├── users/
│   │   │   ├── disputes/
│   │   │   └── layout.tsx
│   │   ├── api/                # Rutas de API de Next.js (para backend-for-frontend)
│   │   └── layout.tsx          # Layout raíz
│   ├── components/
│   │   ├── ui/                 # Componentes base (Button, Input - Shadcn)
│   │   └── features/           # Componentes específicos de una funcionalidad
│   ├── lib/                    # Funciones de utilidad, hooks, etc.
│   └── store/                  # Configuración de Redux
├── public/                     # Archivos estáticos (imágenes, fuentes)
└── ...
```

*   **Grupos de Rutas (`(landing)`, `(portal)`, `(admin)`):** Permiten organizar las rutas en secciones lógicas, cada una con su propio layout, sin afectar a la URL final.
*   **Layouts Anidados:** Cada grupo de rutas tendrá un `layout.tsx` que definirá la estructura de esa sección (ej. el `layout.tsx` de `(admin)` tendrá la barra lateral del dashboard).

## 4. Manejo de Sesiones y Autenticación

*   **Tokens JWT:** La autenticación se basará en los `accessToken` y `refreshToken` proporcionados por el backend.
*   **Cookies `httpOnly`:** Los tokens se almacenarán de forma segura en cookies `httpOnly` para prevenir ataques XSS.
*   **NextAuth.js (Recomendado):** Se utilizará esta librería para simplificar la gestión de la sesión, el login, el logout y la rotación de refresh tokens. Proporciona hooks (`useSession`) y protección de rutas tanto en el cliente como en el servidor.

## 5. Comunicación con la API

*   **RTK Query:** Se recomienda para gestionar la obtención de datos, el cacheo y la invalidación de la caché de forma automática. Reduce drásticamente la cantidad de código necesario para interactuar con la API.
*   **Rutas de API de Next.js (`/api`):** Se pueden utilizar como un "Backend-for-Frontend" (BFF) para realizar tareas sensibles en el servidor, como llamar a la API del backend con claves secretas o agregar datos de múltiples fuentes.

## 6. SEO

*   **Landing Page (SSG):** Al ser generada de forma estática, su contenido es fácilmente indexable por los motores de búsqueda.
*   **Metadatos:** Next.js proporciona una API (`generateMetadata`) para gestionar fácilmente las etiquetas `<title>`, `<meta name="description">`, etc., en cada página, lo cual es crucial para el SEO.
*   **Sitemaps:** Se generará un `sitemap.xml` para ayudar a los motores de búsqueda a descubrir todas las páginas públicas.
