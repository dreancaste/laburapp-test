# Wireframe: Perfil del Proveedor

**Pantalla:** `ProviderProfileScreen`

**Tipo:** Pantalla dentro del Stack de Mapa

---

### Layout General

```
+-------------------------------------------------+
| [Header con Botón de Retroceso]                 |
+-------------------------------------------------+
| [Sección de Perfil Principal]                   |
|  - Imagen de Portada (opcional)                 |
|  - Avatar grande                                |
|  - Nombre y Rating                              |
+-------------------------------------------------+
| [Sección de Información]                        |
|  - Descripción / Bio                            |
|  - Servicios Ofrecidos                          |
|  - Certificaciones                              |
|  - Reseñas de Usuarios                          |
+-------------------------------------------------+
| [Botón de Acción Flotante (CTA)]                |
+-------------------------------------------------+
```

### Componentes Detallados

1.  **Header:**
    *   **Componente:** `Header`
    *   **Contenido:**
        *   Botón de retroceso a la izquierda para volver al `HomeScreen`.
        *   Título de la pantalla (Nombre del Proveedor).
        *   Botón de "Favorito" (ícono de corazón) a la derecha (opcional).

2.  **Sección de Perfil Principal:**
    *   Una imagen de portada opcional en la parte superior.
    *   Un `Avatar` grande centrado.
    *   El nombre del proveedor (`h2`) debajo del avatar.
    *   Un componente `Rating` para mostrar la calificación promedio.
    *   Un `ButtonSecondary` para "Contactar" que navega a `ChatScreen`.

3.  **Sección de Información (ScrollView):**
    *   **Descripción / Bio:**
        *   Un título (`h3`) "Sobre mí".
        *   Un bloque de texto (`body`) con la biografía del proveedor.
    *   **Servicios Ofrecidos:**
        *   Un título (`h3`) "Mis Servicios".
        *   Una lista de `ListItem`s o `Chip`s que enumeran los servicios (ej. "Plomería", "Electricidad").
    *   **Certificaciones:**
        *   Un título (`h3`) "Certificaciones Verificadas".
        *   Una lista de `Card`s, cada una mostrando el título de la certificación y la institución. Un ícono de "verificado".
    *   **Reseñas de Usuarios:**
        *   Un título (`h3`) "Lo que dicen los clientes".
        *   Una lista de `Card`s, cada una con el `Avatar` del cliente, su `Rating` y su comentario.

4.  **Botón de Acción Flotante (Call to Action):**
    *   **Componente:** `ButtonPrimary`.
    *   **Posición:** Fijo en la parte inferior de la pantalla.
    *   **Texto:** "Solicitar Servicio".
    *   **Acción:** Navega a la pantalla `BookingScreen`, pasando el ID del proveedor.
