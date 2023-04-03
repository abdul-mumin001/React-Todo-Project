import React, { Component } from 'react';
import { TextField,InputLabel, Select, MenuItem, Button, FormControl } from "@mui/material";
class AddTodo extends Component {

    constructor(props) {
        super(props);
        this.state = {
          title: this.props.currentEditTodo ? this.props.currentEditTodo.name : "",
          desc: this.props.currentEditTodo ? this.props.currentEditTodo.description : "",
          status: this.props.currentEditTodo ? this.props.currentEditTodo.status : ""
        }
      }
      createTodo = (e) => {
        if(this.props.currentEditTodo) {
          this.props.updateTodo(this.state.title, this.state.desc, this.state.status, this.props.currentEditTodo.id);
        } else {
          this.props.createTodo(this.state.title, this.state.desc, this.state.status);
        }
        this.props.changeStatus(false)
      }

    render() {
        return (
            <div className="create-todo">
        <h2>
          {
            this.props.currentEditTodo ? 'Update Todo' : 'Create a Todo'
          }
        </h2>
        <TextField id="outlined-basic" label="Todo Title" variant="outlined" value={this.state.title} onChange={(e) => this.setState({ title: e.target.value})}/>
        <TextField
          id="outlined-multiline-static"
          label="Todo Description"
          multiline
          rows={4}
          onChange={(e) => this.setState({ desc: e.target.value})}
          value={this.state.desc}
        />
        <FormControl fullWidth>

        <InputLabel id="demo-simple-select-label">Status</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Status"
          onChange={(e) => this.setState({ status: e.target.value})}
          value={this.state.status}
        >
          <MenuItem value={"Todo"}>Todo</MenuItem>
          <MenuItem value={"In Progress"}>In Progress</MenuItem>
          <MenuItem value={"Done"}>Done</MenuItem>
        </Select>
        </FormControl>
        <div className="action-wrapper">
          <Button variant="contained" color="success" onClick={this.createTodo}>
            {
              this.props.currentEditTodo ? 'Update' : 'Add'
            }
          </Button>
          <Button variant="outlined" color="error" onClick={()=>this.props.changeStatus(false)}>
            Close
          </Button>
        </div>
      </div>
        );
    }
}

export default AddTodo;