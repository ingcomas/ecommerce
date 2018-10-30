# E-COMMERCE

### Obtener información.

## Setup

### Organización

#### Módulos

Hagan un `fork` de [este repo](https://github.com/ingcomas/ecommerce) para trabajar.

Primero que nada este proyecto se divide en dos partes o módulos, el front y el back. Fíjense que ambas carpetas tienen `package.json` distintos, osea que cada uno corre aparte y por ende van a tener que interactuar vía **HTTP**.

Tenemos ya armadas una guía de carpetas para que se organicen, pueden modificarlas a gusto.

#### Front-End

```bash.
├── dist
├── src
│   ├── /assets
│   ├── /components
│   ├── /containers
│   ├── /redux
│   │   ├── /actions
│   │   ├── /reducers
│   │   └── store.js
│   ├── /utils
│   └── index.js
├── package.json
└── webpack.config.js
```

* __dist__: Carpeta destino del output de webpack y archivos a servir.
* __src__: Carpeta donde estará el código fuente del front-end de nuestra app.
    * __assets__: Imágenes y otros archivos estáticos. 
    * __components__: Todos nuestros componentes de REACT.
    * __containers__: Nuestros containers de REACT.
    * __redux__: Todo lo relacionado con redux.
    * __utils__: Funciones comunes a todos, si es que hay.


#### Back-End

```bash.
.
├── /models
├── /config
├── /routes
├── /utils
└── package.json
```

    * __models__: Modelos de la base de datos.
    * __config__: Cualquier estructura de configuración que pueda ir aislada como autenticación o conexiones a la db.
    * __routes__: Los archivos de rutas.
    * __utils__: Funciones comunes a todos, si es que hay.

### Dependencias

Corremos `npm install` en ambas carpetas para tenes las dependencias básicas.

Pueden necesitar algún otro paquete, de ser el caso agréguenlo ustedes!

> Atentos al back que queda abierta la elección de Base de Datos, cuando se decidan por MongoDB o PostgreSQL instalen las respectivas dependencias.



## Alcance

### Objetivo

Vamos a listar las funcionalidades básicas para que piensen cuantas vistas necesitan.

Con la App podremos:

* Products
    ├── ver la lista de productos
    ├── filtrar productos por categoria
    ├── buscar productos por nombre
    └── ver los detalles de un producto individual, incluyendo descripciones, fotos y reviews)
* Carrito
    ├── Agregar items al carrito desde la lista de productos, o de la lista de detalles.
    ├── sacar items del carrito
    ├── editar la cantidad del productos que quiero en mi carrito.
    ├── estos datos deberian persistir, de tal forma de no perder el carrito ( pueden usar ├── ├── sessionStorage, localStorage, cookies o JWT para esto).
    └── Si me logeo en mi cuenta, deberia poder seguir editante el carrito que ya tenia.
* Checkout
    ├── comprar los productos en el carrito.
    ├── especificar la direccion de entrega de los productos, y mi direccion de email.
    recibir una confirmacion en un mail despues del checkout
    ├── recibir una notificacion por email, cuando la orden sea despachada, y cuando sea entregada
* Manejo de cuentas
    ├── poder crear cuentas, para poder realizar ciertas actividades, como dejar un review.
    └── podernos logear con Google o Facebook.
### Usuarios autenticados
* Manejo de cuentas
    ├── ser capaz de desloggearme
    ├── ver mi lista de ordenes anteriores
    ├── ver los detalles de ordenes anteriore, incluyendo estatus de la orden
    ├── items con cantidad y subtotal
    ├── link a la página del producto original
    └── dia en que fue creada
* Reviews
    └── ser capaz de dejar reviews a los productos (incluyendo 5-star rating)
### Admin Users
* Product Managment
    ├── crear y editar productos con nombre, descripción, precio y y una o mas fotos
    ├── crear categorias para items
    ├── agregar/crear categorias para items
    ├── los items deben tener multiples categorias
    ├── Manejar la disponibilidad del producto
        └── Si un productos no esta disponible, los usuarios no lo van a ver mientras buscan, pero si pueden ver la página de los detalles si lo ordenaron previamente, o tienen el link
