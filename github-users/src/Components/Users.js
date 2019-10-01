import React, { Component } from "react";

export class Users extends Component {
  render() {
    const { name, image, followers, following } = this.props.userData;

    return (
      <div>
        <img src={image} alt="github user" />
        <h3>Name:{name}</h3>
        <h3>followers:{followers}</h3>
        <h3>following:{following}</h3>
      </div>
    );
  }
}

export default Users;
