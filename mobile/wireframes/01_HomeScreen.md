# Wireframe: Home Screen (Mapa) - Cliente

**Pantalla:** `HomeScreen`

**Tipo:** Pantalla principal del Tab Navigator (Modo Cliente)

---

### Layout General

```
+-------------------------------------------------+
| [Header con Filtros]                            |
+-------------------------------------------------+
|                                                 |
|                                                 |
|               [Mapa Interactivo]                |
|               (ocupa la mayor parte             |
|                de la pantalla)                  |
|                                                 |
|                                                 |
+-------------------------------------------------+
| [Botón "Solicitar Ahora" (flotante)]            |
+-------------------------------------------------+
| [Barra de Pestañas (Tab Navigator)]             |
+-------------------------------------------------+
```

### Componentes Detallados

1.  **Header con Filtros:**
    *   **Componente:** `Header`
    *   **Contenido:**
        *   Un campo de búsqueda: `Input` con ícono de lupa ("Buscar servicio...").
        *   Un botón de filtro: `ButtonSecondary` con un ícono de "filtros". Al tocarlo, abre un modal o una nueva pantalla con opciones de filtrado avanzadas (distancia, precio, rating, disponibilidad).

2.  **Mapa Interactivo:**
    *   **Componente:** `MapView` (de `react-native-maps`).
    *   **Contenido:**
        *   Muestra el mapa centrado en la ubicación actual del usuario.
        *   Múltiples `MapMarker`s representando a los proveedores cercanos. Cada marcador muestra el `Avatar` del proveedor.
        *   Al tocar un `MapMarker`, se resalta y aparece una `Card` informativa en la parte inferior del mapa.

3.  **Tarjeta de Resumen del Proveedor (Provider Summary Card):**
    *   **Componente:** `Card` (visible solo cuando se selecciona un marcador).
    *   **Posición:** Superpuesta en la parte inferior del mapa.
    *   **Contenido:**
        *   `Avatar` del proveedor.
        *   Nombre del proveedor (`h3`).
        *   Componente `Rating` (estrellas).
        *   Categoría principal del proveedor (`caption`).
        *   `ButtonPrimary` ("Ver Perfil") que navega a `ProviderProfileScreen`.

4.  **Botón "Solicitar Ahora":**
    *   **Componente:** `ButtonPrimary` (flotante).
    *   **Posición:** Esquina inferior derecha, sobre el mapa pero debajo de la barra de pestañas.
    *   **Acción:** Inicia un flujo de "solicitud de servicio urgente", posiblemente abriendo una pantalla para describir el trabajo necesario.

5.  **Barra de Pestañas:**
    *   **Componente:** `TabNavigator`.
    *   **Iconos:** `TabIcon` para Home, Reservas, Mensajes y Perfil.
