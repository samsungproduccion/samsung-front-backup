import TagManager from "react-gtm-module";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import Footer from "../../../components/footer_v2/Footer";
import Header from "../../../components/header_v2/Header";
import { useDevice } from "../../../hooks/useDevice";
import Hero from "./components/Hero";
import Steps from "./components/Steps";
import Tabs from "./components/Tabs";
import './styles.scss';

// const Tabs = lazy(() => import('./components/Tabs'));
const tagManagerArgs = {
    gtmId: 'GTM-MLKDFDF'
}

const PremiumService = () => {
    if(tagManagerArgs) TagManager.initialize(tagManagerArgs)
    const deviceSize = useDevice();
    return (
        <>
        <Header />
        <div className="ps--content">
            <Hero screenSize={deviceSize} />
            <Steps  />           

                <LazyLoadComponent>
                    <Tabs />
                </LazyLoadComponent>
            

            <div className="ps--terms-container">
                <h4 className="terms-title"> 
                    <a href="https://res.cloudinary.com/cheil-peru/image/upload/v1650572726/tyc/Requerimientos_y_Condiciones_de_Instalaci%C3%B3n_uf2wx9.pdf" target="_blank" rel="noreferrer">Términos y Condiciones</a> 
                </h4>
            </div>
        </div>
        <Footer />
        </>
    );
}
 
export default PremiumService;