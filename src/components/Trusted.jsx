import "../components-style/Trusted.css";
import TrustedImg from "../imgs/Trusted.png";
import TrustedOne from "../imgs/trusted-site-one.png";
import TrustedTwo from "../imgs/trusted-site-two.png";
import TrustedThree from "../imgs/trusted-site-three.png";
import TrustedFour from "../imgs/trusted-site-four.png";
import TrustedFive from "../imgs/trusted-site-five.png";
import speed from "../imgs/speed.png";
import prototype from "../imgs/prototype.png";
import victor from "../imgs/victor.png";

const Trusted = () => {
  return (
    <section className="trusted" id="trust">
      <div className="text-center">
        <p>Trusted by companies like</p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-md-4 col-lg-2">
                  <img src={TrustedOne} alt="trusted-one" />
                </div>
                <div className="col-sm-12 col-md-4 col-lg-2">
                  <img src={TrustedTwo} alt="trusted-two" />
                </div>
                <div className="col-sm-12 col-md-4 col-lg-2">
                  <img src={TrustedThree} alt="trusted-three" />
                </div>
                <div className="col-sm-12 col-md-4 col-lg-2">
                  <img src={TrustedFour} alt="trusted-four" />
                </div>
                <div className="col-sm-12 col-md-4 col-lg-2">
                  <img src={TrustedFive} alt="trusted-five" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-5 img-col">
            <img className="trusted-img" src={TrustedImg} alt="TrustedImg" />
          </div>
          <div className="col-sm-12 col-md-5">
            <div className="heading-text">
              <h2>Awesome app Features</h2>
              <p>
                Increase productivity with a simple to-do app. app for managing
                your personal budgets.
              </p>
            </div>
            <div className="content">
              <div className="contaienr">
                <div className="row">
                  <div className="card">
                    <img src={speed} alt="speed" />
                    <div className="text">
                      <h4>Fast Performance</h4>
                      <p>
                        Get your blood tests delivered at home collect a sample
                        from the news your blood tests.
                      </p>
                    </div>
                  </div>
                  <div className="card">
                    <img src={prototype} alt="prototype" />
                    <div className="text">
                      <h4>Prototyping</h4>
                      <p>
                        Get your blood tests delivered at home collect a sample
                        from the news your blood tests.
                      </p>
                    </div>
                  </div>
                  <div className="card">
                    <img src={victor} alt="victor" />
                    <div className="text">
                      <h4>Vector Editing</h4>
                      <p>
                        Get your blood tests delivered at home collect a sample
                        from the news your blood tests.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trusted;
