import React, { Component } from 'react';
import "./App.css";
import AddTodo from "./Components/AddTodo";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import MainPage from "./Components/MainPage";
class App extends Component {
  constructor() {
    super();
    this.state = {
      modalStatus: false,
      todos: [],
      searchText: "",
      currentEditModal: {},
      filteredSearch: [],
    };
  }
  componentDidMount() {
    this.setState({ todos: JSON.parse(localStorage.getItem("todoItem")) || [] });
  }
  componentDidUpdate() {
    localStorage.setItem("todoItem", JSON.stringify(this.state.todos));
  }
  changeSearchValue = (text) => {
    const tempFiltered = this.state.todos.filter(
      (ele) =>
        ele.name.toLowerCase().includes(text.toLowerCase()) ||
        ele.status.toLowerCase().includes(text.toLowerCase()) ||
        ele.description.toLowerCase().includes(text.toLowerCase())
    );
    this.setState({ filteredSearch: tempFiltered });
    this.setState({ searchText: text });
  };
  changeModalStatus = (status, id) => {
    this.setState({
      modalStatus: status,
      currentEditModal: this.state.todos.filter((ele) => ele.id === id)[0],
    });
  };
  createTodo = (name, description, status) => {
    if (name && status) {
      // this.state.todos.push({
      //   id: Date.now(),
      //   name: name,
      //   description: description,
      //   status: status,
      // })
      this.setState({
        todos: [
          ...this.state.todos,
          {
            id: Date.now(),
            name: name,
            description: description,
            status: status,
          },
        ],
        modalStatus: false,
      });
    }
  };
  updateTodo = (name, description, status, id) => {
    const tempTodo = this.state.todos.map((ele) => {
      if (ele.id === id) {
        return {
          id,
          name,
          status,
          description,
        };
      }
      return ele;
    });
    this.setState({
      todos: tempTodo,
    });
  };
  deleteTodo = (id) => {
    this.setState({ todos: this.state.todos.filter((ele) => ele.id !== id) });
  };

  render() {
    return (
      <div className="App">
        <Header
          changeStatus={this.changeModalStatus}
          changeSearchValue={this.changeSearchValue}
        />
        <MainPage
          todos={
            this.state.searchText ? this.state.filteredSearch : this.state.todos
          }
          deleteTodo={this.deleteTodo}
          changeStatus={this.changeModalStatus}
        />
        {this.state.modalStatus && (
          <div className="modal">
            <AddTodo
              changeStatus={this.changeModalStatus}
              createTodo={this.createTodo}
              currentEditTodo={this.state.currentEditModal}
              updateTodo={this.updateTodo}
            />
          </div>
        )}
        <Footer />
      </div>
    );
  }
}

export default App;