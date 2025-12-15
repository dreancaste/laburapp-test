# Wireframe: Portal de Usuario - Dashboard

**Ruta:** `/portal/dashboard`

**Grupo:** `(portal)`

---

### Layout General

```
+-------------------------------------------------+
| [Header del Portal]                             |
|  - Logo                                         |
|  - Navegación (Dashboard, Reservas, Wallet)     |
|  - Menú de Usuario (Avatar)                     |
+-------------------------------------------------+
| [Contenido Principal]                           |
|  +-----------------------+ +------------------+ |
|  | [Mapa de Búsqueda]    | | [Resumen Actividad]|
|  |                       | | - Próximas Reservas|
|  |                       | | - Mensajes Nuevos  |
|  +-----------------------+ +------------------+ |
+-------------------------------------------------+
```

### Componentes Detallados

1.  **Header del Portal:**
    *   Navegación principal del portal.
    *   El menú de usuario (al hacer clic en el avatar) mostrará opciones para "Mi Perfil" y "Cerrar Sesión".

2.  **Mapa de Búsqueda:**
    *   Componente principal de la página.
    *   Similar al de la app móvil: mapa interactivo con proveedores, filtros y tarjetas de resumen.

3.  **Resumen de Actividad:**
    *   Una barra lateral o sección con `Card`s que muestran:
        *   Una lista de las próximas 2-3 reservas.
        *   Un resumen de las últimas conversaciones de chat no leídas.
