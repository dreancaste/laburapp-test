# Roadmap Técnico del MVP - App Móvil LABURAPP

## Introducción

Este roadmap describe las fases de desarrollo recomendadas para construir y lanzar el Producto Mínimo Viable (MVP) de la aplicación móvil de LABURAPP. El enfoque es iterativo, priorizando las funcionalidades que permitan a los clientes y proveedores completar el ciclo de negocio principal.

---

### Fase 1: Fundación, Autenticación y Perfiles (Sprint 1-2)

**Objetivo:** Establecer el esqueleto de la aplicación, configurar la navegación y permitir que los usuarios se registren, inicien sesión y vean sus perfiles.

*   **Proyecto y CI/CD:**
    *   Inicializar el proyecto React Native.
    *   Configurar la estructura de directorios, navegación básica (React Navigation) y manejo de estado (Redux Toolkit).
    *   Crear un pipeline de CI simple (linting, build).
*   **Integración de API:**
    *   Configurar la capa de API para comunicarse con el backend de LABURAPP.
*   **Flujo de Autenticación:**
    *   Implementar las pantallas de `Login` y `Registro`.
    *   Integrar con los endpoints de `login`, `register` y `refresh` del backend.
    *   Gestionar el estado de autenticación (guardar/borrar tokens de forma segura).
*   **Pantalla de Perfil:**
    *   Implementar la pantalla `ProfileScreen` para mostrar la información del usuario autenticado (obtenida de `/profiles/me`).

**Entregable:** Una aplicación funcional donde los usuarios pueden crear una cuenta, iniciar y cerrar sesión, y ver su propia información de perfil.

---

### Fase 2: Búsqueda en el Mapa y Visualización de Proveedores (Sprint 3-4)

**Objetivo:** Implementar la funcionalidad principal para los clientes: encontrar proveedores en un mapa.

*   **Integración del Mapa:**
    *   Integrar `react-native-maps` y mostrar el mapa centrado en la ubicación del usuario.
    *   Solicitar los permisos de geolocalización necesarios.
*   **Búsqueda de Proveedores:**
    *   Llamar al endpoint de búsqueda del backend para obtener proveedores cercanos.
    *   Mostrar los proveedores en el mapa usando `MapMarker`s personalizados.
*   **Perfil del Proveedor:**
    *   Implementar la pantalla `ProviderProfileScreen` para mostrar los detalles de un proveedor seleccionado.
    *   Permitir la navegación desde el marcador del mapa hasta el perfil del proveedor.

**Entregable:** Los clientes pueden ver un mapa con proveedores cercanos, tocar en ellos para ver un resumen y navegar a su perfil detallado.

---

### Fase 3: Flujo de Reservas (Sprint 5-6)

**Objetivo:** Permitir a los clientes solicitar y reservar un servicio.

*   **Pantalla de Solicitud de Servicio:**
    *   Implementar la `BookingScreen`, incluyendo el calendario y selector de hora.
    *   Integrar con el motor de precios del backend para mostrar una tarifa estimada.
*   **Integración de Pagos (Básica):**
    *   Integrar una pasarela de pago para manejar la autorización del pago al crear la reserva.
*   **Gestión de Reservas:**
    *   Implementar la pantalla `BookingsListScreen` para que el cliente vea sus reservas.
    *   Implementar la pantalla `BookingDetailsScreen` para ver el estado de una reserva.

**Entregable:** Los clientes pueden completar el flujo de reserva de un servicio, incluyendo la selección de fecha/hora y la autorización del pago.

---

### Fase 4: Chat y Sistema de Reputación (Sprint 7-8)

**Objetivo:** Habilitar la comunicación y el sistema de confianza de la plataforma.

*   **Chat en Tiempo Real:**
    *   Implementar la `ChatListScreen` y la `ChatScreen`.
    *   Integrar con el servicio de chat del backend (vía WebSockets o similar).
*   **Sistema de Calificaciones:**
    *   Implementar la `ReviewScreen`, que permite a los clientes calificar y dejar un comentario después de una reserva completada.
    *   Mostrar las calificaciones y reseñas en el `ProviderProfileScreen`.

**Entregable:** Los usuarios pueden chatear entre sí en el contexto de una reserva y los clientes pueden calificar a los proveedores, construyendo así su reputación.

---

### Fase 5: Modo Proveedor y Lanzamiento del MVP (Post-MVP)

**Objetivo:** Implementar las funcionalidades específicas para el proveedor y preparar la aplicación para su lanzamiento.

*   **Dashboard del Proveedor:**
    *   Implementar la vista de la `HomeScreen` para el modo proveedor (activar/desactivar disponibilidad).
*   **Gestión de Reservas del Proveedor:**
    *   Adaptar la `BookingsListScreen` para que los proveedores puedan aceptar o rechazar solicitudes.
*   **Biometría:**
    *   Integrar la verificación biométrica (FaceID/Huella) para un inicio de sesión más rápido y seguro.
    *   Implementar el flujo de carga de DNI y selfie para la verificación de proveedores.
*   **Wallet:**
    *   Implementar la `WalletScreen` para que los usuarios puedan ver su saldo e historial de transacciones.

**Entregable:** Una aplicación completa con los flujos esenciales para ambos roles (cliente y proveedor), lista para ser lanzada en las tiendas de aplicaciones.
