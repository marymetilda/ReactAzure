import React from "react";
import "./nav.css";

function Nav() {
  return (
    <nav>
      <div className="navSection">
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
          <h3>Azure </h3>
        </div>

        <div className="navitems1">
          <div className="navExplore">
            <span className="navItem explore">Explore</span>
          </div>
          <div className="navProducts">
            <span className="navItem products">Products</span>
          </div>
          <div className="navSolutions">
            <span className="navItem solutions">Solutions</span>
          </div>
          <div className="navPricing">
            <span className="navItem pricing">Pricing</span>
          </div>
          <div className="navPartners">
            <span className="navItem partners">Partners</span>
          </div>
          <div className="navResources">
            <span className="navItem resources">Resources</span>
          </div>
        </div>
      </div>

      <div className="navSection">
        <div className="searchbar">
          <input type="search" className="search" placeholder="Search" />
          <i class="fas fa-magnifying-glass"></i>
        </div>

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
    </nav>
  );
}

export default Nav;
