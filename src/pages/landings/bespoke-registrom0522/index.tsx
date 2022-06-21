import Footer from '../../../components/footer_v2/Footer';
import Header from '../../../components/header_v2/Header';
import { InitGtm } from '../../../utils/gtm';
import Hero from './components/Hero';
import Main from './components/Main';
import './styles.scss';


const BeSpokeRegistro = () => {
   
    InitGtm('GTM-KTFDR5Q');
    document.title = 'Samsung | Bespoke';
    return(
        <>
        <Header />
        <div className="main-container">
            <Hero />
            <Main />
        </div>
        <Footer />
        </>  
    );
}

export default BeSpokeRegistro