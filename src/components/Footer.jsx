import "../components-style/Footer.css";
import logo from "../imgs/logo.png";
import contactIcons from "../imgs/contact-icons.png";
const Footer = () => {
  return (
    <section className="footer">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="text-center">
              <img className="logo" src={logo} alt="logo" />
              <img
                className="contact-icons"
                src={contactIcons}
                alt="contactIcons"
              />
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#trusted">Key Features</a>
                </li>
                <li>
                  <a href="#pricing">pricing</a>
                </li>
                <li>
                  <a href="#testiminial">Testiminials</a>
                </li>
                <li>
                  <a href="#faq">FAQ</a>
                </li>
              </ul>
              <p className="text-white mt-5">
                Copyright© Mohamed Montaser {new Date().getFullYear()}. All
                rights reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
