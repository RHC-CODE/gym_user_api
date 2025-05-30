# API de Gestión de Usuarios - Grupo 1
**Proyecto:** Plataforma de Administración de Gimnasio - Unicatólicos Reloaded GYM  
**Grupo:** 1 - Gestión de Usuarios  
**Integrantes:** Rober Ceballos, David Garcés, Juan Pablo  
**Fecha:** 2025-05-28

---

## Descripción General
Este módulo es responsable de gestionar las operaciones CRUD relacionadas con los usuarios registrados en el gimnasio mediante una API RESTful. Permite crear, consultar, actualizar, eliminar y asignar planes a los usuarios, además de consultar sus actividades.

---

## Información Base
- **URL Base:** `https://gym-user-api.vercel.app/`  
- **Ruta principal:** `/users`  

---

## Endpoints y Funcionalidades

### 1. Obtener todos los usuarios
- **Método:** `GET /users`  
- **Descripción:** Devuelve una lista con todos los usuarios registrados.  
- **Respuesta (200 OK):**  
```json
[
  {
    "id": "string",
    "nombre": "string",
    "apellido": "string",
    "dni": "string",
    "telefono": "string",
    "correo_electronico": "string",
    "enfermedades_base": true/false,
    "fecha_nacimiento": "YYYY-MM-DD",
    "edad": 0,
    "profesion": "string",
    "fecha_inscripcion": "YYYY-MM-DD",
    "antiguedad_meses": 0,
    "plan_id": "string",
    "fecha_plan_contratado": "YYYY-MM-DD",
    "fecha_caducidad_plan": "YYYY-MM-DD"
  }
]
```

---

### 2. Obtener un usuario específico
- **Método:** `GET /users/{id}`  
- **Descripción:** Consulta los detalles de un usuario mediante su ID.  
- **Respuesta (200 OK):** Datos del usuario.  
- **Errores:** 404 si no existe el usuario.

---

### 3. Crear un nuevo usuario
- **Método:** `POST /users`  
- **Descripción:** Añade un nuevo usuario a la base de datos.  
- **Body JSON:**  
```json
{
  "nombre": "string",
  "apellido": "string",
  "dni": "string",
  "telefono": "string",
  "correo_electronico": "string",
  "enfermedades_base": true/false,
  "fecha_nacimiento": "YYYY-MM-DD",
  "edad": 0,
  "profesion": "string",
  "fecha_inscripcion": "YYYY-MM-DD",
  "antiguedad_meses": 0,
  "plan_id": "string",
  "fecha_plan_contratado": "YYYY-MM-DD",
  "fecha_caducidad_plan": "YYYY-MM-DD"
}
```  
- **Respuesta (201 Created):** Datos del usuario creado.

---

### 4. Actualizar un usuario
- **Método:** `PUT /users/{id}`  
- **Descripción:** Modifica los datos de un usuario existente (puede ser parcial o completo).  

---

### 5. Eliminar un usuario
- **Método:** `DELETE /users/{id}`  
- **Descripción:** Elimina un usuario de la base de datos.

---

### 6. Asignar o actualizar plan a un usuario
- **Método:** `PUT /users/{id}/assign-plan/{planId}`  
- **Descripción:** Vincula o modifica el plan vigente del usuario.  

---

### 7. Obtener el plan asignado a un usuario
- **Método:** `GET /users/{id}/plan`  
- **Descripción:** Consulta el plan actualmente asociado al usuario.

---

### 8. Ver actividades a las que asistió un usuario
- **Método:** `GET /users/{id}/activities`  
- **Descripción:** Lista las actividades a las que ha asistido el usuario.

---

## Modelo JSON del Usuario
```json
{
  "id": "string",
  "nombre": "string",
  "apellido": "string",
  "dni": "string",
  "telefono": "string",
  "correo_electronico": "string",
  "enfermedades_base": true/false,
  "fecha_nacimiento": "YYYY-MM-DD",
  "edad": 0,
  "profesion": "string",
  "fecha_inscripcion": "YYYY-MM-DD",
  "antiguedad_meses": 0,
  "plan_id": "string",
  "fecha_plan_contratado": "YYYY-MM-DD",
  "fecha_caducidad_plan": "YYYY-MM-DD"
}
```

---

## Códigos de Estado
- `200 OK` — Solicitud exitosa.
- `201 Created` — Recurso creado correctamente.
- `400 Bad Request` — Datos inválidos en la solicitud.
- `404 Not Found` — Recurso no encontrado.
- `500 Internal Server Error` — Error en el servidor.

---

## Notas adicionales
- La API responde en formato JSON.
- Actualmente, no se implementa autenticación ni autorización.
- Para despliegue local, configurar la variable de entorno `MONGO_URI`.
- La gestión de actividades y planes se realiza en módulos complementarios.

---

## Tecnologías utilizadas
- Node.js con Express.js
- MongoDB Atlas mediante Mongoose
- Despliegue en Vercel
- Control de versiones en GitHub

---

## Autor y pruebas
Este documento ha sido elaborado por el grupo 1 (Rober Ceballos, David Garcés, Juan Pablo).  
Se han realizado pruebas en Insomnia y Postman para verificar la correcta funcionalidad de los endpoints.