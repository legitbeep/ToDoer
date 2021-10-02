import { Suspense, lazy, useState } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Components
import "./App.css";
import theme from "./theme/theme";
import Loader from "./components/Loader";

// Provider
import TasksProvider from "./context/TasksProvider";

const Home = lazy(() => import("./pages/Home"));
const TaskForm = lazy(() => import("./pages/TaskForm"));
const Login = lazy(() => import("./pages/Home"));
const Signup = lazy(() => import("./pages/Home"));

function App() {
  const [isLogged, setIsLogged] = useState<boolean>(true);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <TasksProvider>
        <Suspense fallback={<Loader />}>
          <BrowserRouter>
            <Switch>
              <Route path="/" exact>
                {isLogged ? <Home /> : <Redirect to="/login" />}
              </Route>

              <Route path="/login" exact>
                {!isLogged ? <Login /> : <Redirect to="/" />}
              </Route>

              <Route path="/signup" exact>
                {!isLogged ? <Signup /> : <Redirect to="/" />}
              </Route>

              <Route path="/new-task" exact>
                <TaskForm />
              </Route>

              <Route path="*">
                <Redirect to="/" />
              </Route>
            </Switch>
          </BrowserRouter>
        </Suspense>
      </TasksProvider>
    </ThemeProvider>
  );
}

export default App;
