import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Landing from "./components/Landing";
import LiveMonitoring from "./components/LiveMonitoring";
import Details from "./components/Details";
import ListCctv from "./components/ListCctv";
import Ayam from "./components/Ayam";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/landing" component={Landing} />
        <Route exact path="/livemonitoring" component={LiveMonitoring} />
        <Route exact path="/details" component={Details} />
        <Route exact path="/listcctv" component={ListCctv} />
      </Switch>
    </Router>
  );
}

export default App;
