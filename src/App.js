import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchCats } from "./actions/catActions";
import CatList from "./CatList";

class App extends Component {

  componentDidMount() {
    console.log(this.props);
    this.props.fetchCats()
  }

  render() {
    return (
      <div>
        <h1>CatBook</h1>
        {/* add CatList component here */}
      </div>
    );
  }
}

export default App
