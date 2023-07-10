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
* REFRESH_TOKEN __debe ser actualizado cada 24h por temas de funcionalidad de el OAUTH2 de google__

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


### Instalar las depencias necesarias y levantar la __ejecutar en terminal__

```
  1. yarn 
  2. yarn dev
```

## Endpoints de la api creados

* ### Endpoint de cursos
  * #### Crea, muestra y elimina los cursos creados en el proyecto dependiendo del metodo con el que se ejecute la request
  * http://localhost:3000/api/courses

    1. Metodo __GET__ con este metodo podemos enviar un query parameter el cual tendra el nombre de __nameCourse__ con el cual podremos solicitar cursos con este nombre, en el caso de que no sea enviado la respuesta seran todos los cursos existentes
    2. Metodo __POST__ lee de la base de datos los cursos y posteriormente los crea en classroom, devuelve true si todos los cursos fueron creados y false en caso de que alguno fallara
    3. Metodo __DELETE__ borra todos los cursos existentes el el proyecto pero se planea implemenatar la funcionalidad de que al recibir el id de un curso en el cuerpo de la request este solo borre el curso deseado

  * #### Nota del metodo POST: 
    * Asigna como propietario del curso a la cuenta de la que es llamada la peticion (nuestra cuenta propia), se planea incorporar la funcionalidad de que el curso sea asignado al maestro correspondiente y no se alojen todos en una sola cuenta para mejor administracion de los cursos
    
  * #### Nota del metodo DELETE: 
    * Para que los cursos sean eliminados debemos aceptar la invitacion a estos en nuestra cuenta de clasrroom de manera manual, no deberemos archivarlos ya que el metodo se encarga de realizar este proceso en todos los cursos, se planea corregir este detalle para lograr una forma mas automata del manejo de los cursos

* ### Endpoint de maestros y alumnos
  * #### Por el momento solo es capaz de enviar una solicitud a los usuarios para unirse al curso especificado
  * http://localhost:3000/api/teacher
  * http://localhost:3000/api/students

    1. Metodo __POST__ envia una invitacion de forma automatica al correo electronico del usuario indicado para unirse al curso en el rol que se especifica en la request, dependiendo del endpoint deberemos mandar algunos de los roles que estan definidos en __types/memberRoles.ts__ regresa true en caso de que las invitaciones sean enviadas correctamente y false en caso de que alguna falle

* ### Endpoint de pruebas a la base de datos
  * #### Prueba la conexion a la base de datos y retorna los valores que solicitemos en formato json
  * http://localhost:3000/api/testing


## Sobre el paquete __MYSQL2__

* ### Por temas del leguaje de programacion que en este caso es typescript, no se encotro manera de trabajar las consultas a la base de datos en forma de funcion async-await, en cmabio se trabaja con callbacks para poder tipar las respuestas de forma sencilla solo extendidola de la interface __RowDataPackage__, en caso de trabajarse con javascript puede trabajarse de manera async-await sin problema alguno

* ### Los valores semilla en la base de datos son de prueba, ningun correo electronico servira para corroborar que las invitaciones de los endpoints __http://localhost:3000/api/teacher__ y __http://localhost:3000/api/students__ fueron enviadas correctamente a su destinatario

* ### En caso de no usar el puerto 3306 que viene por defecto en mysql se recomienda que en la parte de la configuracion de la base de datos en __database/db.ts__, se coloque de manera directa el puerto correspondiente de nuestra maquina, esto debido a que se encontro que al leerla de las varibles de entorno esta presenta un error debido a que el parametro del puerto es un valor numerico y al usarse la funcion __Number(value)__ provoca una exepcion por timeout al realizar la conexion

* ### Puede usarse cualquier otra base de datos que necesitemos o querramos, solo deberemos elminar las dependencias del paquete __mysql2__ y instalar y configurar el paquete cliente de la base de datos que querramos manejar, deberemos ajustar los metodos acorde a como funcionen las consultas del cliente que sea instalado en el archivo __database/db.ts__, los metodos de todos los endpoints seguiran funcionando correctamente