import React from 'react';
import stackLogo from '../images/stack.png'; // Importez l'image en utilisant la référence relative

const Navbar = () => {
  return (
    <nav id="navbar" className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
        <img src={stackLogo} alt="Logo" style={{ width: '100px', height: 'auto' }} /> {/* Utilisez la variable pour la source de l'image */}
        </a>
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
              <a className="nav-link active" aria-current="page" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Products
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link ">For Teams</a>
            </li>
            <li>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2 input-width"
                  style={{ width: '200%' }}
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </form>
            </li>
          </ul>
          <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <button className="btn btn-primary me-md-2" type="button">
              LogIn
            </button>
            <button className="btn btn-danger" type="button">
              SignUp
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
