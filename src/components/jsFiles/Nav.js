import React from "react";
import NavItem from "../../subComponents/navItem";
import "../css files/nav.css";
import { VscSearch } from "react-icons/vsc";
import { VscClose } from "react-icons/vsc";

function Nav() {
  return (
    <nav>
      <div className="navSection1">
        <div className="icon">
          <svg
            aria-hidden="true"
            role="presentation"
            data-slug-id="microsoft-square"
            viewBox="0 0 26 25"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.5708 0.981934H0.907471V12.3682H12.5708V0.981934Z"
              fill="#F25022"
            ></path>
            <path
              d="M25.4625 0.981934H13.7992V12.3682H25.4625V0.981934Z"
              fill="#7FBA00"
            ></path>
            <path
              d="M12.5708 13.5649H0.907471V24.9512H12.5708V13.5649Z"
              fill="#00A4EF"
            ></path>
            <path
              d="M25.4629 13.5649H13.7996V24.9512H25.4629V13.5649Z"
              fill="#FFB900"
            ></path>
          </svg>
        </div>

        <div className="title">
          <span>Azure </span>
        </div>

        <div className="navitems1">
          <NavItem />
        </div>
      </div>

      <div className="navSection2">
        <div className="searchbar">
          <input type="search" className="search" placeholder="Search" />
          <VscSearch className="searchIcon"/>
          <VscClose className="closeIcon" />
        </div>

        <div className="navLastSection">
          <div className="navItems2">
            <div className="navDocs">
              <span className="navItems docs">Docs</span>
            </div>
            <div className="navSupport">
              <span className="navItems support">Support</span>
            </div>
            <div className="navContact">
              <span className="navItems contact">Contact Sales</span>
            </div>
          </div>

          <div className="account">
            <span className="navAccount">Free account</span>
          </div>

          <div className="signIn">
            <span className="Sign">Sign in</span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
