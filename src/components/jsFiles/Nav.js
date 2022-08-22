import React from "react";
import NavItem from "../../subComponents/navItem";
import "../css files/nav.css";
import { VscSearch } from "react-icons/vsc";
import { VscClose } from "react-icons/vsc";
import {BsThreeDots, BsList} from "react-icons/bs";



function Nav() {
  return (
    <nav>
      <div className="navSection1">
        <div className="iconTitle">
          <BsList className="burgerIcon"/>
          <div className="icon">
            <a href="https://www.microsoft.com/en-in/">
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
            </a>
          </div>

          <div className="title">
            <a href="">
              <span>Azure </span>
            </a>
          </div>
        </div>
        <div className="navItemSection">
        <NavItem />
        </div>
      </div>

      <div className="icon icon1">
            <a href="https://www.microsoft.com/en-in/">
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
            </a>
          </div>
      <div className="searchbar">
        <input type="search" className="search" placeholder="Search" />
        <VscSearch className="searchIcon" />
        <VscClose className="closeIcon" />
      </div>

      <div className="navSection2">
        <div className="navLastItem navDocs">
          <a href="https://docs.microsoft.com/en-us/azure/?product=popular">
            <span className="navItems docs">Docs</span>
          </a>
        </div>
        <div className="navLastItem navSupport">
          <a href="https://azure.microsoft.com/en-us/support/">
            <span className="navItems support">Support</span>
          </a>
        </div>
        <div className="navLastItem navContact">
          <a href="https://azure.microsoft.com/en-us/contact/">
            <span className="navItems contact">Contact Sales</span>
          </a>
        </div>
        <div className="account">
          <a href="https://azure.microsoft.com/en-us/free/">
            <span className="navItems navAccount">Free account</span>
          </a>
        </div>
        <div className="signIn">
        <div className="searchIconMobile">
          <VscSearch className="searchMobile" />
        </div>
        <div className="threeDots">
          <BsThreeDots />
        </div>
          <a href="https://login.microsoftonline.com/organizations/oauth2/v2.0/authorize?redirect_uri=https%3A%2F%2Fportal.azure.com%2Fsignin%2Findex%2F&response_type=code%20id_token&scope=https%3A%2F%2Fmanagement.core.windows.net%2F%2Fuser_impersonation%20openid%20email%20profile&state=OpenIdConnect.AuthenticationProperties%3DSVcHiQbA9kwXHgwrkNnkZjQOGm2oEOD9aAqePDm2D17RkQGqBwtSsJJug2Sp_aneGnLmAW_5no241BipCjVdxYBnru5bSvfWbr2Uk38ptslhL6lughKdX23TgA4IpEMjNu9qLROrCooLPnyX4NvZ06zvbsCmLdCbHWOf3upbxA81mMIt9KCOgRUulmAb_ZbYUJqNUqL2-veY6FQ1VaMtjf7E05pUI0Om2MjwQBnsOsKYGwmaL02EZIW8fLiIz9lgCxfWdO6tQwZS9ymHPpoxnvKKhG2_LDELroy9U7rWUwmsQ-x6msOSmnrds9pjTbK0DKaKwebiczloFhS3CeSgP0sDoJcDZiqzw2MjnXzhTntvfPTMjV01G7cADhXp2x1vs-uAH42Pzjn0EryNe_c6E7alYxRRBUCsqPOvVCA-dn-ocWKR6TIppD-CIeauCXxl4RRrDvGJOoDwipvyRi5tMuSfp_M8HajahArLbAtZhQg&response_mode=form_post&nonce=637962292980581660.ZGY3MzgyMjAtZDM2Yy00M2Y2LTk5M2EtMjc5ZTZlN2RiNjFjYTdiMzM5ZGItYjJlMS00NWQ0LWEzNDUtMjM5OGJhZDU3OGQz&client_id=c44b4083-3bb0-49c1-b47d-974e53cbdf3c&site_id=501430&client-request-id=a6a06cc8-ac12-44d9-a7fe-81b16604c708&x-client-SKU=ID_NET472&x-client-ver=6.16.0.0">
            <span className="navItems Sign">Sign in</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
