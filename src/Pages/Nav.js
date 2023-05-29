import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faList, faQuestionCircle, faHashtag, faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import "./Nav.css";

const Nav = () => {
  return (
    <nav id="sidebar" className="col-md-2 d-none d-md-block sidebar">
      <div className="sidebar-sticky">
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link className="nav-link active" to="/">
              <FontAwesomeIcon icon={faHouse} />
              <span className="icon-text">Home</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/AskQuestion" className="nav-link">
              <FontAwesomeIcon icon={faQuestionCircle} />
              <span className="icon-text">Question</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="/">
              <FontAwesomeIcon icon={faHashtag} />
              <span className="icon-text">Tags</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/AskQuestion" className="nav-link">
              <FontAwesomeIcon icon={faUser} />
              <span className="icon-text">Users</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="/">
              <FontAwesomeIcon icon={faList} />
              <span className="icon-text">Liste Questions</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/AskQuestion" className="nav-link">
              <FontAwesomeIcon icon={faExclamationCircle} />
              <span className="icon-text">info</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
