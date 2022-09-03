import "../components-style/faq.css";
import "jquery/dist/jquery.min";
import "popper.js/dist/popper.min";
import plus from "../imgs/plus.png";
import GooglePlay from "../imgs/google-play.png";
import AppStore from "../imgs/app-store.png";
import orderNow from "../imgs/order-now.png";
const Faq = () => {
  return (
    <section className="faq" id="faq">
      <div className="text-center">
        <h2 className="fw-bold">Frequently asked questions</h2>
        <p>
          The rise of mobile devices transforms the way we consume information
          entirely and the world's most elevant channels such as Facebook.
        </p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <ul>
              <li>
                <div className="acc-header">
                  <h4>How to contact with riders emergency?</h4>
                  <img src={plus} alt="plus" />
                </div>
                <p>
                  Leverage agile frameworks to provide a robust synopsis for
                  high level overviews. Iterative approaches to corporate
                  strategy foster collaborative thinking to further the overall
                  value proposition. Organically grow the holistic world view of
                  disruptive innovation via workplace diversity and empowerment.
                  Bring to the table win-win survival strategies to ensure
                  proactive domination. At the end of the day, going forward, a
                  new normal that has evolved from generation X is on the runway
                  heading towards a streamlined cloud solution. User generated
                  content in real-time will have multiple touchpoints for
                  offshoring.
                </p>
              </li>
              <li>
                <h4>
                  <div className="acc-header">
                    App installation failed, how to update system information?
                    <img src={plus} alt="plus" />
                  </div>
                </h4>
              </li>
              <li>
                <div className="acc-header">
                  <h4>Website reponse taking time, how to improve?</h4>
                  <img src={plus} alt="plus" />
                </div>
              </li>
              <li>
                <div className="acc-header">
                  <h4>New update fixed all bug and issues</h4>
                  <img src={plus} alt="plus" />
                </div>
              </li>
              <li>
                <div className="acc-header">
                  <h4>How to contact with riders emergency?</h4>
                  <img src={plus} alt="plus" />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h2 className="fw-bold">Download our App now!</h2>
            <p>
              The rise of mobile devices transforms the way we consume
              information entirely and the world's most elevant channels such as
              Facebook.
            </p>
            <div className="download-phone d-flex align-items-center">
              <img src={GooglePlay} alt="GooglePlay" />
              <img src={AppStore} alt="AppStore" />
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <img className="order-now" src={orderNow} alt="orderNow" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
