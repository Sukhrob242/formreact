import {
  Typography,
  Box,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  TextField
} from "@mui/material";
import React, { Component } from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

export default class ModalAddTask extends Component {
  render() {
      const {valIsOpen , ModalOpenAddTask} = this.props
    return (
      <div>
        <Modal toggle={ModalOpenAddTask} isOpen={valIsOpen}>
          <ModalHeader>
            <Typography>Add Task</Typography>
          </ModalHeader>
          <ModalBody>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Select status...
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  //   value={age}
                  label="Age"
                  //   onChange={handleChange}
                >
                  <MenuItem value={"open"}>open</MenuItem>
                  <MenuItem value={"inprog"}>inprog</MenuItem>
                  <MenuItem value={"compete"}>compete</MenuItem>
                  <MenuItem value={"pending"}>pending</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ minWidth: 120, marginTop: 3 }}>
              <TextField
                id="outlined-basic"
                label="Task Name"
                variant="outlined"
                fullWidth
              />
            </Box>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </Modal>
      </div>
    );
  }
}
