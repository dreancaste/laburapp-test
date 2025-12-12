# Roadmap Técnico del MVP - LABURAPP

## Introducción

Este roadmap describe las fases de desarrollo recomendadas para construir y lanzar el Producto Mínimo Viable (MVP) de LABURAPP. El objetivo es entregar valor de forma incremental, enfocándose primero en las funcionalidades críticas que permitan a los usuarios principales (Clientes y Proveedores) interactuar de manera efectiva.

---

### Fase 1: Fundación, Autenticación y Perfiles (Sprint 1-2)

**Objetivo:** Establecer la infraestructura básica del proyecto y permitir que los usuarios se registren y gestionen perfiles simples.

*   **Infraestructura y CI/CD:**
    *   Configurar los repositorios de código.
    *   Crear un pipeline básico de CI/CD (linting, build, tests) para los primeros servicios.
    *   Dockerizar los servicios de Autenticación y Perfiles.
*   **Servicio de Autenticación:**
    *   Implementar registro de usuarios (Cliente/Proveedor) con email y contraseña.
    *   Implementar login con generación de tokens JWT (access y refresh tokens).
    *   Crear endpoints protegidos.
*   **Servicio de Perfiles:**
    *   Implementar la creación y actualización de perfiles básicos de usuario (nombre, apellido, foto).
    *   Crear el endpoint `GET /profiles/me`.

**Entregable:** Los usuarios pueden registrarse, iniciar sesión y ver/editar un perfil básico. El sistema de autenticación está operativo.

---

### Fase 2: Perfil del Proveedor y Búsqueda (Sprint 3-4)

**Objetivo:** Permitir a los proveedores crear un perfil profesional y a los clientes buscar proveedores por categoría.

*   **Servicio de Perfiles (Extensión):**
    *   Añadir la gestión de certificaciones y experiencia laboral para los perfiles de proveedores.
*   **Servicio de Geolocalización (Básico):**
    *   Implementar el almacenamiento de la ubicación del proveedor (sin búsquedas complejas aún).
*   **Funcionalidad de Búsqueda:**
    *   Crear un endpoint de búsqueda que permita a los clientes encontrar proveedores por categoría de servicio.
    *   La búsqueda inicial puede no ser geoespacial, sino basada en listados generales.

**Entregable:** Los proveedores pueden completar sus perfiles profesionales. Los clientes pueden buscar y ver una lista de proveedores filtrada por el tipo de servicio que ofrecen.

---

### Fase 3: Reservas y Chat (Sprint 5-6)

**Objetivo:** Implementar el flujo central de negocio: la reserva de servicios y la comunicación entre usuarios.

*   **Servicio de Reservas:**
    *   Implementar el ciclo de vida completo de una reserva: `solicitar`, `aceptar`, `rechazar`, `completar`, `cancelar`.
    *   Gestionar la disponibilidad básica de los proveedores.
*   **Servicio de Chat:**
    *   Implementar un chat en tiempo real (WebSocket) entre cliente y proveedor, vinculado a una reserva específica.
*   **Servicio de Notificaciones (Básico):**
    *   Enviar notificaciones (ej. por email o en la app) cuando el estado de una reserva cambia.

**Entregable:** Los clientes pueden solicitar una reserva a un proveedor. Ambos pueden comunicarse a través del chat y gestionar el estado de la reserva hasta su finalización.

---

### Fase 4: Pagos y Sistema de Reputación (Sprint 7-8)

**Objetivo:** Integrar la monetización y el sistema de confianza de la plataforma.

*   **Servicio de Pagos:**
    *   Integrar una pasarela de pago (ej. Mercado Pago, Stripe).
    *   Implementar la wallet del usuario.
    *   Gestionar el flujo de pago al completar una reserva (captura de fondos, cálculo de comisiones, acreditación al proveedor).
*   **Servicio de Reputación:**
    *   Permitir a los clientes dejar una calificación (estrellas) y un comentario después de una reserva completada.
    *   Calcular y mostrar la reputación promedio en el perfil del proveedor.

**Entregable:** El ciclo de negocio está completo. Se pueden realizar pagos por los servicios y los proveedores tienen un sistema de reputación visible.

---

### Fase 5: Lanzamiento del MVP y Mejoras Clave (Post-MVP)

**Objetivo:** Lanzar la plataforma y comenzar a iterar con funcionalidades más avanzadas basadas en el feedback inicial.

*   **Servicio de Geolocalización (Avanzado):**
    *   Implementar la búsqueda geoespacial real (`/search?lat=...&lon=...&radius=...`).
*   **Servicio de Autenticación (Avanzado):**
    *   Implementar el flujo de verificación biométrica (KYC) para nuevos proveedores.
*   **Admin Panel (Básico):**
    *   Crear una interfaz simple para la gestión de usuarios y la resolución de disputas.
*   **Motor de Precios (Básico):**
    *   Implementar una primera versión de tarifas dinámicas si es un requisito indispensable para el lanzamiento.

**Entregable:** Una plataforma robusta y lista para el lanzamiento, con las funcionalidades clave para atraer a los primeros usuarios y validar el modelo de negocio.
