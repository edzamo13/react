import React, { Component } from "react";

export default class InputComponent extends Component {
  render() {
    console.log('InputComponent===>', this.props)
    return (
      <div>
        <input
          value={this.props.value}
          onChange={this.props.onChange}
        ></input>
      </div>
    );
  }
}




