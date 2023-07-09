* #### Por el momento se encuentra aun en el desarrollo del back-end con los endpoints basicos para su manejo, aun falta la incorporacion con unsa base de datos y la creacion de un front-end para admiministrar los servicios que ofrece esta api*
# Tecnm Classroom Api
## El proposito del desarrollo de esta aplicacion es crear grupos de classroom usando la api de google cloud y invitar de forma automatica a los maestros y alumnos a sus respectivos grupos


### Documentacion y guias para levantar de manera propia la apliacion

1. [Crear una apliacion en google cloud](https://console.cloud.google.com/)
2. [Leer hasta la parte de la configuracion de OAUTH](https://stateful.com/blog/gmail-api-node-tutorial)
3. [Informacion sobre el paquete npm de las apis de google](https://www.npmjs.com/package/googleapis)
4. [Informacion sobre la api de classroom](https://developers.google.com/classroom/reference/rest?hl=en)

### Configurar las variables de entorno correspondientes que se meustran en el template para tener acceso a la apliacion creada en google cloud
* API_KEY
* CLIENT_ID
* CLIENT_SECRET
* REDIRECT_URI
* REFRESH_TOKEN

### Configurar variables de entorno de la base de datos mysql
* USER
* PORT
* PASSWORD
* DATABASE
* HOST
### Posteriormente deberemos navegar al siguiente directorio __database/config__ y ejecutaremos en nuestro servicio de mysql los siguiente tres archivos 
1. databaseCrea.sql
2. seed.sql
3. views.sql


### Instalar y levantar aplicacion todas las depencias necesarias __ejecutar en terminal__

```
  1. yarn 
  2. yarn dev
```

## Endpoints de la api creados

* ### Endpoint de cursos
  * #### Crea, muestra y elimina los cursos creados en el proyecto dependiendo del metodo con el que se ejecute la request
  * http://localhost:3000/api/courses

    1. Metodo __GET__ con este metodo podemos enviar un query parameter el cual tendra el nombre de __nameCourse__ con el cual podremos solicitar cursos con este nombre, en el caso de que no sea enviado la respuesta seran todos los cursos existentes
  
    2. Metodo __POST__  creaun curso nuevo, se planea que este lea de la base de datos los grupos a crear y los cree de manera automatica sin recibir ningun tipo de informacion en la request, devuelve toda la informacion del curso creado
    3. Metodo __DELETE__ borra todos los cursos existentes el el proyecto pero se planea implemenatar la funcionalidad de que al recibir el id de un curso en el cuerpo de la request este solo borre el curso deseado, para que esto funcione debemos navegar manualmente a nuestra cuenta de classroom y aceptar la invitacion al curso

* ### Endpoint de maestros y alumnos
  * #### Por el momento solo es capaz de enviar una solicitud a los usuarios para unirse al curso especificado
  * http://localhost:3000/api/teacher
  * http://localhost:3000/api/students

    1. Metodo __POST__ envia una invitacion de forma automatica al correo electronico del usuario indicado para unirse al curso en el rol que se especifica en la request, de momento trabaja con un ejemplo estatico pero lo optimo es que lea de la base de datos y envie las invitaciones a todos los miembros futuros del curso con su respectivo rol

* ### Endpoint de pruebas a la base de datos
  * #### Prueba la coneccion a la base de datos y retorna los valores que solicitemos
  * http://localhost:3000/api/testing
