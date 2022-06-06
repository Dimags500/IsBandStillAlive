import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import { About } from "../../pages/about/About";
import { Admin } from "../../pages/admin/Admin";
import { Home } from "../../pages/home/Home";
import "./navbar.css";

export const NavBar = () => {
  return (
    <div className="navbar">
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/admin">Admin</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/" component={Home} />

          <Route exact path="/admin" component={Admin} />
          <Route exact path="/about" component={About} />
        </Switch>
      </div>
    </div>
  );
};
