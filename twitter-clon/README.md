# Twitter-Clon 

## Descripcion

Esto es un backend con un clon de twitter que armamos con fines
educativos para la camada 2520 curso Backend.

## Objetivo

En la construccion de este backend se repasan conceptos 
que se estuvieron viendo en clases anteriores como se 
programacion funciona, ES6, Express, Rutas, Api Rest,
uso de mongodb y Mongoose entre otros.

## Dependencias

- mongodb instalado y ejecutandose
- NodeJs
- NPM
- Editor al gusto del desarrollador

## Como levantar el proyecto

**Clone e instalar dependencias**
> git clone urlproyecto
> cd twitter-clon
> npm install

**Arrancar el proyecto**
> npm start

## Rutas

## Rutas


### "/"

- **GET** Devuelve las rutas del proyecto.

### "/register/"

- **POST** Crea un usuario y registra un usuario
  - Datos necesarios: name, lastname, mail, password.

### "/login/"

- **POST** Crea un token para hacer las siguientes llamadas.

### "/users/"

- **GET** Devuelve el listado de Usuarios
- **GET** + **id** Devuelve un usario por su ID
- **POST** Crea un usuario
- **PUT** + **id** Update de un usuario por ID
- **DELETE** + **id** Borra un Usuario

### "/tweets/"

- **GET** Devuelve el listado de tweets
- **GET** + **id** Devuelve un tweet por su ID
- **POST** Crea un Tweet
- **PUT** + **id** Update de un tweet por ID
- **DELETE** + **id** Borra un tweet
