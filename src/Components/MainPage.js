import React, { Component } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

class MainPage extends Component {
    render() {
        return (
            <div className="MainPage">
        {this.props.todos.map((element, index) => {
       
          return (
            <div className="ticket" key={element.id}>
              <h2 className="ticket-heading"> {element.name} </h2>
              <p className="ticket-description">
                { element.description }
              </p>
              <h3 className="ticket-status">{element.status}</h3>
              <EditIcon className="edit-icon" onClick={() => this.props.changeStatus(true, element.id)}/>
              <DeleteIcon className="delete-icon" onClick={()=> this.props.deleteTodo(element.id)}/>
            </div>
          );
        })}
      </div>
        );
    }
}

export default MainPage;