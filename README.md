Ejemplo con Node.js
===================

Prueba de concepto iniciando un servidor web simple en  [localhost:8000](http://localhost:8000).

## Instrucciones
primero debe tener instalado el paquete de node en su equipo, se puede descargar del siguiente enlace [node.js](http://nodejs.org/download/).
una vez instalado, solo se deben instalar los paquetes que se requieren, esto se puede hacer en la consola en el directorio en donde se tenga el codigo fuente, linea de comando, con una de las siguientes instrucciones.

    npm install url
    npm install http
    npm install handlebars
    
ó simplemente
    
    npm install url http handlebars

Primero debe estar seguro que no tiene ninguna aplicacion respondiendo en el puerto 8000, si es asi puede cambiar en la linea :

    server.listen(<nuevo puerto>);

Para ejecutar el programa desde la consola ubicado en el directorio del programa:

    node app.js
    
si todo funciona correctamente puede probar el servidor web en el puerto 8000 ó en el puerto seleccionado.

 * [localhost](http://localhost:8000)
 * [localhost/index.html](http://localhost:8000/index.html)
 * [localhost/index.axl](http://localhost:8000/index.axl)
 
 el ejemplo de la plantilla interpreta el archivo con extension axl y cambia los tags **{{dateSystem}}, {{Owner}}** para este manejo de los tags personalizados estoy usando handlebars   
