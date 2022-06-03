import "./bespoke-falabella.scss";
import Cards from "./components/Cards";
import Features from "./components/Features";
import Hero from "./components/Hero";
import ImagesContainer from "./components/ImagesContainer";
import Video from "./components/Video";
import logo_samsung from "../../../assets/images/svg/svg-logo.svg";
const BespokeFalabella = () => {
  return (
    <div className="main--container-fb" style={{marginBottom: '50px'}}>
      <div className="line">
        <div className="logo-samsung">
          <img src={logo_samsung} alt="logo-samsung" />
        </div>
      </div>
      <Hero />
      <Video />
      <Features />
      <ImagesContainer />
      <Cards />
    </div>
  );
};
export default BespokeFalabella;
