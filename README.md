# Construye un portafolio con ReactJS

Este repositorio contiene los temas necesarios para construir una aplicación en **ReactJS** desde cero, configurando nuestro proyecto.

## Configuración (Parte 1 de 4)

### Configuración inicial del proyecto

Inicializamos el proyecto con npm

- **`npm init -y`**

Este comando nos crea automáticamente el `package.json` que tiene la configuración de nuestro, usando los elementos de forma estándar.


### Creación del proyecto base

En este ejemplo NO vamos a usar `create-react-app`, nosotros mismos vamos a crear la configuración de nuestro proyecto desde cero.

Vamos a crear las carpetas **src/** y **public/** para guardar nuestro código JavaScript y los archivos estáticos de nuestro proyecto como `index.html`, iconos, imágenes, entre otras.

El archivo **`src/index.js`** será el archivo principal de JavaScript donde vamos a importar el resto de componentes y contenedores de nuestra aplicación.

Vamos a crear nuestros _componentes visuales_ en la carpeta **`src/components`** y los _contenedores_ de estos componentes en la carpeta **_src/containers_**.

Todos nuestros componentes deben comenzar con una letra mayúscula a pesar de que los archivos sigan alguna otra convención.

Vamos a usar la versión 16.8.4 de React para tener disponibles los Hooks.

Para la instalación de React y ReactDOM usamos: npm install react react-dom --save

Recuerda que debemos añadir la carpeta node_modules al archivo .gitignore para no subirlos a Github ni a producción porque es una carpeta muy pesada y puede dañar nuestro proyecto.


Los comando a usar son los siguientes:

Como primer paso, debemos instalar _react_ y _react-dom_
- **`npm install react react-dom --save`**  El `--save` permite guardarlo como una dependencia, es decir un archivo necesario. 

**IMPORTANTE** Nunca enviar al repositorio la carpeta _`node_modules/`_

Ahora creamos los directorios necesarios en la raíz del proyecto

- **src/** Aquí es donde se coloca todo el código JS
- **public/** La carpeta contiene los archivos públicos que se enviarán a producción

- **src/components** Se crearán todos los componetes de la aplicación
- **src/container** 
- **src/index.js** Será el archivo de entrada de nuestro proyecto


Hay una convención en `React` donde siempre se inicializan los nombres de los elementos o componentes con la **_primera letra en mayúscula_**.


1. Creamos nuestro componentes [`About.jsx`](src/components/About.jsx) que va a ser del tipo presentacional, porque sólo va a mostrar información

```js
const About = () => (
  <h1>Hola mundo</h1>
);
```

Este tipo es un return explícito porque sólo tiene un elemento. También se podría dejar

```js
const About = () => <h1>Hola mundo</h1>
```

2. Ahora en el archivo [`index.js`](src/index.js) utilizamos reactDOM para renderizar nuestro elemento.

**ReactDOM.render(componente, donde_colocar)** recibe dos parámetros, el componente a renderizar y el lugar donde se va a mostrar.


3. Creamos el archivo `ìndex.html` en la carpeta **public/** donde se crea un `div` con el id **app** que es el que encapsulará nuestra app.


### Implementando Babel

Babel es una herramienta que nos ayuda a transpilar nuestro código con React y JavaScript moderno a código en JavaScript que pueden entender los navegadores.

Para configurar Babel debemos crear el archivo .babelrc, puedes descubrir todas las posibles configuraciones en: https://babeljs.io/docs/en/config-files

**Instalación de Babel:**

- `npm install @babel/core @babel/preset-env @babel/preset-react babel-loader --save` El flag `--save` agrega esta línea a las dependencias


Ahora creamos la configuración en babel con un archivo [**`.babelrc`**](.babelrc)

Ahora instalamos otro **plugin** que _interprete las funciones flecha_

- `npm install babel-plugin-transform-class-properties --save-dev `

Se usa el flag `--save-dev` porque se usa como una dependencia de desarrollo, sólo necesario para utilizarlo de  forma local


### Webpack

Webpack es una herramienta que nos puede ayudar a compilar todos nuestros archivos de JavaScript en un solo archivo o paquete que podemos usar en producción.

Vamos a escribir la configuración de Webpack en el archivo webpack.config.js, puedes aprender más sobre cómo configurar estos archivos en: https://webpack.js.org/configuration.

**Instalación de Webpack:** 

- `npm install webpack webpack-cli html-webpack-plugin html-loader --save-dev`

Ahora creamos el archivo [`webpack.config.js`](webpack.config.js) de configuración de `webpack`  


### Live Reload y webpack production

Vamos a usar _**Webpack Dev Server**_ para crear un servidor local que nos permita visualizar los cambios de nuestro proyecto en tiempo real, es decir, sin recargar el navegador.

Debemos instalar las siguientes dependencias: 

- **`npm install webpack-dev-server --save-dev`**

También, vamos a crear dos nuevos scripts en nuestro [`package.json`](package.json): **"build"** para compilar nuestro proyecto (para producción) y **"start"** para iniciar un servidor con live reload en el puerto `8080` (para desarrollo).

```js
"scripts": {
  "build": "webpack --mode production",
  "start": "webpack-dev-server --open --mode development"
}
```

Para _**correr estos scripts**_ debemos ejecutar el comando: `npm run NOMBRE_DEL_SCRIPT`

> Esto nos permite tener shorcuts en los comandos para evitar acordarnos de todo el comando en general.


Puedes encontrar más información sobre Webpack Dev Server y Live Reload en: https://webpack.js.org/configuration/dev-server/