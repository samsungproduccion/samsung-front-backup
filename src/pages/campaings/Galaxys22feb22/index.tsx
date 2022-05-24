import React, {MouseEventHandler, useState} from 'react'
import CampaingTemplate from '../../../components/campaingtemplate/CampaingTemplate'
import Carousel from '../../../components/carousel/Slider'
import './styles.scss'

import Footer from '../../../components/footer';
import Header from '../../../components/header';
import { useDevice } from '../../../hooks/useDevice'
import Steps from './Steps'
import BannerDesktopFirst from '../../../assets/images/S22/Landing Evoucher V3.jpg'
import BannerDesktopSecond from '../../../assets/images/S22/Landing-Evoucher-TabS8.jpg'
import BannerMobileFirst from '../../../assets/images/S22/Landing-Evoucher-S22-M.jpg'
import BannerMobileSecond from '../../../assets/images/S22/Landing-Evoucher-TabS8-M.jpg'
import Modal from './Modal'

import BannerDesktopS22 from '../../../assets/images/S22/s22.jpg'
import BannerDesktopS22v2 from '../../../assets/images/S22/s22plus.jpg'
import BannerDesktopS22v3 from '../../../assets/images/S22/s22ultra.jpg'

import BannerDesktopS22other from '../../../assets/images/S22/01-otras-opciones-s22.jpg'
import BannerDesktopS22v2other from '../../../assets/images/S22/02-otras-opciones-s22.jpg'

import BannerDesktopTab8 from '../../../assets/images/S22/Tabs8.jpg'
import BannerDesktopTab8v2 from '../../../assets/images/S22/Tabs8plus.jpg'
import BannerDesktopTab8v3 from '../../../assets/images/S22/Tabs8ultra.jpg'

import BannerDesktopTab8other from '../../../assets/images/S22/01-otras-opciones-tabs8.jpg'
import BannerDesktopTab8v2other from '../../../assets/images/S22/02-otras-opciones-tabs8.jpg'

import BannerMobileS22other1 from '../../../assets/images/S22/01-otras-opciones-s22mobile.jpg'
import BannerMobileS22other2 from '../../../assets/images/S22/02-otras-opciones-s22mobile.jpg'
import BannerMobileS22other3 from '../../../assets/images/S22/03-otras-opciones-s22mobile.jpg'
import BannerMobileS22other4 from '../../../assets/images/S22/04-otras-opciones-s22mobile.jpg'

import BannerMobileTabs8other1 from '../../../assets/images/S22/01-otras-opciones-tabs8mobile.jpg'
import BannerMobileTabs8other2 from '../../../assets/images/S22/02-otras-opciones-tabs8mobile.jpg'
import BannerMobileTabs8other3 from '../../../assets/images/S22/03-otras-opciones-tabs8mobile.jpg'
import BannerMobileTabs8other4 from '../../../assets/images/S22/04-otras-opciones-tabs8mobile.jpg'

import BannerMobileS22 from '../../../assets/images/S22/01-s22.jpg'
import BannerMobileS22v2 from '../../../assets/images/S22/02-s22.jpg'
import BannerMobileS22Plus from '../../../assets/images/S22/01-s22plus.jpg'
import BannerMobileS22Plusv2 from '../../../assets/images/S22/02-s22plus.jpg'
import BannerMobileS22Ultra from '../../../assets/images/S22/01-s22ultra.jpg'
import BannerMobileS22Ultrav2 from '../../../assets/images/S22/02-s22ultra.jpg'

import BannerMobileTabs8 from '../../../assets/images/S22/01-tabs8.jpg'
import BannerMobileTabs8v2 from '../../../assets/images/S22/02-tabs8.jpg'
import BannerMobileTabs8Plus from '../../../assets/images/S22/01-tabs8plus.jpg'
import BannerMobileTabs8Plusv2 from '../../../assets/images/S22/02-tabs8plus.jpg'
import BannerMobileTabs8Ultra from '../../../assets/images/S22/01-tabs8ultra.jpg'
import BannerMobileTabs8Ultrav2 from '../../../assets/images/S22/02-tabs8ultra.jpg'

