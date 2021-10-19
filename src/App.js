import "./styles.css";
import NavBar from "./NavBar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Categories from "./Categories";
import Account from "./Account";
export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" component={Home} exact={true} />
          <Route path="/Categories" component={Categories} />
          <Route path="/Account" component={Account} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
