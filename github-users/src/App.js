import React, { Component } from "react";
import Users from "./Components/Users";
import UserFollowers from "./Components/userFollowers";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {}
    };
  }

  componentDidMount() {
    fetch("https://api.github.com/users/tolaked")
      .then(res => {
        return res.json();
      })
      .then(data => {
        const { name, avatar_url, followers, following } = data;

        this.setState({
          user: {
            name: name,
            image: avatar_url,
            followers: followers,
            following: following
          }
        });
      });
  }

  render() {
    return (
      <div>
        <Users userData={this.state.user} />
        <UserFollowers />
      </div>
    );
  }
}

export default App;
