import React, { Component } from 'react'
import Open from './Components/Open'
import Pending from "./Components/Pending"
import Complete from "./Components/Complete"
import Inprog from "./Components/Inprog"
import ModalAddTask from './Components/ModalAddTask/ModalAddTask'

export default class App extends Component {
  state = {
    users: [
      {
        name: "tast1",
        checked: true,
        status: "pending"
      },
      {
        name: "tast1",
        checked: true,
        status: "inprog"
      },
      {
        name: "tast1",
        checked: true,
        status: "inprog"
      },
      {
        name: "tast1",
        checked: true,
        status: "open"
      },
      {
        name: "tast1",
        checked: true,
        status: "open"
      },
      {
        name: "tast1",
        checked: true,
        status: "open"
      },
      {
        name: "tast4",
        checked: true,
        status: "open"
      },
      {
        name: "tast1",
        checked: true,
        status: "open"
      },
      {
        name: "tast1",
        checked: true,
        status: "pending"
      },
      {
        name: "tast1",
        checked: true,
        status: "pending"
      },
      {
        name: "tast1",
        checked: true,
        status: "pending"
      },
      {
        name: "tast1",
        checked: true,
        status: "pending"
      },
      {
        name: "tast1",
        checked: true,
        status: "complate"
      },
      {
        name: "tast1",
        checked: true,
        status: "inprog"
      },
      {
        name: "tast1",
        checked: true,
        status: "complate"
      },
      {
        name: "tast1",
        checked: true,
        status: "complate"
      },
    ],
    addTaskModal: false
  }

  ModalOpenAddTask = ()=>{
    this.setState({
      addTaskModal: true
    })
  }

  render() {
    return (
      <div className='container'>
          <div className="row">
            <div className="col-md-3">
              <Open ModalOpenAddTask={this.ModalOpenAddTask} users={this.state.users}/>
            </div>
            <div className="col-md-3">
              <Pending ModalOpenAddTask={this.ModalOpenAddTask} users={this.state.users}/>
            </div>
            <div className="col-md-3">
              <Inprog ModalOpenAddTask={this.ModalOpenAddTask} data={this.state.users}/>
            </div>
            <div className="col-md-3">
              <Complete ModalOpenAddTask={this.ModalOpenAddTask} users={this.state.users}/>
            </div>
          </div>
          <ModalAddTask ModalOpenAddTask={this.ModalOpenAddTask} valIsOpen={this.state.addTaskModal}/>
      </div>
    )
  }
}
