import TagManager from 'react-gtm-module';
import Footer from '../../../components/footer_v2/Footer';
import Header from '../../../components/header_v2/Header';
import Hero from './components/Hero';
import Main from './components/Main';
import './styles.scss';

const gtmId= '1212';

const BeSpokeRegistro = () => {
   
    if(gtmId) TagManager.initialize({gtmId:gtmId})
   
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