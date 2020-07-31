import React, { Component } from "react";

export default class UserStatus extends Component {
  state = {
    editMode: false,
    localUserStatus: "",
  };

  componentDidMount() {
    this.setState({
      localUserStatus: this.props.status,
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.status !== prevProps.status) {
      this.setState({
        localUserStatus: this.props.status,
      });
    }
  }

  handlerStatusChange = (e) => {
    this.setState({
      localUserStatus: e.currentTarget.value,
    });
  };

  statusClickHandler = () => {
    this.setState({
      editMode: true,
      localUserStatus: this.props.status,
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
            {this.state.localUserStatus || "----"}
          </span>
        )}
        {this.state.editMode && (
          <div>
            <input
              autoFocus
              onChange={(e) =>
                this.setState({ localUserStatus: e.currentTarget.value })
              }
              onBlur={this.deactivateStatus}
              value={this.state.localUserStatus}
            />
          </div>
        )}
      </div>
    );
  }
}
