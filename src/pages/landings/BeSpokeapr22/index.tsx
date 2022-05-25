// import { useContext } from 'react';
// import { CampaingContext } from '../../../components/campaingtemplate/CampaingTemplate';
import Carousel from '../../../components/carousel/Slider';
import Footer from '../../../components/footer'
import Header from '../../../components/header'
import { useDevice } from '../../../hooks/useDevice';
// import MainSlide_Desktop from '../../../assets/images/bespoke/mainslide_desktop.png'
// import MainSlide_Mobile from '../../../assets/images/bespoke/mainslide_mobile.png'
import Intro_Desktop from '../../../assets/images/bespoke/BeSpoke_Preregistro_Landing_1922x1110.jpg'
import Intro_Mobile from '../../../assets/images/bespoke/BeSpoke_Preregistro_Mobile_598x374px.jpg'
import carousel_img from '../../../assets/images/bespoke/Intro-Fito-800x770_Desktop.jpg'
import Collapsible from '../../../components/Collapsible';
import ScrollTo from './components/ScrollTo';
import FormBespoke from './components/FormBespoke';
import './styles.scss';


const BeSpokeapr22 = () => {

    const { isDesktop, isMobile, isTablet, isLaptop } = useDevice();



    return (
        <>
            <Header/>
            <div className='container'>
                <section>
                    {(isDesktop || isLaptop) && (
                        <img src={`/images/bespoke/BeSpoke_Preregistro_Landing_1902x650px.gif`} alt='Bespoke Fito Espinoza' width='100%'/>
                    )}
                    {(isMobile || isTablet) && (
                        <img src={`/images/bespoke/BeSpoke_Preregistro_Landing_768x600px.gif`} alt='Bespoke Fito Espinoza' width='100%'/>
                    )}
                    {/* {(isMobile || isTablet) && (
                        <img src={MainSlide_Mobile} alt='Bespoke Fito Espinoza' width='100%'/>
                    )} */}
                </section>

                <section id='pre--registro'>
                    <h2 className='common-title text-center'>Pre-regístrate y gana</h2>
                    <p className='a-subtitle text-center'>Regístrate y participa para que Fito Espinosa personalice tu BESPOKE. Elige entre uno de los 20 diseños que tiene para ti.</p>
                    
                    <div className='form-container slider'>
{/*                         <Carousel>
                            <img src={carousel_img} alt='Galaxy S22' width='100%'/>
                            <img src={carousel_img} alt='Galaxy S22 Plus' width='100%'/>
                            <img src={carousel_img} alt='Galaxy S22 Ultra' width='100%'/>
                        </Carousel> */}

                        <img className='grid-image' src={(isDesktop || isLaptop) ? carousel_img : carousel_img} alt="Bespoke promotion 1" width="100%"/>
                        <FormBespoke />

                    </div>
                </section>

                <section>
                    <h2 className='common-title text-center'>Tu espacio, tu estilo</h2>
                    <p className='a-subtitle text-center'>Elige como lucirá tu cocina con nuestras nuevas e innovadoras refrigeradoras que están repletas de características y te dan el poder de elegir colores que se adapten a tu estilo.</p>
                    

                    <img className='grid-image' src={(isDesktop || isLaptop) ? Intro_Desktop : Intro_Mobile} alt="Bespoke promotion 1" width="100%"/>

                    <div className='colors'>
                        <div className='colors-group slider'>
                          {(isDesktop || isLaptop) && (
                              <Carousel>
                                <div className='fito-desing'>
                                  <img src={`/images/bespoke/fito-artes-1.jpg`} alt='Galaxy S22' width='100%'/>
                                  <img src={`/images/bespoke/fito-artes-2.jpg`} alt='Galaxy S22 Plus' width='100%'/>
                                  <img src={`/images/bespoke/fito-artes-3.jpg`} alt='Galaxy S22 Ultra' width='100%'/>
                                  <img src={`/images/bespoke/fito-artes-4.jpg`} alt='Galaxy S22 Ultra' width='100%'/>
                                </div>
                                <div className='fito-desing'>
                                  <img src={`/images/bespoke/fito-artes-5.jpg`} alt='Galaxy S22' width='100%'/>
                                  <img src={`/images/bespoke/fito-artes-6.jpg`} alt='Galaxy S22 Plus' width='100%'/>
                                  <img src={`/images/bespoke/fito-artes-7.jpg`} alt='Galaxy S22 Ultra' width='100%'/>
                                  <img src={`/images/bespoke/fito-artes-8.jpg`} alt='Galaxy S22 Ultra' width='100%'/>
                                </div>
                                <div className='fito-desing'>
                                  <img src={`/images/bespoke/fito-artes-9.jpg`} alt='Galaxy S22' width='100%'/>
                                  <img src={`/images/bespoke/fito-artes-10.jpg`} alt='Galaxy S22 Plus' width='100%'/>
                                  <img src={`/images/bespoke/fito-artes-11.jpg`} alt='Galaxy S22 Ultra' width='100%'/>
                                  <img src={`/images/bespoke/fito-artes-12.jpg`} alt='Galaxy S22 Ultra' width='100%'/>
                                </div>
                            </Carousel>
                          )}
                          {(isMobile || isTablet) && (
                              <Carousel>
                                  <div style={{display:"flex",flexDirection:"column",gap:"16px"}}>
                                    <img src={`/images/bespoke/fito-artes-1.jpg`} alt='Galaxy S22' width='100%'/>
                                    <img src={`/images/bespoke/fito-artes-2.jpg`} alt='Galaxy S22 Plus' width='100%'/>
                                    <img src={`/images/bespoke/fito-artes-3.jpg`} alt='Galaxy S22 Ultra' width='100%'/>
                                  </div>
                                  <div style={{display:"flex",flexDirection:"column",gap:"16px"}}>
                                    <img src={`/images/bespoke/fito-artes-4.jpg`} alt='Galaxy S22 Ultra' width='100%'/>
                                    <img src={`/images/bespoke/fito-artes-5.jpg`} alt='Galaxy S22' width='100%'/>
                                    <img src={`/images/bespoke/fito-artes-6.jpg`} alt='Galaxy S22 Plus' width='100%'/>
                                  </div>
                                  <div style={{display:"flex",flexDirection:"column",gap:"16px"}}>
                                    <img src={`/images/bespoke/fito-artes-7.jpg`} alt='Galaxy S22 Ultra' width='100%'/>
                                    <img src={`/images/bespoke/fito-artes-8.jpg`} alt='Galaxy S22 Ultra' width='100%'/>
                                    <img src={`/images/bespoke/fito-artes-9.jpg`} alt='Galaxy S22' width='100%'/>
                                  </div>
                                  <div style={{display:"flex",flexDirection:"column",gap:"16px"}}>
                                    <img src={`/images/bespoke/fito-artes-10.jpg`} alt='Galaxy S22 Ultra' width='100%'/>
                                    <img src={`/images/bespoke/fito-artes-11.jpg`} alt='Galaxy S22 Ultra' width='100%'/>
                                    <img src={`/images/bespoke/fito-artes-12.jpg`} alt='Galaxy S22' width='100%'/>
                                  </div>
                              </Carousel>
                          )}
                        </div>
                    </div>

                    <div className='grid-images'>
                        <img className='grid-image' src={`/images/bespoke/bespoke-1.jpg`} alt="Bespoke promotion 1"/>
                        <img className='grid-image' src={`/images/bespoke/bespoke-2.jpg`} alt="Bespoke promotion 2"/>
                        <img className='grid-image' src={`/images/bespoke/bespoke-5.jpg`} alt="Bespoke promotion 5"/>
                        <img className='grid-image' src={`/images/bespoke/bespoke-3.jpg`} alt="Bespoke promotion 3"/>
                        <img className='grid-image' src={`/images/bespoke/bespoke-4.jpg`} alt="Bespoke promotion 4"/>
                    </div>
                </section>

                {/* <section>
                    <h2 className='common-title text-center'>Totalmente a tu medida</h2>
                    <p className='a-subtitle text-center'>Conoce todas las variedades de medidas de neveras que tenemos para ti y elige cual se adapta mejor a tu estilo</p>
                    
                    <iframe 
                        className="video-player" 
                        src="https://www.youtube.com/embed/eKS0oq3yQd8?wmode=opaque&amp;rel=0&amp;enablejsapi=1&amp;version=3&amp;origin=https://www.samsung.com&amp;autoplay=0&amp;mute=0"
                        frameBorder="0" 
                        allow="autoplay" 
                        sandbox="allow-scripts allow-same-origin allow-presentation" 
                        id="eu5JpVI586s0" 
                        title="The Liveshop" 
                        width="100%"
                        height="600px"
                    />
                </section> */}

                <section>
                    <h2 className='common-title text-center'>Diseño modular que se adapta a tu estilo de vida</h2>
                    <p className='a-subtitle text-center'>Innovación y calidad para mantener tus alimentos y bebidas siempre frescos</p>
                    
                    <div className='function'>
                        <div className='function-banner'>
                            <img src={`/images/bespoke/Lifestyle+3PODs_Refrigeradoras.jpg`} width="100%" alt='Banner promotion bespoke 2022'/>
                        </div>
                        <div className='function-collapsibles'>
                            <Collapsible
                                defaultState={true}
                                header={(
                                    <div className='function-collapsibles__header'>
                                        <span className='function-collapsibles__number'>01</span>
                                        <p className='function-collapsibles__text'>BeSpoke - Diseño personalizado</p>
                                    </div>
                                )}
                            >
                                <div className='function-collapsibles__content'>
                                    <p>
                                        Combina las refrigeradoras de acuerdo a tu estilo de vida
                                    </p>
                                
                                </div>
                            </Collapsible>

                            <Collapsible 
                                defaultState={true}
                                header={(
                                    <div className='function-collapsibles__header'>
                                        <span className='function-collapsibles__number'>02</span>
                                        <p className='function-collapsibles__text'>SpaceMax™️</p>
                                    </div>
                                )}
                            >
                                <div className='function-collapsibles__content'>
                                    <p>
                                        Optimiza el espacio interno para almacenar más alimentos en tu refrigeradora
                                    </p>
                                </div>
                            </Collapsible>

                            <Collapsible 
                                defaultState={true}
                                header={(
                                    <div className='function-collapsibles__header'>
                                        <span className='function-collapsibles__number'>03</span>
                                        <p className='function-collapsibles__text'>Puerta Reversible</p>
                                    </div>
                                )}
                            >
                                <div className='function-collapsibles__content'>
                                    <p>
                                        Elige la dirección en la que quieras abrir tu refrigeradora con la puerta reversible
                                    </p>
                                </div>
                            </Collapsible>

                            <Collapsible 
                                defaultState={true}
                                header={(
                                    <div className='function-collapsibles__header'>
                                        <span className='function-collapsibles__number'>04</span>
                                        <p className='function-collapsibles__text'>Refrigeración Flexible</p>
                                        <p>
                                        {'\u00A0'} *Aplica solo en modelo 1 door
                                        </p>
                                    </div>
                                )}
                            >
                                <div className='function-collapsibles__content'>
                                    <p>
                                        Convierte tu refrigeradora de conservador a congelador de acuerdo a tus necesidades
                                    </p>
                                </div>
                            </Collapsible>

                         

                        </div>
                    </div>
                </section>
            </div>
            <Footer/>
            <ScrollTo />
        </>
    )
}

export default BeSpokeapr22