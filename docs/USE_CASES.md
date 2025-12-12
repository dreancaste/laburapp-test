# Casos de Uso y Roles de Usuario - LABURAPP

## 1. Roles de Usuario

La plataforma define tres roles principales, cada uno con un conjunto distinto de permisos y funcionalidades.

### 1.1. Cliente (Client)

*   **Descripción:** Un usuario que busca, reserva y paga por servicios ofrecidos en la plataforma.
*   **Permisos Clave:**
    *   Registrarse y gestionar su perfil personal.
    *   Buscar proveedores por servicio y ubicación.
    *   Ver perfiles de proveedores (reputación, experiencia, etc.).
    *   Solicitar y gestionar reservas.
    *   Comunicarse con proveedores a través del chat interno.
    *   Realizar pagos y gestionar su wallet.
    *   Dejar calificaciones y comentarios después de un servicio.

### 1.2. Proveedor de Servicios (Provider)

*   **Descripción:** Un profesional o empresa que ofrece sus servicios en la plataforma.
*   **Permisos Clave:**
    *   Registrarse y someterse a verificación de identidad (biometría, KYC).
    *   Crear y gestionar un perfil profesional detallado (servicios, certificaciones, experiencia).
    *   Establecer su disponibilidad en el calendario.
    *   Definir su área de servicio.
    *   Recibir y gestionar solicitudes de reserva (aceptar/rechazar).
    *   Comunicarse con clientes a través del chat interno.
    *   Recibir pagos en su wallet y gestionar retiros.
    *   Construir su reputación a través de calificaciones.

### 1.3. Administrador (Admin)

*   **Descripción:** Un operador de LABURAPP con acceso a la gestión global de la plataforma.
*   **Permisos Clave:**
    *   Gestionar usuarios (ver, bloquear, editar).
    *   Moderar contenido (perfiles, comentarios).
    *   Resolver disputas entre clientes y proveedores.
    *   Monitorear transacciones y estadísticas de la plataforma.
    *   Gestionar categorías de servicios.
    *   Acceder al Admin Panel.

## 2. Casos de Uso Detallados (Flujo del Backend)

A continuación, se describen los flujos de trabajo para las interacciones más importantes del sistema.

### 2.1. Registro y Verificación de un Nuevo Proveedor

1.  **Petición de Registro:** El `Cliente` (aplicación móvil/web) envía una petición `POST /auth/register` con email, contraseña y `role: "provider"`.
2.  **Creación de Usuario:** El `Servicio de Autenticación` crea un nuevo registro en la tabla `users` con el estado `is_active: false` y publica un evento `UserRegistered`.
3.  **Creación de Perfil:** El `Servicio de Perfiles`, suscrito a `UserRegistered`, crea un perfil vacío asociado al nuevo `user_id`.
4.  **Verificación Biométrica:** El proveedor sube su documento y selfie (`POST /auth/verify-biometrics`). El `Servicio de Autenticación` guarda los archivos de forma segura y establece el `verification_status` en `pending`.
5.  **Proceso de Verificación (Asíncrono):** Un sistema (automatizado o manual) procesa los datos. Si la verificación es exitosa, se actualiza el estado `is_biometric_verified: true` y `is_active: true`.
6.  **Notificación:** El `Servicio de Notificaciones` informa al proveedor que su cuenta ha sido activada.

### 2.2. Búsqueda de un Proveedor

1.  **Petición de Búsqueda:** El `Cliente` envía una petición `GET /providers/search` con parámetros como `category`, `lat`, `lon` y `radius`.
2.  **Enrutamiento y Agregación:** El `API Gateway` recibe la petición. Para resolverla, orquesta llamadas a múltiples servicios:
    *   **Paso 2a (Geolocalización):** Envía una petición al `Servicio de Geolocalización` para obtener una lista de `user_id` de proveedores que están disponibles en el área de búsqueda.
    *   **Paso 2b (Enriquecimiento de Datos):** Con la lista de `user_id`, el `API Gateway` consulta en paralelo al `Servicio de Perfiles` y al `Servicio de Reputación` para obtener los datos detallados (nombre, foto, rating, etc.) de cada proveedor.
3.  **Composición de la Respuesta:** El `API Gateway` combina los resultados de las diferentes fuentes.
4.  **Cálculo de Precios (Opcional):** Si la búsqueda incluye parámetros de urgencia, el `API Gateway` puede invocar al `Servicio de Precios` para obtener tarifas estimadas.
5.  **Respuesta Final:** Se devuelve una lista enriquecida de proveedores que coinciden con los criterios, ordenados por relevancia (distancia, reputación). Este patrón (API Composition) evita el acoplamiento directo entre microservicios, mejorando la resiliencia del sistema.

### 2.3. Creación de una Reserva

1.  **Petición de Reserva:** El `Cliente` selecciona un proveedor y un horario, enviando una petición `POST /bookings`.
2.  **Validación de Disponibilidad:** El `Servicio de Reservas` verifica la disponibilidad del proveedor en su calendario.
3.  **Creación de Reserva:** Si está disponible, se crea una reserva con estado `pending`. Se publica un evento `BookingRequested`.
4.  **Notificación al Proveedor:** El `Servicio de Notificaciones` escucha el evento y avisa al proveedor de la nueva solicitud.
5.  **Confirmación del Proveedor:** El proveedor acepta la reserva (`PUT /bookings/{id}/confirm`).
6.  **Retención de Pago:** El `Servicio de Reservas` publica un evento `BookingConfirmed`. El `Servicio de Pagos` escucha este evento e inicia una pre-autorización o retención en el método de pago del cliente.
7.  **Actualización de Estado:** El estado de la reserva cambia a `confirmed`.

### 2.4. Finalización y Pago de un Servicio

1.  **Marcar como Completado:** El `Proveedor` marca el trabajo como finalizado (`PUT /bookings/{id}/complete`).
2.  **Confirmación del Cliente:** El `Cliente` recibe una notificación para confirmar que el servicio se completó satisfactoriamente.
3.  **Procesamiento del Pago:** Tras la confirmación, el `Servicio de Reservas` publica un evento `BookingCompleted`.
4.  **Captura de Fondos:** El `Servicio de Pagos` captura los fondos retenidos, descuenta la comisión de LABURAPP y acredita el saldo restante en la wallet del proveedor.
5.  **Generación de Recibo:** Se genera un registro de la transacción en el historial financiero de ambos usuarios.
6.  **Solicitud de Calificación:** El `Servicio de Reputación`, escuchando el evento `BookingCompleted`, crea una solicitud de calificación pendiente para el cliente.
