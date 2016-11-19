import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    return (
      <div>React simple starter</div>
    );
  }
}

ReactDOM.render(<App /> , document.querySelector('.container'));
