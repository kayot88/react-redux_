import React, { Component } from "react";

class Test extends Component {
  state = {
    testValue: "",
    editMode: false,
  };
  componentDidMount() {
    const { testValue } = this.props;
    this.setState({
      testValue: testValue,
    });
  }
  handlerClick = () => {
    this.setState({
      editMode: true,
      // testValue: testValue,
    });
  };
  deactivateMode = () => {
    this.setState({
      editMode: false,
      // testValue: testValue,
    });
    this.props.updateStatus();
  };
  handleChange = (e) => {
    this.setState({
      testValue: e.currentTarget.value,
      // editMode: true,
    });
  };

  render() {
    return (
      <div>
        {!this.state.editMode && (
          <div>
            <span onDoubleClick={this.handlerClick}>
              {this.state.testValue}
            </span>
          </div>
        )}
        {this.state.editMode && (
          <div>
            <input
              value={this.state.testValue}
              onChange={this.props.handleChange}
              onBlur={this.deactivateMode}
            >
              {this.props.testValue}
            </input>
          </div>
        )}
      </div>
    );
  }
}

export default Test;
