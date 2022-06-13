import "./bespoke-oechsle.scss";
import Cards from "./components/Cards";
import Features from "./components/Features";
import Hero from "./components/Hero";
import ImagesContainer from "./components/ImagesContainer";
import Video from "./components/Video";
import logo_samsung from "../../../assets/images/svg/svg-logo.svg";
import { InitGtm } from "../../../utils/gtm";


const BespokeOechsle = () => {

  InitGtm('GTM-KTFDR5Q');

  return (
    <div className="main--container-oechsle" style={{marginBottom: '50px'}}>
      <div className="line">
        <div className="logo-samsung">
          <img src={logo_samsung} alt="logo-samsung" />
        </div>
      </div>
      <Hero />
      
      <Video />
      <div className="brand-button-container">
        <a className="brand-button" href="https://busca.oechsle.pe/search?query=bespoke" target='_blank' rel="noreferrer">Ver todo</a>
      </div>
      <Features />
      <ImagesContainer />
      <Cards />
    </div>
  );
};
export default BespokeOechsle;
