import { useLocation } from "react-router-dom";
import logo from "./assets/image_2022_11_15T11_07_27_385Z.png";

export default function Header() {
  const location=useLocation()
  console.log("location",location)
  return (
    <nav className="navbar bg-primary mb-4 p-2">
      <div className="container">
        <a className="navbar-brand" href="/">
          <div className="d-flex">
            <img src={logo} alt="logo" className="mr-2" />
            <div>Graphql</div>
          </div>
          </a>
          <div className="d-flex">
            <ul className="nav nav-pills">
  <li className="nav-item">
    <a className={`nav-link ${location.pathname==="/" ? "active":null}`} aria-current="page" href="/">Clients</a>
  </li>
  <li className="nav-item">
    <a className={`nav-link ${location.pathname==="/projects" ? "active":null}`} href="/projects">Projects</a>
  </li></ul>
            {/* <a className="navbar-brand" href="/">Clients</a>
             <a className="navbar-brand" href="/projects">Projects</a> */}
          </div>
      </div>
    </nav>
  );
}
