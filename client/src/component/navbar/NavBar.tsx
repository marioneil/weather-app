import axios from "axios";
import { BaseSyntheticEvent, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { WeatherContext } from "../../context/WeatherContext";

export const NavBar = () => {
  const { setSelectedAddress } = useContext(WeatherContext);
  const [searchTerm, setSearchTerm] = useState("");

  const [foundAddresses, setFoundAddresses] = useState<any[]>([]);

  const searchForAddress = async (e: BaseSyntheticEvent) => {
    setSearchTerm(e.target.value);

    // make axios call to;
    if (e.target.value === "") {
      setFoundAddresses([]);
      setSelectedAddress(undefined);
      return;
    }

    const url = `http://localhost:3000/search?q=${searchTerm}`;
    try {
      const response = await axios.get(url);
      console.log(response.data);
      //  const addresses = response.data;
      setFoundAddresses(response.data);
    } catch (error) {
      console.log(error);
    }

    // get the address subobject

    // store in state
  };

  return (
    <>
      <nav className="navbar bg-primary" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#" data-testid="Navbar.Header">
            The Weather Channel
          </a>
          <form className="d-flex" role="search">
            <div className="position-relative ">
              <input
                className="form-control me-2 bg-primary border-light"
                onChange={searchForAddress}
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={searchTerm}
                style={{ width: "20rem" }}
              />

              <div className="list-group position-absolute">
                {foundAddresses.map(function (item, i) {
                  return (
                    <a
                      //  onClick={setSelectedAddress}
                      onClick={() => {
                        setSelectedAddress(item);
                        setSearchTerm(item.name + ", " + item.region);
                        setFoundAddresses([]);
                      }}
                      key={i}
                      href="#"
                      className="list-group-item list-group-item-action"
                      aria-current="true"
                    >
                      {item.name}, {item.region}
                    </a>
                  );
                })}
              </div>
            </div>
          </form>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">
                  Disabled
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
