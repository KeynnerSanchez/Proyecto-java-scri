# El Rincón del Carmen

Proyecto web desarrollado como plataforma de reservas para un hotel turístico inspirado en interfaces modernas tipo Airbnb.  
La aplicación permite visualizar habitaciones, registrarse, iniciar sesión, agregar favoritos y realizar reservas de manera dinámica utilizando JavaScript y almacenamiento local.

---

# Descripción del proyecto

El proyecto consiste en una página web interactiva para un hotel llamado **El Rincón del Carmen**, donde los usuarios pueden:

- Visualizar habitaciones disponibles.
- Buscar habitaciones por ciudad o nombre.
- Registrarse e iniciar sesión.
- Agregar habitaciones a favoritos.
- Reservar habitaciones.
- Cancelar reservas.
- Ver información de contacto del hotel.

Toda la información se administra mediante archivos JSON y `localStorage`, simulando el funcionamiento de una base de datos.

---
# Mockup del proyecto

[Ver mockup en Figma](https://www.figma.com/proto/EPgYkmWFWSIQNpXoxyVz2t/Mockup-Proyecto-JavaScript?node-id=1-844&t=p71IG0A4wGHC26pN-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1)

# Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript
- JSON
- LocalStorage
- Font Awesome

---

# Estructura del proyecto

```bash
proyecto-hotel
│
├── assets
│   ├── data
│   │   ├── habitaciones.json
│   │   └── usuarios.json
│   │
│   └── img
│
├── css
│   └── style.css
│
├── js
│   ├── auth.js
│   ├── contacto.js
│   ├── database.js
│   ├── favoritos.js
│   ├── index.js
│   ├── navbar.js
│   └── reservas.js
│
├── contacto.html
├── index.html
├── login.html
├── register.html
└── reservas.html
```

---

# Funcionalidades principales

## Sistema de autenticación

- Registro de usuarios.
- Inicio de sesión.
- Persistencia de sesión con `localStorage`.

## Sistema de favoritos

- Los usuarios pueden guardar habitaciones favoritas.
- Los favoritos se almacenan por usuario.

## Sistema de reservas

- Reserva de habitaciones disponibles.
- Cancelación de reservas.
- Validación para permitir una sola reserva activa por usuario.

## Buscador dinámico

- Filtrado de habitaciones por nombre o ciudad.

## Diseño responsive

- Adaptación para computadores, tablets y dispositivos móviles.

---

# Manejo de datos

## habitaciones.json

Contiene:

- Nombre de la habitación.
- Precio.
- Ciudad.
- Servicios.
- Fechas disponibles.
- Imágenes.
- Estado de reserva.

## usuarios.json

Archivo destinado al almacenamiento inicial de usuarios.

---

# Diseño e interfaz

La interfaz fue desarrollada con un diseño moderno inspirado en plataformas de reservas como Airbnb, utilizando:

- Cards dinámicas.
- Carruseles de imágenes.
- Navbar responsive.
- Hero banner.
- Formularios estilizados.
- Scroll personalizado.

---

# Cómo ejecutar el proyecto

1. Descargar o clonar el repositorio.
2. Abrir la carpeta del proyecto en Visual Studio Code.
3. Ejecutar el proyecto con una extensión como **Live Server**.
4. Abrir `index.html` en el navegador.

---

# Páginas del proyecto

## Inicio

Muestra habitaciones recomendadas y acceso rápido a reservas.

## Reservas

Catálogo completo de habitaciones con buscador y sistema de reserva.

## Login

Inicio de sesión de usuarios registrados.

## Registro

Creación de nuevos usuarios.

## Contacto

Información del hotel, ubicación y medios de contacto.

---

# Persistencia de datos

El proyecto utiliza `localStorage` para:

- Guardar usuarios registrados.
- Mantener sesiones activas.
- Guardar favoritos.
- Administrar reservas.

---

# Autor
**Keynner Sanchez**
**Santiago Morantes**  
Estudiantes de programación y desarrollo de software.

---

# Estado del proyecto

✅ Proyecto funcional  
✅ Responsive  
✅ Manejo dinámico de datos  
✅ Sistema de autenticación  
✅ Sistema de reservas  
✅ Persistencia local de información