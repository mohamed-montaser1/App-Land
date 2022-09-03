import "../components-style/our_app.css";
import webDesign from "../imgs/web-design.png";
import trophy from "../imgs/trophy.png";
import computer from "../imgs/computer.png";
import customerSupport from "../imgs/customer-support.png";
import ui from "../imgs/ui.png";
import customerSevices from "../imgs/customer-service.png";
const Why_Our_App = () => {
  return (
    <section className="our-app">
      <div className="text-center">
        <h2>Why you should choose our app</h2>
        <p>
          The rise of mobile devices transforms the way we consume information
          entirely and the world's most elevant channels such as Facebook.
        </p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-4">
            <img src={webDesign} alt="web design" />
            <div className="text">
              <h4>App Development</h4>
              <p>
                Get your blood tests delivered at home collect a sample from the
                news your blood tests.
              </p>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <img src={trophy} alt="trophy" />
            <div className="text">
              <h4>10 Times Award</h4>
              <p>
                Get your blood tests delivered at home collect a sample from the
                news your blood tests.
              </p>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <img src={computer} alt="web design" />
            <div className="text">
              <h4>Cloud Storage</h4>
              <p>
                Get your blood tests delivered at home collect a sample from the
                news your blood tests.
              </p>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <img src={customerSupport} alt="trophy" />
            <div className="text">
              <h4>Customization</h4>
              <p>
                Get your blood tests delivered at home collect a sample from the
                news your blood tests.
              </p>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <img src={ui} alt="web design" />
            <div className="text">
              <h4>UX Planning</h4>
              <p>
                Get your blood tests delivered at home collect a sample from the
                news your blood tests.
              </p>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <img src={customerSevices} alt="trophy" />
            <div className="text">
              <h4>Customer Support</h4>
              <p>
                Get your blood tests delivered at home collect a sample from the
                news your blood tests.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why_Our_App;
