import "../components-style/awesomeFeatures.css";

const AwesomeFeatures = () => {
  let buttons = document.querySelectorAll(
    ".awesome-features .text-center .choose-price button"
  );
  const changeActiveBtn = () => {
    buttons.forEach((el) => {
      el.onclick = function () {
        buttons.forEach((el) => {
          el.classList.remove("active");
        });
        this.classList.add("active");

        if (this.classList.contains("monthly")) {
          let pro = document.querySelector(".pro-price");
          pro.innerHTML = "99$/<span>month</span>";
        } else {
          let pro = document.querySelector(".pro-price");
          pro.innerHTML = "1188$/<span>year</span>";
        }
      };
    });
  };
  changeActiveBtn();
  return (
    <section className="awesome-features">
      <div className="text-center">
        <h2>Get awesome features, without extra charges</h2>
        <p>
          The rise of mobile devices transforms the way we consume information
          entirely and the world's most elevant channels such as Facebook.
        </p>
        <div className="choose-price">
          <button className="active monthly">Monthly</button>
          <button className="annully">Annully</button>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <div className="price-card price-card-one">
              <div className="card-header">
                <h2>
                  $0/<span>month</span>
                </h2>
                <h3>Business Class</h3>
                <h4>For small teams or office</h4>
              </div>
              <div className="card-body">
                <ul>
                  <li>
                    <p>Darg & Drop Builder</p>
                  </li>
                  <li>
                    <p>1,000's of Templates</p>
                  </li>
                  <li>
                    <p>Blog Support Tools</p>
                  </li>
                  <li>
                    <p>eCommerce Store</p>
                  </li>
                  <button className="for-free">Start free trial</button>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <div className="price-card price-card-two">
              <div className="card-header">
                <h2 className="pro-price">
                  $99/<span>month</span>
                </h2>
                <h3>Pro Master</h3>
                <h4>For Best opportunities</h4>
              </div>
              <div className="card-body">
                <ul>
                  <li>
                    <p>Darg & Drop Builder</p>
                  </li>
                  <li>
                    <p>1,000's of Templates</p>
                  </li>
                  <li>
                    <p>Blog Support Tools</p>
                  </li>
                  <li>
                    <p>eCommerce Store</p>
                  </li>
                  <button className="for-free">Subscribe Now</button>
                  <p>Or Start 14 days trials</p>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwesomeFeatures;
