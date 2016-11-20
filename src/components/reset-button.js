import React from 'react';


class ResetButton extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      confirm: false,
    };
  }

  handleReset(){
    this.setState({ confirm: false });
    this.props.onReset();
  }

  render() {
    if (!this.state.confirm){
      return (
        <button onClick={() => this.setState({ confirm: true })}>
          Reset
        </button>
      );
    }

    return (
      <div>
        <button>Reset?</button> <br />
        <button onClick={() => this.handleReset()}>Yes</button>
        <button onClick={() => this.setState({ confirm: false })}>No</button>
      </div>
    );
  }
}

export default ResetButton;
