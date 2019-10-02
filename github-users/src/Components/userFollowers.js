import React, { Component } from "react";
import axios from "axios";

class userFollowers extends Component {
  constructor() {
    super();
    this.state = {
      githubUser: {},
      githubFollowers: []
    };
  }

  componentDidUpdate() {
    this.fetchData("tolaked");
  }

  fetchData = user => {
    const fetchUser = axios.get(`https://api.github.com/users/${user}`);
    const fetchFollowers = axios.get(
      `https://api.github.com/users/${user}/followers`
    );

    const allResponse = Promise.all([fetchUser, fetchFollowers]).then(res => {
      const userInfo = res[0].data;
      //   console.log(userInfo);
      const followersInfo = res[1].data.map(({ id, login, avatar_url }) => ({
        username: login,
        image: avatar_url
      }));
      this.setState({ githubUser: userInfo, githubFollowers: followersInfo });
      console.log("this", this.state.githubFollowers.login);
    });
  };
  render() {
    return <div>{this.state.githubFollowers.username}</div>;
  }
}

export default userFollowers;
