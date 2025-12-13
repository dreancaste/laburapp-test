# UI Kit y Componentes Visuales - LABURAPP

Este documento define el sistema de diseño básico y los componentes de UI reutilizables para la aplicación móvil de LABURAPP. El objetivo es mantener una identidad visual consistente y acelerar el desarrollo.

## 1. Paleta de Colores

| Color        | Hex        | Uso                                        |
|--------------|------------|--------------------------------------------|
| `primary`    | `#3498db`  | Botones principales, enlaces, acentos      |
| `secondary`  | `#2ecc71`  | Éxito, confirmaciones, estado "disponible" |
| `danger`     | `#e74c3c`  | Errores, alertas, cancelaciones          |
| `warning`    | `#f1c40f`  | Advertencias, notificaciones pendientes  |
| `background` | `#ecf0f1`  | Fondo principal de las pantallas           |
| `surface`    | `#ffffff`  | Fondo de tarjetas, modales, etc.           |
| `text`       | `#2c3e50`  | Texto principal                            |
| `subtext`    | `#95a5a6`  | Texto secundario, placeholders           |

## 2. Tipografía

*   **Fuente Principal:** `Roboto` (o una fuente sans-serif estándar del sistema).
*   **Títulos (`h1`, `h2`, `h3`):** `Roboto Bold`, tamaños 24pt, 20pt, 18pt.
*   **Cuerpo de Texto (`body`):** `Roboto Regular`, tamaño 16pt.
*   **Subtítulos y Etiquetas (`caption`):** `Roboto Light`, tamaño 14pt.

## 3. Componentes Reutilizables

A continuación se describen los componentes básicos que formarán el UI Kit.

### `Button`

*   **`ButtonPrimary`:** Botón con fondo `primary` y texto blanco. Para acciones principales (ej. "Solicitar Servicio").
*   **`ButtonSecondary`:** Botón con borde `primary` y fondo transparente. Para acciones secundarias (ej. "Ver Perfil").
*   **`ButtonDanger`:** Botón con fondo `danger` y texto blanco. Para acciones destructivas (ej. "Cancelar Reserva").
*   **Estados:** `default`, `pressed`, `disabled`.

### `Input`

*   **`TextInput`:** Campo de texto estándar con un borde `subtext` y una etiqueta flotante.
    *   **Estados:** `default`, `focused`, `error`.
    *   Incluirá un ícono opcional a la izquierda o derecha y un mensaje de error debajo.
*   **`PasswordInput`:** Variante de `TextInput` con un ícono para mostrar/ocultar la contraseña.

### `Card`

*   Contenedor con fondo `surface`, sombra sutil y bordes redondeados.
*   Utilizado para encapsular información relacionada, como en una lista de reservas o el resumen de un proveedor.
*   Tendrá variantes para diferentes niveles de elevación.

### `Avatar`

*   Componente circular para mostrar la imagen de perfil de un usuario.
*   Tendrá tamaños predefinidos (`small`, `medium`, `large`).
*   Mostrará iniciales si no hay imagen disponible.

### `Rating`

*   Componente para mostrar una calificación de 1 a 5 estrellas.
*   Las estrellas pueden ser completas, a medias o vacías.
*   Variante interactiva para permitir al usuario seleccionar una calificación.

### `MapMarker`

*   Marcador personalizado para el mapa.
*   Mostrará el avatar del proveedor y posiblemente su tarifa o rating.
*   Variante `selected` con un estilo diferente para cuando el usuario lo toca.

### `ListItem`

*   Componente para filas en una lista.
*   Tendrá una sección para un ícono o avatar a la izquierda, un título y subtítulo en el centro, y un indicador o acción a la derecha (ej. una flecha `>`).
*   Utilizado en listas de chat, reservas, y menús de configuración.

### `TabIcon`

*   Ícono personalizado para el `Main Tab Navigator`.
*   Mostrará un ícono y una etiqueta.
*   Tendrá un estado `active` y `inactive`.

### `Header`

*   Barra de navegación superior personalizada para los `Stack Navigators`.
*   Incluirá el título de la pantalla, un botón de retroceso y acciones opcionales a la derecha.

## 4. Iconografía

Se utilizará una librería de íconos estándar como `react-native-vector-icons` (con sets como Material Icons o FontAwesome) para mantener la consistencia en toda la aplicación.
