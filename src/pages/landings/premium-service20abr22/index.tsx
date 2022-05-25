import { LazyLoadComponent } from "react-lazy-load-image-component";
import Footer from "../../../components/footer_v2/Footer";
import Header from "../../../components/header_v2/Header";
import { useDevice } from "../../../hooks/useDevice";
import { InitGtm } from "../../../utils/gtm";
import Hero from "./components/Hero";
import Steps from "./components/Steps";
import Tabs from "./components/Tabs";
import './styles.scss';

// const Tabs = lazy(() => import('./components/Tabs'));


const PremiumService = () => {
    InitGtm('GTM-MLKDFDF');
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
                    <a href="https://res.cloudinary.com/cheil-peru/image/upload/v1653496564/tyc/terminos_y_condiciones_de_instalaci%C3%B3n_2022_srnsfu.pdf" target="_blank" rel="noreferrer">Términos y Condiciones</a> 
                </h4>
            </div>
        </div>
        <Footer />
        </>
    );
}
 
export default PremiumService;