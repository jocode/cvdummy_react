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


Ahora en **Github** configuramos la rama _develop_ como default para hacer deploy.

- Nos registramos en travis-ci.org, con nuestra cuenta de Github.

- En Github, vamos a `Settings/Developer settings/Personal access tokens` y creamos un nombre para el token de Travis. Puede ser `travis-org`.

- Damos los permisos para que Travis mande commits a nuestro token.
  - repo 
  - admin:repo_hook 

Damos click en generar Token y vamos a Tavis copiando el _hash del token_


En Travis, vamos a Settings, buscamos el repositorio, le damos **habilitar y editar**. Ahora buscamos el apartado de variavles de entorno y colocamos un nombre para el Token **GITHUB_TOKEN** y en value copiamos el valor del hash.

> **IMPORTANTE** No debes compartir en ningún lado este Token, este token se queda entre github y Travis, porque permite modificar los repositorios.


**Configuramos en archivo de configuración en el proyecto**

Ahora creamos el archivo [`.travis.yml`](../.travis.yml) que será el que tendrá la configuración del proyecto, indicandole el lenguaje de programación y algunas configuración para hacer deploy con github.

Ahora en Travis, vamos al proyecto que vamos a hacer deploy y damos clic en **Trigger Build** y damos clic en el botón.
Esto hará que travis compile nuestro proyecto para mandarlo a producción.


En caso que tengamos un dominio personalizado usamos la siguiente línea en `.travis.yml`

- `echo 'johanmosquera.com' > public/CNAME`


¡Felicitaciones por terminar este primer Curso de React JS!

Aprendiste a configurar un proyecto desde cero con babel y Webpack, crear una estructura de archivos y carpetas para tus componentes, usar React Hooks para consumir tu API, estilizar tus componentes con Styled Components y hacer deploy de tu aplicación con Travis CI y Github Pages.

No olvides que vamos a seguir creando cursos para toda la comunidad de Facebook Developer Circles y #NuncaParesDeAprender.
