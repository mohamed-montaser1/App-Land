import "./main.css";
import Header from "./components/Header";
import Trusted from "./components/Trusted";
import Smart_jackpot from "./components/Smart_jackpot";
import Design from "./components/Design";
import Why_Our_App from "./components/Why_Our_App";
import FeaturesWeBuild from "./components/FeaturesWeBuild";
import AwesomeFeatures from "./components/AwesomeFeatures";
import Clients from "./components/Clients";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import "./components/ScrollWindowEffects";
function App() {
  return (
    <>
      <Header />
      <Trusted />
      <Smart_jackpot />
      <Design />
      <Why_Our_App />
      <FeaturesWeBuild />
      <AwesomeFeatures />
      <Clients />
      <Faq />
      <Footer />
    </>
  );
}

export default App;
