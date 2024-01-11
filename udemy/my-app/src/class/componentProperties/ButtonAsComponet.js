import React, { Component } from "react";

class ButtonComponent extends Component {
  constructor(props) {
    super(props);
    console.log("contructor", props);
    let { pig } = props;
    console.log("Props ==> pig", pig);
  }
  state = { count: 0 };

  componentDidMount() {
    console.log("componentDidMount");
  }
  componentDidUpdate(prevProps, prevState) {
    console.log(
      "componentDidUpdate {[after]}, [{before}]",
      prevProps,
      prevState
    );
  }

  componentWillUnmount() {
    console.log("componentWillUnmount [{props}, [{state}]]" , this.props,this.state);
  }

  render() {
    console.log("Render ==> info state:", this.state);
    return (
      <div>
        {this.state.count === 0 ? (
          <button
            onClick={() => this.setState({ count: this.state.count + 1 })}
          >
            ButtonComponent
          </button>
        ) : null}
      </div>
    );
  }
}

export default ButtonComponent;
