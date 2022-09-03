import "../components-style/FeaturesWeBuild.css";
import webDesign from "../imgs/web-design.png";
import ui from "../imgs/ui.png";
import computer from "../imgs/computer.png";
import customerSupport from "../imgs/customer-support.png";
import phoneFeatures from "../imgs/phone-features.png";
const FeaturesWeBuild = () => {
  return (
    <section className="features-we-build" id="pricing">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="heading">
              <h2>Ultmate features that we build</h2>
              <p>
                The rise of mobile devices transforms the way we consume
                information entirely.
              </p>
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-md-6">
                  <img src={webDesign} alt="web design" />
                  <div className="text">
                    <h4>App Development</h4>
                    <p>
                      Get your blood tests delivered at home collect a sample
                      from the news your blood tests.
                    </p>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6">
                  <img src={ui} alt="web design" />
                  <div className="text">
                    <h4>UX Planning</h4>
                    <p>
                      Get your blood tests delivered at home collect a sample
                      from the news your blood tests.
                    </p>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6">
                  <img src={computer} alt="web design" />
                  <div className="text">
                    <h4>Cloud Storage</h4>
                    <p>
                      Get your blood tests delivered at home collect a sample
                      from the news your blood tests.
                    </p>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6">
                  <img src={customerSupport} alt="web design" />
                  <div className="text">
                    <h4>Customer Support</h4>
                    <p>
                      Get your blood tests delivered at home collect a sample
                      from the news your blood tests.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-5">
            <img src={phoneFeatures} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesWeBuild;
