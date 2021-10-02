import { createContext, useState } from "react";
import { TaskType, TaskContextType } from "../models/models";

export const TasksContext = createContext<TaskContextType>({
  tasks: [],
  addTask: (TaskType: TaskType) => {},
  deleteTask: (id: string) => {},
});

const TasksProvider: React.FC = (props) => {
  const [tasks, setTasks] = useState<TaskType[]>([]);

  const addTask = (newTask: TaskType) =>
    setTasks((prevTasks) => [...prevTasks, newTask]);
  const deleteTask = (id: string) => {
    const newTasks = tasks.filter((TaskType) => TaskType.id !== id);
    setTasks(newTasks);
  };

  return (
    <TasksContext.Provider value={{ tasks, addTask, deleteTask }}>
      {props.children}
    </TasksContext.Provider>
  );
};

export default TasksProvider;
