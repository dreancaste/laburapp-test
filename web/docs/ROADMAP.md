# Roadmap Técnico del MVP - Frontend Web LABURAPP

## Introducción

Este roadmap describe las fases de desarrollo para el frontend web de LABURAPP, comenzando con las funcionalidades más críticas para el lanzamiento del MVP.

---

### Fase 1: Fundación y Landing Page (Sprint 1-2)

**Objetivo:** Establecer el proyecto Next.js y desplegar la landing page institucional.

*   **Inicialización del Proyecto:**
    *   Crear una nueva aplicación Next.js con TypeScript y Tailwind CSS.
    *   Configurar la estructura de directorios y el enrutamiento.
*   **Construcción de la Landing Page:**
    *   Implementar el layout principal (Header, Footer).
    *   Crear las secciones estáticas: Hero, Cómo Funciona, Testimonios y Precios.
    *   Asegurar que la página sea completamente responsive y esté optimizada para SEO.
*   **Despliegue Inicial:**
    *   Configurar un pipeline de CI/CD para desplegar automáticamente la landing page en un servicio como Vercel o Netlify.

**Entregable:** Una landing page estática y pública, desplegada y accesible.

---

### Fase 2: Portal de Usuario - Autenticación y Perfil (Sprint 3-4)

**Objetivo:** Permitir a los usuarios registrarse, iniciar sesión y gestionar su perfil.

*   **Configuración de Autenticación:**
    *   Integrar NextAuth.js para gestionar el flujo de autenticación con el backend.
    *   Crear las páginas de Login y Registro.
*   **Capa de Datos:**
    *   Configurar Redux Toolkit y RTK Query para la comunicación con la API.
*   **Gestión de Perfil:**
    *   Crear la página `/portal/profile` donde los usuarios pueden ver y actualizar su información.
    *   Proteger las rutas del portal para que solo los usuarios autenticados puedan acceder.

**Entregable:** Un portal web donde los usuarios pueden crear una cuenta, iniciar sesión de forma segura y editar su perfil.

---

### Fase 3: Portal de Usuario - Funcionalidad Principal (Sprint 5-6)

**Objetivo:** Implementar las características clave para que los clientes puedan usar la plataforma.

*   **Búsqueda y Mapa:**
    *   Implementar el dashboard del portal con un mapa interactivo (`react-leaflet`).
    *   Conectar el mapa al endpoint de búsqueda del backend para mostrar proveedores.
*   **Flujo de Reserva:**
    *   Crear el flujo completo de reserva: ver perfil del proveedor, seleccionar fecha/hora y confirmar la reserva.
*   **Historial de Reservas:**
    *   Implementar la página `/portal/bookings` para mostrar el historial de trabajos.

**Entregable:** Los usuarios pueden buscar proveedores, ver sus perfiles y completar una reserva de servicio.

---

### Fase 4: Panel de Administración (Sprint 7-8)

**Objetivo:** Construir las herramientas internas para la gestión de la plataforma.

*   **Layout del Panel de Admin:**
    *   Crear el layout principal con la barra de navegación lateral.
    *   Proteger las rutas `/admin` para que solo los usuarios con el rol de `Admin` puedan acceder.
*   **Gestión de Usuarios:**
    *   Implementar la tabla de usuarios en `/admin/users` con funcionalidades para ver, buscar y bloquear usuarios.
*   **Dashboard de Métricas:**
    *   Crear la página `/admin/dashboard` con widgets y gráficos que muestren las métricas clave de la plataforma.

**Entregable:** Un panel de administración funcional donde los administradores pueden gestionar usuarios y ver las estadísticas de la plataforma.
