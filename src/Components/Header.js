import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1 className="header-title">Todo App</h1>
        <input
          id="outlined-basic1"
          type="search"
          placeholder="Search"
          onChange={(e) => this.props.changeSearchValue(e.target.value)}
        />
        <button
          className="addButton"
          onClick={() => this.props.changeStatus(true)}
        >
          +
        </button>
      </div>
    );
  }
}

export default Header;
