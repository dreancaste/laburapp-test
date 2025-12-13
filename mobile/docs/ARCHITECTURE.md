# Arquitectura de la App Móvil - LABURAPP

## 1. Introducción

Este documento define la arquitectura de alto nivel para la aplicación móvil de LABURAPP, diseñada para funcionar tanto en Android como en iOS. El objetivo es crear una base de código mantenible, escalable y que ofrezca una excelente experiencia de usuario.

## 2. Stack Tecnológico

Se recomienda el uso de **React Native** como framework principal para el desarrollo de la aplicación.

*   **Justificación:**
    *   **Desarrollo Multiplataforma:** Permite mantener una única base de código para Android y iOS, reduciendo costos y tiempos de desarrollo.
    *   **Amplio Ecosistema:** Cuenta con una vasta colección de librerías y herramientas que aceleran la integración de funcionalidades como mapas, pagos y biometría.
    *   **Rendimiento Nativo:** Utiliza componentes de UI nativos, lo que garantiza una experiencia de usuario fluida y receptiva.
    *   **Comunidad Activa:** Una gran comunidad de desarrolladores asegura un buen soporte y una constante evolución del framework.

| Área                    | Tecnología Recomendada                               | Alternativas          |
| ----------------------- | ---------------------------------------------------- | --------------------- |
| **Framework**           | React Native                                         | Flutter               |
| **Lenguaje**            | TypeScript                                           | JavaScript (ES6+)     |
| **Navegación**          | React Navigation                                     | React Native Navigation |
| **Manejo de Estado**    | Redux Toolkit (RTK)                                  | Zustand, MobX         |
| **UI Kit**              | Componentes propios + React Native Paper (opcional)  | NativeBase, UI Kitten |
| **Mapas**               | `react-native-maps`                                  | Mapbox GL JS          |
| **Biometría**           | `react-native-keychain` / `react-native-biometrics`  | Librerías específicas |
| **Notificaciones Push** | Firebase Cloud Messaging (FCM)                     | OneSignal             |
| **Chat**                | Socket.IO / Firebase Realtime Database             | WebRTC para P2P       |

## 3. Arquitectura de la Aplicación

La aplicación seguirá una arquitectura modular y escalable, separando las responsabilidades en capas bien definidas.

### 3.1. Estructura de Directorios

```
mobile/
├── src/
│   ├── api/          # Lógica para interactuar con el backend (API REST)
│   ├── assets/       # Imágenes, fuentes, etc.
│   ├── components/   # Componentes de UI reutilizables (UI Kit)
│   ├── config/       # Configuración global (rutas, temas, etc.)
│   ├── hooks/        # Hooks de React personalizados
│   ├── navigation/   # Definición de stacks y navegadores
│   ├── screens/      # Pantallas principales de la aplicación
│   │   ├── Auth/
│   │   ├── Home/
│   │   ├── Profile/
│   │   └── ...
│   ├── store/        # Configuración de Redux (slices, store)
│   ├── utils/        # Funciones de utilidad
│   └── App.tsx       # Punto de entrada principal
├── android/
├── ios/
└── ...
```

### 3.2. Capas de la Arquitectura

1.  **Capa de Presentación (UI):**
    *   Compuesta por las **Pantallas (`screens`)** y los **Componentes (`components`)**.
    *   Las pantallas son responsables de componer la interfaz de usuario para una ruta específica.
    *   Los componentes son piezas de UI reutilizables (botones, inputs, tarjetas) que mantienen la consistencia visual.
    *   Esta capa es "tonta": su única responsabilidad es mostrar el estado actual y despachar acciones del usuario.

2.  **Capa de Lógica de Negocio (Manejo de Estado):**
    *   Gestionada por **Redux Toolkit (`store`)**.
    *   Define "slices" para cada dominio de la aplicación (ej. `userSlice`, `bookingsSlice`).
    *   Maneja el estado global de la aplicación, como la información del usuario autenticado, la lista de proveedores, etc.
    *   Utiliza `createAsyncThunk` para manejar las operaciones asíncronas (como las llamadas a la API) de una manera estandarizada.

3.  **Capa de Datos (Servicios):**
    *   Ubicada en el directorio `api/`.
    *   Contiene la lógica para comunicarse con el backend de LABURAPP.
    *   Abstrae las llamadas a la API REST (usando `axios` o `fetch`) para que puedan ser utilizadas por los thunks de Redux.

## 4. Navegación

Se utilizará **React Navigation** para gestionar el flujo entre pantallas. La estructura será una combinación de `Stack Navigators` y un `Tab Navigator`.

*   **Auth Stack:** Un stack para el flujo de autenticación (Login, Registro, Onboarding, Recuperación de Contraseña).
*   **Main Tab Navigator:** El navegador principal después del login, con pestañas para:
    *   **Home/Mapa** (Stack)
    *   **Mis Reservas** (Stack)
    *   **Chat/Mensajes** (Stack)
    *   **Mi Perfil** (Stack)
*   **Deep Linking:** Se configurará para permitir que las notificaciones push o enlaces externos abran pantallas específicas de la aplicación (ej. una reserva o un chat).

## 5. Manejo de Estado

Se recomienda **Redux Toolkit (RTK)** por su simplicidad, eficiencia y excelentes herramientas de desarrollo.

*   **Ventajas:**
    *   **Opinado y Estándar:** Reduce la cantidad de código repetitivo y sigue las mejores prácticas de Redux.
    *   **Inmutabilidad Simplificada:** Usa `Immer` por debajo para permitir "mutar" el estado de forma segura.
    *   **Caché de Datos con RTK Query (Opcional):** Puede simplificar aún más la obtención y el cacheo de datos del servidor, reduciendo la necesidad de escribir thunks manualmente.

## 6. Testing

*   **Unit Testing:** `Jest` y `React Native Testing Library` para probar componentes y lógica de Redux.
*   **Integration Testing:** Pruebas que abarcan múltiples componentes y su interacción con el estado de la aplicación.
*   **End-to-End (E2E) Testing:** `Detox` o `Appium` para automatizar flujos de usuario completos en un emulador o dispositivo real.
