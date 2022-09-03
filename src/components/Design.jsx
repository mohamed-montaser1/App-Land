import "../components-style/Design.css";
import designImg from "../imgs/design.png";
const Design = () => {
  return (
    <section className="design">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-5">
            <img src={designImg} alt="designImg" />
          </div>
          <div className="col-sm-12 col-md-5">
            <h2>Designed & built by the latest code integration</h2>
            <p>
              The rise of mobile devices transforms the way we consume
              information entirely and the world's most elevant channels such as
              Facebook.
            </p>
            <button className="for-free">Learn more</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Design;
