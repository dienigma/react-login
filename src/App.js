import React, { Component } from "react";
import DataList from "./DataList";
import RepoList from "./RepoList";
import SignIn from "./SignIn";
const axios = require("axios");
class App extends Component {
  state = {
    selectedLan: "java",
    repos: null,
    credentials: {
      username: "joshi.chinmay09@gmail.com",
      password: 123456
    },
    authenticated: false
  };

  checkLogin = () => {
    this.setState({ authenticated: true });
  };
  // componentDidMount() {
  //   this.getRepos(this.state.selectedLan);
  // }

  // getRepos = language => {
  //   var encodedURI = window.encodeURI(
  //     "https://api.github.com/search/repositories?q=stars:>1+language:" +
  //       language +
  //       "&sort=stars&order=desc&type=Repositories"
  //   );
  //   return axios.get(encodedURI).then(({ data: { items } }) => {
  //     console.log(items);
  //     this.setState({
  //       repos: items
  //     });
  //   });
  // };

  onSelect = item => {
    this.setState({
      selectedLan: item,
      repos: null
    });
    this.getRepos(item);
  };

  render() {
    return (
      <div>
        <SignIn
          credentials={this.state.credentials}
          checkLogin={this.checkLogin}
        />
      </div>
    );
  }
}

export default App;
