import React, { useRef, useEffect, useContext } from "react";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

import { TasksContext } from "../context/TasksProvider";

const TaskForm: React.FC = () => {
  const { addTask } = useContext(TasksContext);

  const titleRef = useRef<HTMLInputElement>();
  const descriptionRef = useRef<HTMLInputElement>();

  const onSubmit = () => {
    // send data
    addTask({
      id: String(Math.floor(Math.random() * 100)),
      title: titleRef!.current!.value,
      description: descriptionRef!.current!.value,
      status: "Pending",
      image: undefined,
      tags: undefined,
    });
    console.log(titleRef!.current!.value, descriptionRef!.current!.value);
  };

  return (
    <Paper
      component="form"
      sx={{
        display: "flex",
        margin: "20px",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <TextField
        hiddenLabel
        id="title-input"
        variant="filled"
        placeholder="Untitled 💭"
        fullWidth
        inputRef={titleRef}
        autoFocus
        sx={{ margin: "7px 0px" }}
      />
      <TextField
        hiddenLabel
        id="title-input"
        variant="filled"
        placeholder="Description"
        fullWidth
        inputRef={descriptionRef}
        multiline
        minRows={6}
        maxRows={6}
        sx={{ margin: "7px 0px" }}
      />
      <Button sx={{ margin: "7px 0px" }} onClick={onSubmit}>
        Submit
      </Button>
      <Link to="/">
        <Button>Home</Button>
      </Link>
    </Paper>
  );
};

export default TaskForm;
