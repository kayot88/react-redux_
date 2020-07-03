import React, { Component } from "react";

export default class UserStatus extends Component {
  state = {
    editMode: false,
    localUserStatus: '',
  };

  handlerStatusChange = (e) => {
    this.setState({
      localUserStatus: e.currentTarget.value,
    });
  };

  statusClickHandler = () => {
    this.setState({
      editMode: true,
      localUserStatus: this.props.status
    });
  };
  deactivateStatus = () => {
    this.props.setStatusTC(this.state.localUserStatus);
    this.setState({
      editMode: false,
    });
  };


  render() {
    return (
      <div>
        {!this.state.editMode && (
          <span onClick={this.statusClickHandler}>
            {this.state.localUserStatus}
          </span>
        )}
        {this.state.editMode && (
          <div>
            <input
              autoFocus
              onChange={this.handlerStatusChange}
              onBlur={this.deactivateStatus}
              value={this.props.status}
            />
          </div>
        )}
      </div>
    );
  }
}
