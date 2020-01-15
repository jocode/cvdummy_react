import React, { Component, Fragment } from 'react';

class HelloWorld_class extends Component {

  state = {
    active: true
  }

  handleClick = () => {
    this.setState({
      active: !this.state.active
    });
  }

  render() {
    return (
      <Fragment>
        <button onClick={this.handleClick}>Ocultar</button>
        {this.state.active &&
          <h1>Hola Mundo</h1>}
      </Fragment>
    );
  }

}

export default HelloWorld_class;