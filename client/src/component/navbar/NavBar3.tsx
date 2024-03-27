import { Link } from "react-router-dom";

const NavBar3 = () => {
  return (
    <>
      <ul
        className="nav justify-content-between bg-secondary text-bg-dark "
        data-bs-theme="dark"
      >
        <li className="nav-item">
          {/* / <a className="nav-link active" aria-current="page" href="#"></a> */}
          <Link className="nav-link" to="/today">
            Today
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/hourly">
            Hourly
          </Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            10 Day
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">
            Monthly
          </a>
        </li>
      </ul>
    </>
  );
};

NavBar3.propTypes = {};

export default NavBar3;
