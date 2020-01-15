# Construye un portafolio con ReactJS: **Componentes-Hooks** (Parte 2 de 4)

En este curso vamos a crear un portafolio de proyectos usando ReactJS, desde cero hasta producción y con herramientas como React Hooks y Styled Componentes. Recuerda que es recomendable tener algunos conocimientos básicos sobre HTML, CSS y JavaScript (ES6)

## Proyecto Portafolio

En esta clase vamos a construir la estructura base de nuestros componentes.

Todos los elementos de nuestro proyecto son componentes; átomos que en conjunto se pueden convertir en bloques o moléculas y así sucesivamente hasta construir el total de nuestra aplicación. Gracias a esto conseguimos una aplicación donde los cambios y las nuevas características son fáciles y rápidos de implementar.

:star: Puedes aprender más sobre cómo funciona atomic design en: https://platzi.com/blog/por-que-atomic-design/


Los componentes a utlizar son los siguientes

- **Main** Contendrá todo el encapsulado de nuestra aplicación
- **Sidebar** Contendrá los componentes de la barra lateral
- **Info** Contendrá toda la información de educación, experiencia, etc.

Algunos subcomponentes para este componente serán:
  - Education
  - Experience
  - Certificates
  - Skills
- **Redes sociales**

Primero creamos los componenentes necesarios en el directorio _componentes_.

Luego de crear los archivos necesarios para los componentes, creamos dentro de la carpeta **_container_** el archivo [App.js](../src/container/App.jsx) que es el será nuestro contenedor principal del sitio web.


## Programando el contenido de los componentes

Vamos a construir cada uno de los componentes de nuestra aplicación respetando la estructura que definimos en la clase anterior.

En este caso, la mayoría de componentes tienen una estructura muy parecida, nuestras **_clases_** van a seguir la convención de comenzar con el _nombre de cada componente seguido de un guión_ y la función de los componentes hijos de nuestros componentes.

Por ejemplo:
```js
<div className="Main">
  <div className="Main-container">
    {children}
  </div>
</div>
```

Más adelante vamos a consumir una API con los datos reales de nuestro portafolio, por ahora, solo vamos a utilizar información de prueba para terminar de construir los componentes visuales.


Empezamos la construcción del componente que será un componentes funcional [Main.js](../src/components/Main.jsx) y el componente [Sidebar.js]((../src/components/Sidebar.jsx))


**Recomendación** Revisar siempre el código antes de trabajar en otro para evitar dolores de cabeza más adelante y poder corregir los errores a tiempo. Una revisada antes nos convertirá en mejores desarrolladores.

Al igual, el componente _Info.jsx_ será contenedor  de otros componentes.

Ya con eso, tenemos los 3 principales componentes que encapsularán los demás componentes.


## Programando nuestro componente de skills

Todos los días encontramos componentes muy parecidos entre sí y nuestra es responsabilidad pensar cómo podemos optimizarlos para hacerlos reutilizables.

En este momento la estructura de nuestro proyecto está prácticamente lista y podemos visualizarla en el navegador. Más adelante vamos a utilizar styled-componentes para añadir los estilos visuales de nuestro diseño.

Para esta sesión se termina de realizar los componentes necesarios para la implementación de nuestro contenedor [App.jsx](../src/container/App.jsx)


```html
<Main>
  <Sidebar>
    <About />
  </Sidebar>
  <Info>
    <Education />
    <Experience />
    <Certificates />
    <Skills />
  </Info>
</Main>
```

## Introducción a React Hooks

**React Hooks** son una _nueva característica de React_ que nos permite añadir estado (con useState) y ciclos de vida (con useEffect) a nuestros componentes funcionales, es decir, componentes creados con funciones, no como clases heredadas de React.Component.

También podemos crear nuestros propios Custom Hooks para reutilizar la lógica de nuestros componentes en cualquier otra parte de la aplicación.

Gracias a React Hooks podemos crear un código más claro y simple. Sin embargo, no es necesario que implementemos estas funcionalidades a nuestros proyectos ahora mismo, podemos hacer la transición a medida que crecen nuestras aplicaciónes y entendemos mucho mejor cómo utilizar los hooks de manera correcta.

Puedes aprender más sobre otros hooks que tenemos disponibles de manera oficial o creados por la comunidad en: https://reactjs.org/docs/hooks-overview.html



## Implementando Hooks en nuestro componente

Vamos a crear la carpeta **_src/hooks/_** para guardar nuestros custom hooks. Además. Nuestros hooks tiene _3 tareas_: manejar el estado, conseguir información y entregarle esta información a nuestros componentes a través del estado.

Por convención, todos nuestros custom hooks deben empezar con palabra use y usar camelCase, por ejemplo: useDarkMode, useLocalStorage o useJSONAPI.

Recuerda que la función useEffect NO es un reemplazo de los ciclos de vida de los componentes con clases, más bien, es una nueva forma de trabajar en componentes funcionales.

En esta clase vamos a crear el archivo [**`src/hooks/useGetData.js`**](../src/hooks/useGetData.js) para traer la información de nuestro currículum desde una API.

Los hooks como no tienen una lógica visual entonces no hay necesidad de llamarlos `.jsx` sino `.js`


## Conectar datos en la aplicación

Nuestros componentes visuales solo muestran texto de prueba, por ahora. Vamos a usar el custom hook que acabamos de crear, la función `useGetData()`, para reemplazar la información de prueba por los datos reales que obtenemos de nuestra API.


> Como **recomendación** colocar los nombres de las propiedades igual a los nombres que vienen en la API