# Construye un portafolio con ReactJS: **Estilos** (Parte 3 de 4)

## Estilos y animaciones con **Styled Components**

React nos permite estilizar nuestros componentes con estilos en línea, sin embargo, este método tiene algunas limitaciones: debemos usar camelCase en vez de la sintaxis normal con guiones (por ejemplo, font-size lo declaramos como fontSize), no podemos usar la propiedad :hover o ningún otro pseudo-selector, no podemos estilizar clases ni usar la herencia de componentes, no podemos definir animaciones, entre otras limitaciones.

Afortunadamente, herramientas como styled-components nos ayudan a crear nuestros estilos en componentes de React con JavaScript sin perder las características de CSS, de hecho, conseguimos algunos beneficios extra al juntar ambos lenguajes: CSS y JavaScript.

Instalación de styled-components: 

- **`npm install styled-components --save`**

Más información sobre styled-components en: https://www.styled-components.com

Para usar styled-components, debemos importar la bibliotecay utilizar los valores css que deseemos

```js
import styled from 'styled-components';

const AboutStyle = styled.div`
  text-align: center;
`;

// Se llama el componene con el nombre que le definimos en el estilo
const About = ({ avatar, name, profession, bio, address, social }) => (
  <AboutStyle className="About">
      <div className="About-container">
      </div>
    </AboutStile>
);
```


## Terminando los estilos del componente About

Una de las características de styled-components es que podemos definir los estilos de nuestros elementos sin preocuparnos por los nombres de las clases, styled-components lo hace por nosotros, además, se encarga de que nunca se repitan clases entre componentes diferentes, así nos aseguramos de que nuestros estilos se aplican sólo a los elementos que nosotros necesitamos y no tenemos errores de estilos en nuestra aplicación.

Puedes buscar tus fuentes favoritas en: https://fonts.google.com


## Agregando Custom Styles

Vamos a crear una nueva carpeta, **`src/styles/`**, donde vamos a crear algunos _componentes reutilizables_ con _estilos personalizados_ que podemos utilizar por toda nuestra aplicación. Esta es una alternativa a los estilos globales que vamos a utilizar más adelante.

Cuando se usa una etiqueta que contiene otras etiquetas, como un párrafo, se le pasa por **props** la palabra **`children`** en lugar de **`name`**. Ver el ejemplo en [H3Styled.jsx](../src/styled/H3Styled.jsx)


## Temas y estilos variables con Styled Components

Vamos a añadir algunos iconos a nuestra aplicación, debemos añadir esta etiqueta `<link>` dentro del `<head>` de nuestro archivo [**public/index.html**](../public/index.html):

```css
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
```

Con _styled-components_ podemos acceder a las propiedades de cada componente para modificar sus estilos con CSS:

```js
const IconSocial = styled.i`
color: ${props => props.theme.color};
`
```

Más información sobre Font Awesome en: https://fontawesome.com

Otra forma de añadir iconos de Font Awesome a nuestras aplicaciónes con React: https://fontawesome.com/how-to-…/on-the-web/using-with/react

Crea una galería de fuentes a partir de iconos con IcoMoon: https://youtu.be/_5r4PFi8gDc


## Creando las barras de progreso

Vamos a construir algunos componentes para mostrar nuestra experiencia con las mejores tecnologías de desarrollo.

Uno de estos componentes va a tener dos líneas: una para mostrar el porcentaje de conocimiento (por ejemplo 80%) y otra para mostrar el espacio total de nuestro componente (100%).

**IMPORTANTE** Se debe revisar bien la sintaxis en el CSS del styled-component para que no se presenten errores en el renderizado del componente. Recordar que se puede pasar por parámetro estilos al componente que hemos creado.


## Animaciones con Styled Components

_Styled Components_ también nos permite crear animaciones de _css_ con `keyframes`, solo _**debemos importar la función keyframes de styled-components**_, crear una variable con las animaciones y añadirlas a los estilos de nuestros componentes creados con la función styled en la propiedad animation:

```js
import { keyframes } from 'styled-components';

const move = keyframes`
from { ... }
to { ... }
`;

const MyComponent = styled.tag`
animation: ${move} ... ...;
```


## Estilos globales

Styled Components también nos permite crear estilos globales, es decir, estilos para las etiquetas generales (por ejemplo, `html`, `body` o `main`) o estilos reutilizables a partir de clases (por ejemplo, `.d-none` para ocultar componentes o `.t-red` para definir textos con mensajes importantes).

Para esto debemos importar la función createGlobalStyle de styled-components, crear un componente con los estilos globales e incluir este componente en nuestra aplicación:

```js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
body { ... }
`;

const App = () => {
return (
...
<GlobalStyle />
...
);
}
```

En este caso el estilo global lo creamos en un nuevo componente para agregarlo a [App.jsx](../src/container/App.jsx)



## Haciendo nuestro portafolio responsivo

_Styled Components_ también nos _permite_ _añadir **media queries**_ a nuestros componentes, ni siquiera debemos importar una función especial del paquete de styled-components, solo debemos escribirlas común y corriente con el resto de estilos de cada componente:

```js
const MyComponent = styled.tag`
@media screen and (...) {
...
}
`;
```

Los media queries lo agregamos al componente [Main.jsx](../src/components/Main.jsx), porque aquí es donde definimos cómo se debe mostrar el contenido dependiendo del tamaño y orientación del dispositivo.

Solo debemos agregar el media query para el componente que deseamos y así de sencillo agregamos un diseño responsive al sitio web.

