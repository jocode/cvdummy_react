import React, { useState, Fragment } from 'react';


const HelloWorld_hooks = () => {
  // Constante que desetructurará dos elementos, el estadp y la funcion que actualiza el estado
  // A useState se le puede pasar el estado inicial
  const [active, setActive] = useState(true);

  const handleClick = () => {
    setActive(!active);
  }

  return (
    <Fragment>
      <button onClick={handleClick}>Ocultar</button>
      {active &&
        <h1>Hola Hooks</h1>
      }
    </Fragment>
  );
}

export default HelloWorld_hooks;