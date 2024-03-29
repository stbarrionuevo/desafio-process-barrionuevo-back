
# README.md 

Mi proyecto consiste en el desarrollo de un backend para un ecommerce utilizando los patrones Factory, DAO y DTO.

# Descripción

El backend de la tienda en línea es una API REST que se encarga de gestionar los productos ,los mensajes que reciben los clientes y registrarse o iniciar sesión si es que existe un usuario ya creado. Para la persistencia de los datos se han utilizado los patrones DAO y DTO, y se ha implementado el patron Factory para seleccionar el DAO adecuado y evitar la creación de múltiples instancias.












## Instalación
Para instalar el proyecto es necesario clonar el repositorio y ejecutar el siguiente comando:


```bash
  npm install
```

Para ejecutar el proyecto, es necesario ejecutar el siguiente comando:

```bash
 npm start
```
    
## Uso

#### La API cuenta con los siguientes endpoints:

```http
/productos : dedicado para la gestion de productos
Cada endpoint acepta los métodos HTTP GET, POST, PUT y DELETE, y devuelve la respuesta del metodo solicitado.

GET -----> /productos  ; /productos/:id  ; /productos-test

POST -----> /productos/nuevo

DELETE -----> /productos/:id 
```





```http
 /info : brinda toda la información netamente técnica, como caracteristicas de versiones, path de ejecucion o sistema operativo al usuario a través de una tabla
```

```http
 /login : permite logearse con un usuario y autenticarlo

 A su vez en este endpoint, encontramos /register (para crear usuario) 
 y /logout (para cerrar la sesion del usuario)

 Como tambien la opcion de /logingoogle (logearse a través de googleauth)
```




## Autor

- [@santiagobarrionuevo](https://github.com/stbarrionuevo/desafio-process-barrionuevo-back)

