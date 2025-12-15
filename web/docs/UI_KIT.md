# UI Kit y Componentes Visuales Web - LABURAPP

Este documento define el sistema de diseño y los componentes de UI para el frontend web de LABURAPP, basado en **Tailwind CSS** y **Shadcn/ui**.

## 1. Filosofía de Diseño

*   **Utilidad Primero:** Se prioriza el uso de clases de utilidad de Tailwind CSS para construir interfaces de forma rápida y consistente.
*   **Componentes Modulares:** Se crearán componentes de React reutilizables para las piezas de UI más complejas.
*   **Accesibilidad:** Todos los componentes seguirán las mejores prácticas de accesibilidad (WAI-ARIA).

## 2. Paleta de Colores (Configuración de Tailwind)

La paleta de colores será la misma que la de la app móvil, configurada en `tailwind.config.js`.

| Nombre       | Hex        |
|--------------|------------|
| `primary`    | `#3498db`  |
| `secondary`  | `#2ecc71`  |
| `danger`     | `#e74c3c`  |
| `background` | `#ecf0f1`  |
| `surface`    | `#ffffff`  |
| `text`       | `#2c3e50`  |

## 3. Tipografía

*   **Fuente:** `Inter` (o una fuente sans-serif moderna).
*   **Configuración:** Se utilizarán las clases de tamaño de fuente de Tailwind (`text-lg`, `text-xl`, etc.) para mantener la consistencia.

## 4. Componentes Base (Derivados de Shadcn/ui)

Se utilizarán los siguientes componentes de `Shadcn/ui` como base, que son accesibles y personalizables.

### `Button`

*   Variantes: `default` (primary), `secondary`, `destructive`, `ghost`, `link`.
*   Usado para todas las acciones interactivas.

### `Input`

*   Campo de texto estándar para formularios.
*   Incluye soporte para etiquetas (`Label`) y mensajes de error.

### `Card`

*   Contenedor principal para agrupar información.
*   Compuesto por `CardHeader`, `CardContent`, y `CardFooter`.

### `Table`

*   Para mostrar datos tabulares en el Panel de Administración.
*   Componentes: `TableHeader`, `TableRow`, `TableCell`.
*   Soportará paginación y ordenamiento.

### `DropdownMenu`

*   Usado para los menús de usuario y menús de acciones en las tablas.

### `Avatar`

*   Para mostrar las imágenes de perfil de los usuarios.

### `Dialog` (Modal)

*   Para mostrar formularios o información importante en una ventana emergente.

## 5. Componentes Específicos de la Aplicación

Además de los componentes base, se crearán componentes más complejos y específicos.

### `SiteHeader`

*   El header principal para la Landing Page y el Portal.
*   Contendrá el logo, la navegación principal y los botones de autenticación.

### `AdminSidebar`

*   La barra de navegación lateral fija para el Panel de Administración.

### `Map`

*   Un componente que encapsula la lógica de `react-leaflet` para mostrar el mapa y los marcadores de proveedores.

### `BookingCalendar`

*   Un componente interactivo para que los usuarios seleccionen la fecha y hora de una reserva.

### `DataTable`

*   Un componente de tabla avanzado construido sobre `Table`, que incluye funcionalidades de búsqueda, filtrado y paginación para el Panel de Administración.
