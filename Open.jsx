import { Typography, Checkbox, Button } from "@mui/material";
import React, { Component } from "react";

const label = { inputProps: { "aria-label": "Checkbox demo" } };
export default class Open extends Component {
  render() {
    const { users } = this.props;
    return (
      <>
        <div className="card">
          <div className="card-header">
            <Typography variant={"h3"} center>
              Open
            </Typography>
          </div>
          <div className="card-body">
            {users
              .filter((item) => item.status === "open")
              .map((item, index) => (
                <Typography>
                  {item.name} <Checkbox {...label} defaultChecked={item.checked} />
                </Typography>
              ))}
          </div>
          <div className="card-footer">
            <Button variant={"contained"} color="success">
              Add Task
            </Button>
            <Button variant={"contained"} color="warning">
              Edit
            </Button>
            <Button variant={"contained"} color="error">
              Delete
            </Button>
          </div>
        </div>
      </>
    );
  }
}
