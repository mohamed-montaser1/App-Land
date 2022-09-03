import "../components-style/clients.css";
import clients from "../imgs/clients.png";
import { FaStar } from "react-icons/fa";
import userFace from "../imgs/user-face.png";
import nextArrow from "../imgs/next-arrow.png";
const Clients = () => {
  return (
    <section className="clients-section" id="testiminial">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-lg-6">
            <img src={clients} className="clients" alt="clients" />
          </div>
          <div className="col-sm-12 col-lg-6">
            <div
              id="Clients-carousel"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <h2>Meet Client Satisfaction by using product</h2>
                  <p>
                    The rise of mobile devices transforms the way we consume.
                    elevant channels such as Facebook.
                  </p>
                  <div>
                    <FaStar className="star" />
                    <FaStar className="star" />
                    <FaStar className="star" />
                    <FaStar className="star" />
                    <FaStar className="star" />
                  </div>
                  <div className="text">
                    <h4>User friendly & Customizable</h4>
                    <p>
                      Bring to the table win-win survival strategies to ensure
                      proactive domination. At the end of the day, going
                      forward, a new normal that has evolved from generation X
                      is on the runway heading towards a streamlined cloud
                      solution. User generated content in real-time will have
                      multiple touchpoints for offshoring.
                    </p>
                  </div>
                  <div className="user">
                    <img src={userFace} alt="userFace" />
                    <div className="text">
                      <h4 className="username">Zoltan Nemeth</h4>
                      <p className="job-name">CEO of Pixler Lab</p>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <h2>Meet Client Satisfaction by using product</h2>
                  <p>
                    The rise of mobile devices transforms the way we consume.
                    elevant channels such as Facebook.
                  </p>
                  <div>
                    <FaStar className="star" />
                    <FaStar className="star" />
                    <FaStar className="star" />
                    <FaStar className="star" />
                    <FaStar className="star" />
                  </div>
                  <div className="text">
                    <h4>User friendly & Customizable</h4>
                    <p>
                      Bring to the table win-win survival strategies to ensure
                      proactive domination. At the end of the day, going
                      forward, a new normal that has evolved from generation X
                      is on the runway heading towards a streamlined cloud
                      solution. User generated content in real-time will have
                      multiple touchpoints for offshoring.
                    </p>
                  </div>
                  <div className="user">
                    <img src={userFace} alt="userFace" />
                    <div className="text">
                      <h4 className="username">Zoltan Nemeth</h4>
                      <p className="job-name">CEO of Pixler Lab</p>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <h2>Meet Client Satisfaction by using product</h2>
                  <p>
                    The rise of mobile devices transforms the way we consume.
                    elevant channels such as Facebook.
                  </p>
                  <div>
                    <FaStar className="star" />
                    <FaStar className="star" />
                    <FaStar className="star" />
                    <FaStar className="star" />
                    <FaStar className="star" />
                  </div>
                  <div className="text">
                    <h4>User friendly & Customizable</h4>
                    <p>
                      Bring to the table win-win survival strategies to ensure
                      proactive domination. At the end of the day, going
                      forward, a new normal that has evolved from generation X
                      is on the runway heading towards a streamlined cloud
                      solution. User generated content in real-time will have
                      multiple touchpoints for offshoring.
                    </p>
                  </div>
                  <div className="user">
                    <img src={userFace} alt="userFace" />
                    <div className="text">
                      <h4 className="username">Zoltan Nemeth</h4>
                      <p className="job-name">CEO of Pixler Lab</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="control-container">
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#Clients-carousel"
                  data-bs-slide="next"
                >
                  <img src={nextArrow} alt="nextArrow" />
                </button>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#Clients-carousel"
                  data-bs-slide="prev"
                >
                  <img src={nextArrow} alt="nextArrow" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
