import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min";
import Logo from "../imgs/logo.png";
import TopSmall from "../imgs/landing-top-small.png";
import landingImg from "../imgs/landing-img.png";
import "../components-style/Header.css";
import { FaTimes } from "react-icons/fa";
import LandingEnd from "../imgs/landing-end.png";

function Header() {
  const showSideBarHandler = () => {
    let sideBar = document.querySelector(".navbar .navbar-collapse ul");
    sideBar.style.right = "0";
  };
  const disableSideBarHandler = () => {
    let sideBar = document.querySelector(".navbar .navbar-collapse ul");
    sideBar.style.right = "-100%";
  };
  return (
    <section className="header">
      {/* Start Navbar */}
      <nav className="navbar navbar-expand-lg" data-aos="fade-in">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={Logo} alt="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={showSideBarHandler}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <FaTimes onClick={disableSideBarHandler} />
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#trust">
                  Key Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#pricing">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#testiminial">
                  Testiminial
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#faq">
                  FAQ
                </a>
              </li>
              <button className="btn for-free">Try For free</button>
            </ul>
          </div>
        </div>
      </nav>
      {/* End Navbar */}
      {/* Start Landing */}
      <div className="landing">
        <div className="container">
          <div className="row">
            <div
              className="col-sm-12 col-md-6 left-column"
              data-aos="fade-right"
            >
              <img src={TopSmall} alt="top-small-img" className="small" />
              <h1>Best app for your modern lifestyle</h1>
              <p>
                Increase productivity with a simple to-do app. app for managing
                your personal budgets.
              </p>
              <div className="btns">
                <button className="btn d-inline-block for-free">
                  Try For free
                </button>
                <button className="btn for-free live-demo">
                  Watch demo Video
                </button>
              </div>
            </div>
            <div
              className="col-sm-12 col-md-4 right-column"
              data-aos="fade-left"
            >
              <img src={landingImg} alt="" className="landing-img" />
            </div>
          </div>
        </div>
        <img src={LandingEnd} className="landing-end" alt="LandingEnd" />
      </div>
      {/* End Landing */}
    </section>
  );
}

export default Header;