const GalaxyS22_22FEB = () => {

  const { isDesktop, isMobile, isTablet, isLaptop } = useDevice();
  const [modalIsOpen, setModalIsOpen] = useState(false);
    const handleModal:MouseEventHandler = (e) => {
        e.preventDefault();
        setModalIsOpen(!modalIsOpen)
  }
  return (
    <>
      <Header/>
        <CampaingTemplate id='GalaxyS22_22FEB' title='Galaxy S22 | Samsung Perú' gtmId='GTM-WDNHMJJ'>
          <div className='slider'>
            {(isDesktop || isLaptop) && (
              <Carousel>
                <img src={BannerDesktopFirst} alt='Samsung Galaxy S22' width='100%'/>
                <img src={BannerDesktopSecond} alt='Samsung Galaxy S8' width='100%'/>
              </Carousel>
            )}
            {(isMobile || isTablet) && (
              <Carousel>
                <img src={BannerMobileFirst} alt='Samsung Galaxy S22' width='100%'/>
                <img src={BannerMobileSecond} alt='Samsung Galaxy S8' width='100%'/>
              </Carousel>
            )}
          </div>
          <div>
            <div className='center'>
              <a className='link cta cta--contained cta--emphasis' onClick={handleModal} href='/react'> Comprar ahora </a>
            </div>
          </div>
          <div className='models flex flex-col'>
            {(isDesktop || isLaptop) && (
              <>
                <div className='model'>
                  <h3 className='common-title text-center title-galaxy'>Galaxy S22</h3>
                  <p className='a-subtitle text-center'>Usa tu cupón en las siguientes opciones:</p>
                  <Carousel>
                    <img src={BannerDesktopS22} alt='Galaxy S22' width='100%'/>
                    <img src={BannerDesktopS22v2} alt='Galaxy S22 Plus' width='100%'/>
                    <img src={BannerDesktopS22v3} alt='Galaxy S22 Ultra' width='100%'/>
                  </Carousel>
                </div>
                <div className='model'>
                  <p className='a-subtitle text-center'>Además podrás usar tu cupón como parte de pago en:</p>
                  <Carousel>
                    <img src={BannerDesktopS22other} alt='Galaxy S22' width='100%'/>
                    <img src={BannerDesktopS22v2other} alt='Galaxy S22' width='100%'/>
                  </Carousel>
                </div>
                <div className='model'>
                  <h3 className='common-title text-center title-galaxy'>Tab S8</h3>
                  <p className='a-subtitle text-center'>Usa tu cupón en las siguientes opciones:</p>
                  <Carousel>
                    <img src={BannerDesktopTab8} alt='Galaxy Tabs 8' width='100%'/>
                    <img src={BannerDesktopTab8v2} alt='Galaxy Tabs 8 Plus' width='100%'/>
                    <img src={BannerDesktopTab8v3} alt='Galaxy Tabs 8 Ultra' width='100%'/>
                  </Carousel>
                </div>
                <div className='model'>
                  <p className='a-subtitle text-center'>Además podrás usar tu cupón como parte de pago en:</p>
                  <Carousel>
                    <img src={BannerDesktopTab8other} alt='Galaxy Tabs 8' width='100%'/>
                    <img src={BannerDesktopTab8v2other} alt='Galaxy Tabs 8' width='100%'/>
                  </Carousel>
                </div>
              </>
            )}
            {(isMobile || isTablet) && (
              <>
                <div className='model'>
                  <h3 className='common-title text-center title-galaxy'>Galaxy S22</h3>
                  <p className='a-subtitle text-center'>Usa tu cupón en las siguientes opciones:</p>
                  <Carousel>
                    <img src={BannerMobileS22} alt='Galaxy S22' width='100%'/>
                    <img src={BannerMobileS22v2} alt='Galaxy S22' width='100%'/>
                  </Carousel>
                </div>
                <div className='model'>
                  <h3 className='common-title text-center title-galaxy'>Galaxy S22 Plus</h3>
                  <Carousel>
                    <img src={BannerMobileS22Plus} alt='Galaxy S22 Plus' width='100%'/>
                    <img src={BannerMobileS22Plusv2} alt='Galaxy S22 Plus' width='100%'/>
                  </Carousel>
                </div>
                <div className='model'>
                  <h3 className='common-title text-center title-galaxy'>Galaxy S22 Ultra</h3>
                  <Carousel>
                    <img src={BannerMobileS22Ultra} alt='Galaxy S22 Ultra' width='100%'/>
                    <img src={BannerMobileS22Ultrav2} alt='Galaxy S22 Ultra' width='100%'/>
                  </Carousel>
                </div>
                <div className='model'>
                  <p className='a-subtitle text-center'>Además podrás usar tu cupón como parte de pago en:</p>
                  <Carousel>
                    <img src={BannerMobileS22other1} alt='Galaxy S22' width='100%'/>
                    <img src={BannerMobileS22other2} alt='Galaxy S22' width='100%'/>
                    <img src={BannerMobileS22other3} alt='Galaxy S22' width='100%'/>
                    <img src={BannerMobileS22other4} alt='Galaxy S22' width='100%'/>
                  </Carousel>
                </div>



                <div className='model'>
                  <h3 className='common-title text-center title-galaxy'>Galaxy Tab S8</h3>
                  <p className='a-subtitle text-center'>Usa tu cupón en las siguientes opciones:</p>
                  <Carousel>
                    <img src={BannerMobileTabs8} alt='Galaxy Tabs 8' width='100%'/>
                    <img src={BannerMobileTabs8v2} alt='Galaxy Tabs 8' width='100%'/>
                  </Carousel>
                </div>
                <div className='model'>
                  <h3 className='common-title text-center title-galaxy'>Galaxy Tab S8 Plus</h3>
                  <Carousel>
                    <img src={BannerMobileTabs8Plus} alt='Galaxy Tabs 8 Plus' width='100%'/>
                    <img src={BannerMobileTabs8Plusv2} alt='Galaxy Tabs 8 Plus' width='100%'/>
                  </Carousel>
                </div>
                <div className='model'>
                  <h3 className='common-title text-center title-galaxy'>Galaxy Tab S8 Ultra</h3>
                  <Carousel>
                    <img src={BannerMobileTabs8Ultra} alt='Galaxy Tabs 8 Ultra' width='100%'/>
                    <img src={BannerMobileTabs8Ultrav2} alt='Galaxy Tabs 8 Ultra' width='100%'/>
                  </Carousel>
                </div>
                <div className='model'>
                  <p className='a-subtitle text-center'>Además podrás usar tu cupón como parte de pago en:</p>
                  <Carousel>
                    <img src={BannerMobileTabs8other1} alt='Galaxy Tabs 8' width='100%'/>
                    <img src={BannerMobileTabs8other2} alt='Galaxy Tabs 8' width='100%'/>
                    <img src={BannerMobileTabs8other3} alt='Galaxy Tabs 8' width='100%'/>
                    <img src={BannerMobileTabs8other4} alt='Galaxy Tabs 8' width='100%'/>
                  </Carousel>
                </div>
              </>
            )}
          </div>

          <div className='center'>
            <a className='link cta cta--contained cta--emphasis' onClick={handleModal} href='/react'> Comprar ahora </a>
          </div>
          
          <Steps/>

          <div className='video'>
            <div className='video-wrapper'></div>
            <iframe 
              className="video-player" 
              src="https://www.youtube.com/embed/f5r_iIYQsB4?wmode=opaque&amp;rel=0&amp;enablejsapi=1&amp;version=3&amp;origin=https://www.samsung.com&amp;autoplay=0&amp;mute=0"
              frameBorder="0" 
              allow="autoplay" 
              sandbox="allow-scripts allow-same-origin allow-presentation" 
              id="eu5JpVI586s0" 
              title="The Liveshop" 
              style={{width: "100%", height: "100%", position:"absolute"}}
            />
          </div>

          <div className='flex row center terms'>
            <a className='link cta cta--contained cta--emphasis' href='/redimetucupon/Terminos y Condiciones Evoucher PRE VENTA Samsung Galaxy S22 (180222).pdf' target='_blank' rel="noopener"> TÉRMINOS Y CONDICIONES GALAXY S22</a>
            <a className='link cta cta--contained cta--emphasis' href='/redimetucupon/Terminos y Condiciones Evoucher PRE VENTA Samsung Galaxy Tab S8 (210222).pdf' target='_blank' rel="noopener"> TÉRMINOS Y CONDICIONES GALAXY TAB S8</a>
          </div>

          <Modal setModalIsOpen={setModalIsOpen} modalIsOpen={modalIsOpen}/>
        </CampaingTemplate>
      <Footer/>
    </>
  )
}

export default GalaxyS22_22FEB