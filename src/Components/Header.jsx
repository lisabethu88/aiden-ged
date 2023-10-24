import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import "../App.css";

const Header = () => {
  return (
    <header className="App-header">
      <Link className="header-link" to="/">
        <h1 class="text_shadows">YUMMY GED</h1>
      </Link>
    </header>
  );
};

export default Header;
