import { useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import logo from "../../images/logo.svg";

import "../../styles/fonts.scss";
import "../../styles/buttons.scss";
import "../../styles/spacing.scss";
import "./style.scss";

import { FormContext } from "../../FormContext";

const Header = () => {
  const { handleLogOut }: any = useContext(FormContext);
  const location = useLocation();

  useEffect(() => {
    const getURL = () => {
      return location.pathname;
    };
    getURL();
  }, [location]);

  return (
    <>
      <div
        className={`header-wrapper ${
          location.pathname === "/account" && "bg-blue"
        } `}
      >
        <Link to={`/`}>
          <img className="logo" src={logo} alt="Bookiddo" />
        </Link>
        <div className="spacer"></div>
        <button className="third-button" type="button" onClick={handleLogOut}>
          Log out
        </button>
      </div>

      {location.pathname !== "/account" && (
        <div className="waves">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
        </div>
      )}
    </>
  );
};

export default Header;
