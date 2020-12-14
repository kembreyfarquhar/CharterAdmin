import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ViewportProvider } from "./context/viewport";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <ViewportProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    </ViewportProvider>
  );
}

export default App;
