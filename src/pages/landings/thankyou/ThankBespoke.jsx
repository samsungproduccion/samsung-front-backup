import { useDevice } from '../../../hooks/useDevice';
import Header from '../../../components/header_v2/Header';
import Footer from '../../../components/footer_v2/Footer';
import IconIg from "../../../assets/images/icons/icon-ig-90.webp";
import IconYt from "../../../assets/images/icons/icon-yt-90.webp";
import banner from '../../../assets/images/bespoke/main-banner-desktop.gif';
import banner_mobile from '../../../assets/images/bespoke/main-banner-mobile.gif';
import './style.scss';

const ThankBespoke = ()=>{

    const { isDesktop, isMobile, isTablet, isLaptop } = useDevice();

    // const path = 'http://localhost:3000';
    // const path = 'http://localhost:3000/premium-service';
  // const path = 'http://localhost/react/premium-service';
  // const path = 'https://premium-service.netlify.app';
  // const path = 'https://www.samsung.com.pe/premium-service';

    return (
        <>
        <Header/>

            {(isDesktop || isLaptop) && (
                <img className='imgBanner' src={banner} width="100%" alt='bespoke banner'/>
            )}
            {(isMobile || isTablet) && (
                <img className='imgBanner' src={banner_mobile} width="100%" alt='bespoke banner'/>
            )}
            
            <div className='divMsj'>
                <h1>¡Gracias por registrarte!</h1>
                <h2>Tus datos han sido enviados con éxito, estate muy atento a tu correo electrónico que muy pronto te
                enviaremos información sobre la preventa del BeSpoke y acceder a beneficios insuperables.</h2>
                <h3>Para mayor información, te invitamos a ingresar aquí <br></br> <a href='https://www.samsung.com.pe/bespoke/' target='_blank' rel="noreferrer">https://www.samsung.com.pe/bespoke/</a></h3>
            </div>

            <div className='divSocial'>
                <h4>No te olvides de seguirnos en nuestras redes sociales</h4>
                <div className='divRowImage'>
                    <div className='divItemImage'>
                        <a href='https://instagram.com/samsungpe?utm_medium=copy_link' target='_blank' rel="noreferrer">
                            <img className='imageIg' src={IconIg} alt="Instagram"></img>
                        </a>
                    </div>
                    <div className='divItemImage'>
                        <a href='https://youtube.com/user/SamsungPeru' target='_blank' rel="noreferrer">
                            <img className='imageYt' src={IconYt} alt="Youtube"></img>
                        </a>
                    </div>
                </div>
            </div>

        <Footer/>
        </>
    );

}


export default ThankBespoke
