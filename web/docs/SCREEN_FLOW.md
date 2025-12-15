# Flujo de Pantallas y Navegación Web - LABURAPP

Este documento describe la estructura de navegación y los flujos de usuario para el frontend web de LABURAPP.

## 1. Estructura de Rutas

La aplicación se dividirá en tres grandes áreas, gestionadas mediante Grupos de Rutas de Next.js.

1.  **Landing Page (`/`):**
    *   `/`: Página de inicio.
    *   `/features`: Página de características.
    *   `/pricing`: Página de precios.
    *   `/login`: Página de inicio de sesión.
    *   `/register`: Página de registro.

2.  **Portal de Usuario (`/portal`):**
    *   `/portal/dashboard`: Dashboard principal.
    *   `/portal/profile`: Gestión del perfil.
    *   `/portal/bookings`: Historial de reservas.
    *   `/portal/wallet`: Gestión financiera.
    *   `/portal/chat`: Mensajería.

3.  **Panel de Administración (`/admin`):**
    *   `/admin/dashboard`: Dashboard de métricas.
    *   `/admin/users`: Gestión de usuarios.
    *   `/admin/disputes`: Gestión de disputas.
    *   `/admin/reports`: Visualización de reportes.

## 2. Flujo de Autenticación

1.  El usuario visita `/login` o `/register`.
2.  Tras un registro o inicio de sesión exitoso, la API del backend devuelve los tokens JWT.
3.  NextAuth.js guarda los tokens en una cookie `httpOnly` segura.
4.  El usuario es redirigido a la página que intentaba visitar o al `/portal/dashboard`.
5.  Las rutas del Portal y del Admin estarán protegidas. Si un usuario no autenticado intenta acceder, será redirigido a `/login`.

## 3. Flujo del Portal de Usuario

1.  **Dashboard:** El usuario ve un resumen de su actividad: próximas reservas, mensajes no leídos, y un mapa para buscar proveedores.
2.  **Búsqueda:** Desde el mapa del dashboard, el usuario puede buscar, filtrar y seleccionar proveedores.
3.  **Perfil del Proveedor:** Al seleccionar un proveedor, el usuario ve su perfil público.
4.  **Reserva:** Desde el perfil, puede iniciar el flujo de reserva (seleccionar fecha, hora, describir el trabajo).
5.  **Pago:** El sistema redirige a la pasarela de pago.
6.  **Gestión:** El usuario puede ver sus reservas en `/portal/bookings` y comunicarse con los proveedores a través de `/portal/chat`.

## 4. Flujo del Panel de Administración

1.  Un usuario con rol de `Admin` inicia sesión.
2.  Es redirigido a `/admin/dashboard`.
3.  Utiliza la barra de navegación lateral para moverse entre las diferentes secciones: gestión de usuarios, resolución de disputas, etc.
4.  Todas las acciones (ej. bloquear un usuario) se realizan a través de llamadas a la API del backend.
