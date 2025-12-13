# Wireframe: Solicitud de Servicio

**Pantalla:** `BookingScreen`

**Tipo:** Pantalla dentro del Stack de Mapa (modal)

---

### Layout General

```
+-------------------------------------------------+
| [Header con Título y Botón de Cerrar]           |
+-------------------------------------------------+
| [Resumen del Proveedor]                         |
+-------------------------------------------------+
| [Selector de Fecha y Hora]                      |
|  - Calendario                                   |
|  - Horarios Disponibles                         |
+-------------------------------------------------+
| [Descripción del Trabajo]                       |
|  - Campo de texto multilínea                    |
+-------------------------------------------------+
| [Resumen de Costos]                             |
|  - Tarifa estimada                              |
|  - Comisión del servicio                        |
|  - Total                                        |
+-------------------------------------------------+
| [Botón "Confirmar y Pagar"]                     |
+-------------------------------------------------+
```

### Componentes Detallados

1.  **Header:**
    *   **Componente:** `Header`
    *   **Contenido:**
        *   Título: "Solicitar Servicio".
        *   Botón "X" a la derecha para cerrar la pantalla modal y volver a `ProviderProfileScreen`.

2.  **Resumen del Proveedor:**
    *   **Componente:** `ListItem` o `Card` simple.
    *   **Contenido:**
        *   `Avatar` del proveedor.
        *   Nombre del proveedor (`h3`).
        *   Servicio principal (`caption`).

3.  **Selector de Fecha y Hora:**
    *   Un título (`h3`) "Elige una fecha y hora".
    *   Un componente de **Calendario** para seleccionar el día.
    *   Una lista horizontal de **"chips" o botones** mostrando los horarios disponibles para el día seleccionado (ej. "09:00", "10:00", "14:00").

4.  **Descripción del Trabajo:**
    *   Un título (`h3`) "Describe el trabajo".
    *   Un `Input` de tipo `TextInput` multilínea con un placeholder como "¿Qué necesitas?".

5.  **Resumen de Costos:**
    *   **Componente:** `Card`.
    *   **Contenido:**
        *   `ListItem` para "Tarifa estimada" con el precio.
        *   `ListItem` para "Comisión de Laburapp" con el precio.
        *   Una línea divisoria.
        *   `ListItem` con "Total" en negrita y el precio final.
    *   **Lógica:** El precio se calcula dinámicamente basado en el proveedor, la hora seleccionada (urgencia) y la demanda (lógica del motor de precios del backend).

6.  **Botón de Confirmación:**
    *   **Componente:** `ButtonPrimary`.
    *   **Posición:** Fijo en la parte inferior de la pantalla.
    *   **Texto:** "Confirmar y Pagar".
    *   **Acción:**
        *   Abre el modal de la pasarela de pago (Stripe, Mercado Pago).
        *   Al confirmar el pago, se crea la reserva en el backend y se navega a una pantalla de `BookingConfirmationScreen`.
