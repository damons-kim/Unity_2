import "../App.css";
import About from "./About";
import Home from "./Home";
import Game from "./Game";
import { Route, Switch, Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="App">
      <div className="top">
      <Link to="/">
        <button className="btn">Main Home</button>
      </Link>
      <Link to="/Home">
        <button className="btn">Home</button>
      </Link>
      <Link to="/About">
        <button className="btn">About</button>
      </Link>
      <Link to="/Game">
        <button className="btn">Game Start</button>
      </Link>
      </div>
      <header className="App-header">
        <Switch>
          <Route exact path="/Home" component={() => <Home />} />
          <Route exact path="/About" component={() => <About />} />
          <Route exact path="/Game" component={() => <Game />} />
        </Switch>
      </header>
    </div>
  );
};

export default Menu;
