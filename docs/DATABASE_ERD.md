# Diagrama de Entidad-Relación (ERD) - LABURAPP

Este documento contiene una representación visual del esquema de la base de datos de los servicios principales de LABURAPP, utilizando la sintaxis de Mermaid para generar un diagrama de Entidad-Relación.

```mermaid
erDiagram
    roles {
        INT role_id PK
        VARCHAR role_name
    }

    users {
        UUID user_id PK
        VARCHAR email
        VARCHAR password_hash
        INT role_id FK
        BOOLEAN is_active
    }

    user_biometrics {
        UUID biometric_id PK
        UUID user_id FK
        TEXT document_front_url
        TEXT selfie_url
        VARCHAR verification_status
    }

    user_profiles {
        UUID profile_id PK
        UUID user_id FK
        VARCHAR first_name
        VARCHAR last_name
        TEXT bio
    }

    certifications {
        UUID certification_id PK
        UUID user_id FK
        VARCHAR title
        VARCHAR institution
    }

    work_experiences {
        UUID experience_id PK
        UUID user_id FK
        VARCHAR job_title
        VARCHAR company_name
    }

    provider_locations {
        UUID location_id PK
        UUID user_id FK
        GEOGRAPHY location
        BOOLEAN is_available
    }

    users }o--|| roles : "tiene un"
    users ||--|| user_biometrics : "tiene datos biométricos"
    users ||--|| user_profiles : "tiene un perfil"
    users ||--o{ certifications : "tiene"
    users ||--o{ work_experiences : "tiene"
    users ||--|| provider_locations : "tiene una ubicación"
    users ||--o{ bookings : "realiza"
    users ||--|| wallets : "tiene una"

    bookings ||--o| reviews : "recibe una"

    wallets ||--o{ transactions : "registra"
    bookings }o--o| transactions : "genera"
```

### Descripción de las Relaciones

*   `users` y `roles`: Un rol puede ser asignado a muchos usuarios, pero cada usuario tiene un único rol (`muchos a uno`).
*   `users` y `user_biometrics`: Cada usuario tiene un único registro de datos biométricos (`uno a uno`).
*   `users` y `user_profiles`: Cada usuario tiene un único perfil (`uno a uno`).
*   `users` y `certifications`: Un usuario (proveedor) puede tener múltiples certificaciones (`uno a muchos`).
*   `users` y `work_experiences`: Un usuario (proveedor) puede tener múltiples experiencias laborales (`uno a muchos`).
*   `users` y `provider_locations`: Cada usuario (proveedor) tiene un único registro de su última ubicación conocida (`uno a uno`).
*   `users` y `bookings`: Un usuario puede ser el cliente o el proveedor en muchas reservas (`uno a muchos`).
*   `users` y `wallets`: Cada usuario tiene una única wallet (`uno a uno`).
*   `bookings` y `reviews`: Cada reserva puede tener una única reseña (`uno a uno`).
*   `wallets` y `transactions`: Una wallet puede tener muchas transacciones (`uno a muchos`).
*   `bookings` y `transactions`: Una reserva puede estar asociada a una transacción (`uno a uno`, opcional).
