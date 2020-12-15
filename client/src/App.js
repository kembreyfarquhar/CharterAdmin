// Routing
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Context Provider
import { ViewportProvider } from "./context/viewport";

// Components
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
