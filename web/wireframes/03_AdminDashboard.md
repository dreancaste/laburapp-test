# Wireframe: Panel de Administración - Dashboard

**Ruta:** `/admin/dashboard`

**Grupo:** `(admin)`

---

### Layout General

```
+-------------------------------------------------+
| [Header del Admin]                              |
|  - Título de la Página (Dashboard)              |
|  - Menú de Usuario (Avatar Admin)               |
+-------------------------------------------------+
| [Contenido Principal]                           |
|  +--------------+ +---------------------------+ |
|  | [Navegación  ] | | [Widgets de Métricas]     | |
|  | [Lateral     ] | | - Usuarios Activos        | |
|  | - Dashboard  | | - Reservas Hoy            | |
|  | - Usuarios   | | - Ingresos del Mes        | |
|  | - Disputas   | |                           | |
|  |              | +---------------------------+ |
|  |              | +---------------------------+ |
|  |              | | [Gráfico de Actividad]    | |
|  |              | +---------------------------+ |
|  +--------------+ +---------------------------+ |
+-------------------------------------------------+
```

### Componentes Detallados

1.  **Header del Admin:**
    *   Muestra el título de la sección actual.
    *   El menú de usuario permite cerrar sesión.

2.  **Navegación Lateral:**
    *   Un menú vertical fijo con enlaces a las principales secciones del panel de administración (`ListItem`s).

3.  **Widgets de Métricas:**
    *   Una fila de `Card`s en la parte superior, cada una mostrando una métrica clave con un número grande (ej. "Usuarios Activos: 1,234").

4.  **Gráfico de Actividad:**
    *   Un gráfico de líneas o barras (usando una librería como `recharts`) que muestra la actividad de la plataforma a lo largo del tiempo (ej. reservas por día).
