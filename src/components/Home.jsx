import { useNavigate } from "react-router-dom";

const Home = ({ token }) => {
  const navigate = useNavigate();

  const handleLogOut = () => {
    sessionStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="home">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg rounded">
          <div className="container-fluid my-4">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarContent"
              aria-controls="navbarContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fa-solid fa-bars" />
            </button>

            <div className="collapse navbar-collapse" id="navbarContent">
              <ul className="navbar-nav col-lg-4 justify-content-lg-center">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Demos <i className="fa-solid fa-angle-down" />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Pages <i className="fa-solid fa-angle-down" />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Projects <i className="fa-solid fa-angle-down" />
                  </a>
                </li>
              </ul>
              <div className="navbar-brand col-lg-4 text-center">
                <img
                  src="https://sandbox-tailwind-template.netlify.app/assets/img/logo-light@2x.png"
                  alt="Company Logo"
                  className="img-fluid"
                />
              </div>
              <ul className="navbar-nav col-lg-4 justify-content-lg-center">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Blog <i className="fa-solid fa-angle-down" />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Blocks <i className="fa-solid fa-angle-down" />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Documentation <i className="fa-solid fa-angle-down" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <header className="header-head d-flex justify-content-center align-items-center text-center">
          <div className="row">
            <div className="col">
              <p>Welcome back, {token?.user?.user_medata?.full_name}</p>
              <h1 className="mb-4">
                We bring solutions to <br />
                make life <span>easier</span>
              </h1>
              <p className="mb-4">
                We are a creative company that focuses on long-term
                relationships with customers.
              </p>
              <button
                type="button"
                className="btn btn-danger ms-auto"
                onClick={handleLogOut}
              >
                Log Out
              </button>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Home;
