import "../components-style/Smart_jackpot.css";
import bill from "../imgs/bill.png";
import network from "../imgs/network.png";
import badge from "../imgs/badge.png";
function Smart_jackpot() {
  return (
    <section className="smart-jackpot">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-md-5">
                  <h2>
                    Smart jackpots that you may love this anytime & anywhere
                  </h2>
                </div>
                <div className="col-sm-12 col-md-5">
                  <p>
                    The rise of mobile devices transforms the way we consume
                    information entirely and the world's most elevant channels
                    such as Facebook.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="card">
              <img src={bill} alt="bill" />
              <div className="text">
                <h4>Automatic Payouts</h4>
                <p>
                  Get your blood tests delivered at home collect a sample from
                  the news your blood tests.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="card">
              <img src={network} alt="network" />
              <div className="text">
                <h4>Network Effect</h4>
                <p>
                  Get your blood tests delivered at home collect a sample from
                  the news your blood tests.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="card">
              <img src={badge} alt="bill" />
              <div className="text">
                <h4>Bigger Rewards Method</h4>
                <p>
                  Get your blood tests delivered at home collect a sample from
                  the news your blood tests.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Smart_jackpot;