* Manejo de ordenes
    ├── ver la lista de todas las ordenes
    ├── filtrar por status (creado, procesando, cancelado, completado)
    ├── ver mas detalles de una orden específica
    └── Cambiar el status de la orden (creado, -> procesando, -> cancelado, -> completado)
* Manejo de usuarios
    ├── Promover otros usuarios para que sean admin
    └── borrar usuarios

### Parte uno:

Vayan de a pasos pero todo va a estar conectado, una gran habilidad es saber diferenciar react, react-router y redux!

En la primera parte nos concentramos en el _front end_ solamente.

> Pueden usar todos los workshops anteriores como guía.

### Parte dos:

La segunda parte es la api/servidor, necesitamos poder guardar los usuarios y sus favoritos. 

Van a tener que decidir que base de datos utilizar y por ende que ORM vamos a usar.

> Pueden usar todos los workshops anteriores como guía.

## Front-End

### Componentes

Antes de empezar a codear, vamos a pensar un diseño para nuestra página y hacer una lista con los __componentes__ y __containers__ que vamos a tener.
Empezaremos por los más pequeños y simples (los puramente presentacionales sobre todo). 
Cuando nos toque crear un __container__ de _Redux_ pensaremos las props del _Estado_ que vamos a mapear al container y las acciones que van a disparar. Luego codearemos primero las acciones, luego los reducers y por último el Container.

### Rutas

Nuestra aplicación tiene que tener un set de rutas ya definido para hacer la pagina navegable.

* `/`: la ruta de home que tiene un input para hacer la búsqueda.
* `/search`: tiene que mostrar los resultados de la búsqueda (un listado de resultados).
* `/movie/:movieId`: muestra los detalles de una película en particular.
* `/favs/`: muestra un listado de las películas favoritas, (cuando tengamos usuarios puede que esta ruta cambie).
* `/user/:userId`: va a mostrar el perfil del usuario (créenla aunque todavía no la usemos).

> Para poder emular lo de guardar a favoritos, vamos a guardar las películas favoritas en el __Estado__ de nuestra aplicación.

### Estado

Necesitamos un estado que administre la aplicación, piensen bien como va a estar compuesto.

Usen react-redux para manejar el estado, con sus actions y reducers.

No se olviden de la documentación! 

* [Redux](https://redux.js.org/basics)

* [React-Redux](https://github.com/reactjs/react-redux)

### Extra

Si terminaste rápido intentá implementar animaciones con estos [addOns](https://facebook.github.io/react/docs/animation.html) de React.

También pueden diferenciar la búsqueda entre series y películas, ¿esto implicaría crear otra ruta?

## Back-End

### Base de Datos:

Ahora vamos a tener que crear un back-end, en donde podamos persistir información de los usuarios que utilizan la app.

Vamos a comenzar eligiendo una BD, y creando un modelo tal que soporte los features propuestos.

Para el logeo vamos a utilizar [passport.js](http://passportjs.org/). Pueden guiarse siguiendo [estos pasos](https://github.com/atralice/BackEnd/tree/master/05-Autenticacion#passport-js).

### Rutas

Vamos a tener que distinguir las rutas en archivos distintos.

Pueden guiarse en estas rutas o armar las suyas.

* `/auth`: pueden usarlo para guardar todas las rutas de logeo y registro.
* `/users`: todo lo referente a un usuario.
* `/favourite`: rutas relacionadas a los favoritos de películas.

### Postman

Vamos a probar que todo nuestro back funcione utilizando Postman antes de pasar al front-end.

Pueden hacer que necesites estar loggeado para navegar (middelwares??)

## Integración

### Unión

Ahora vamos a buscar que el front no mantenga la información en memoria si no que las guarde en la base de datos. 

Lo primero que deberíamos hacer son los formularios de logeo y registro, y pensar algún __Componente__ que envuelva todo y te _Deje pasar_ si estas logeado, si no no.

Si los componentes fueron codeados de forma ordenada, lo único que deberíamos hacer es que cuando una película es guardada como favorita en el _Estado_, también se guarde en la base de datos (controlar en qué orden se deberían realizar estas dos acciones).

### Extras

Mantener la sesión ante un refresh o cierre del browser. 

Agregá la funcionalidad de poder logearte con `facebook` usando passport.