import { useContext } from "react";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import IconButton from "@mui/material/IconButton";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

import { TaskContextType } from "../models/models";
import { TasksContext } from "../context/TasksProvider";

const Home = () => {
  const { tasks } = useContext<TaskContextType>(TasksContext);
  return (
    <div className="full center">
      <List>
        {tasks?.length > 0 ? (
          tasks.map((task) => (
            <ListItem
              key={task!.id}
              style={{
                textDecoration:
                  task.status === "completed" ? "line-through" : "none",
              }}
              secondaryAction={
                <IconButton edge="end" aria-label="delete">
                  {/* Icons */}
                </IconButton>
              }
            >
              <ListItemAvatar>
                <Avatar>{/* Icons */}</Avatar>
              </ListItemAvatar>
              <ListItemText primary={task.title} secondary={task.description} />
            </ListItem>
          ))
        ) : (
          <p>You have completed all tasks, take a break.</p>
        )}
      </List>
      <Link to="/new-task">
        <Button>New Task</Button>
      </Link>
    </div>
  );
};

export default Home;
