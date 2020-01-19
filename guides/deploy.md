# Construye un portafolio con ReactJS: Deploy (Parte 4 de 4)


## Optimización para SEO

Buenas prácticas de SEO para nuestras aplicaciónes:

1.  Especificar el idioma de nuestra aplicación con el atributo `lang=""` de nuestra etiqueta `<html>` en el archivo [`public/index.html`](../public/index.html)

2.  Crear una meta-etiqueta para soportar caracteres especiales del español: `<meta charset=""utf-8"" />`

3. Crear otra _meta-etiqueta_ para soportar la versión _**responsive**_ de nuestra aplicación: `<meta name=""viewport"" content=""width=device-width, initial-scale=1"" />`

4. Especificar la _URL canónica_ para evitar contenido duplicado en los buscadores (podemos usar el paquete favicons-webpack-plugin para facilitar este proceso): `<link rel=""canonical"" href=""url"" />`

5. Añadir nuestro nombre como autores de la aplicación: `<meta name=""author"" content=""tu nombre"" />`

6. Crear un archivo `manifest.json` donde podemos especificar algunas propiedades de nuestro proyecto para los navegadores: `<link rel=""manifest"" href=""assets/manifest.json"" />`

7. Añadir una _descripción_ para nuestro proyecto:` <meta name=""description"" content=""tu descripción o biografía"" />`

8. Añadir algunas _palabras clave_: `<meta name=""keywords"" content=""nombre, apellido, tecnologías, entre otras"" />`


Instalamos el paquete _favicons-webpack-plugin_ como dependencias de desarrollador

- **`npm install favicons-webpack-plugin --save-dev`**


Luego ejecutamos el comando **npm run build** para construir nuestro proyecto que se enviará a producción. Si se presenta problemas con _favicons-webpack-plugin_ se baja a una versión anterior puede ser `^2.0.0` en el `package.json`.


## Travis CI, Github Pages y Firebase Hosting

Vamos a dividir nuestro proyecto por ramas: develop para trabajar nuestra aplicación y master para conectar nuestro repositorio con el servidor de producción.

**Travis CI** es un servicio que nos ayuda a crear un script para hacer deploy de nuestro repositorio a un servidor en la nube, vamos a generar un nuevo commit en la rama master cada vez que nuestros cambios en la rama develop pasen las pruebas con la configuración de Travis en el archivo .travis.yml.

Más información sobre Travis CI: https://travis-ci.org
Más información sobre Github Pages: https://pages.github.com


### Github

Creamos una nueva rama llamada Develop

- `git checkout -b develop`

- `git status`

- `git add .`

- `git commit -m "Message"`

- `git push origin develop`