# ECOMMERCE 🛒
[Link del ecommerce en producción](https://ecommerce-2022jlm.herokuapp.com/ "ABRIR")
Proyecto E-commerce Full - Stack 

### FRONT END 

Front end creado sin librerias, totalmente en Javascript Vanilla. Con procesador SASS. Utilizando metodología BEM y arquitectura MVC.
<br />
* HTML
* SASS
* JAVASCRIPT VANILLA


### BACK END

Back end con principio SOLID(cerrado para la modificación, abierto para la expanción). Modelo MVC con desacoplamiento de capas. Servicio en express. Uso base de datos no relacionales. Implemento pasarela de pago
<br />
* nodeJS
* express
* Mongo DB
* mongoose
* multer
* JOI
* mercadopago
<br />



### USO Y DESCARGA

* Tendra que tener instalado `nodeJS`,`npm`
* Descargue o clone el repositorio ->[Link](https://github.com/Jmoreyra93/ecommerce)
* Instale paquetes y modeulos con el siguiente comando `npm init`
* Luego puede correr el servidor con el siguiente comando `npm start`

### ACLARACIÓN Y MEJORAS

* El proyecto tiene integrado pasarela de pagos, la misma contiene un TOKEN que por obvias razones no está públicado. Tendrá que deshabilitar dicha API para probarlo con éxito
* Por default se le va a asignar un puerto, un tipo de memoria y CNX para base de datos. Configurelo con lo que usted desee:
    "`watch`": nodemon server.js
    "`start`": node server.js
    "`dev-mem`": PORT=3000&set TIPO=MEM&nodemon server.js" (memoria)
    "`dev-file`": PORT=5000&set TIPO=FILE&nodemon server.js" (file) 
    "`dev-mongo`": PORT=5000&set TIPO=MONGODB&set CNX=mongodb://localhost/ecommerce&nodemon server.js" (DATA BASE)
