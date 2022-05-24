import { useDevice } from '../../../hooks/useDevice';
import Header from '../../../components/header_v2/Header';
import Footer from '../../../components/footer_v2/Footer';
import ImgDesktop from "../../../assets/images/freeStyle/landing/freestyle-v4_kv_1902.jpg";
import ImgMobile from "../../../assets/images/freeStyle/landing/freestyle-v4_kv_768.jpg";
import './style.scss';

const ThankYouNightBeyond = ()=>{

    const { isDesktop, isMobile, isTablet, isLaptop } = useDevice();

    return (
        <>
        <Header/>

            {(isDesktop || isLaptop) && (
                <img className='imgBanner' src={ImgDesktop} width="100%" alt='freestyle banner'/>
            )}
            {(isMobile || isTablet) && (
                <img className='imgBanner' src={ImgMobile} width="100%" alt='freestyle banner'/>
            )}
            
            <div className='divMsj'>
                <h1>¡Gracias por registrarte!</h1>
                <h2>Tus datos han sido enviados con éxito, estate muy atento a tu correo electrónico que muy pronto te
                enviaremos información sobre la preventa del FreeStyle y acceder a beneficios insuperables.</h2>
                <h3>Para mayor información, te invitamos a ingresar aquí <br></br> <a href='https://www.samsung.com.pe/nightbeyond/' target='_blank' rel="noreferrer">https://www.samsung.com.pe/nightbeyond/</a></h3>
            </div>

            <div className='divSocial'>
                <h4>No te olvides de seguirnos en nuestras redes sociales</h4>
                <div className='divRowImage'>
                    <div className='divItemImage'>
                        <a href='https://instagram.com/samsungpe?utm_medium=copy_link' target='_blank' rel="noreferrer">
                            <img className='imageIg' src="images/freeStyle/icon-ig-90.webp" alt="Instagram"></img>
                        </a>
                    </div>
                    <div className='divItemImage'>
                        <a href='https://youtube.com/user/SamsungPeru' target='_blank' rel="noreferrer">
                            <img className='imageYt' src="images/freeStyle/icon-yt-90.webp" alt="Youtube"></img>
                        </a>
                    </div>
                </div>
            </div>

        <Footer/>
        </>
    );

}


export default ThankYouNightBeyond
