import React, {FC} from 'react'
import {ReactComponent as IconClose} from '../../../assets/images/svg/svg-close.svg'
import {ReactComponent as IconArrowRight} from '../../../assets/images/svg/svg-arw-right-gray.svg' 
import ModalUnstyled from '@mui/base/ModalUnstyled';
import { styled } from '@mui/system';

import ImageClaro from '../../../assets/images/logo-claro.jpg' 
import ImageClaroMkt from '../../../assets/images/mLogo94273.png' 
import ImageEntel from '../../../assets/images/mLogo94275.png' 
import ImageMovistar from '../../../assets/images/mLogo94271.png' 
import ImageMercadoLibre from '../../../assets/images/mLogo94287.png' 
import ImageLinio from '../../../assets/images/mLogo94837.png' 
import ImageCuracao from '../../../assets/images/mLogo94839.png' 
import ImageDiners from '../../../assets/images/logodinner.jpeg' 
import ImageEfe from '../../../assets/images/mLogo94295.png' 
import ImageHiraoka from '../../../assets/images/mLogo94299.png' 
import ImageEstilos from '../../../assets/images/mLogo94279.png' 
import ImageTottus from '../../../assets/images/mLogo94277.png' 
import ImageOe from '../../../assets/images/mLogo94283.png' 
import ImagePlazavea from '../../../assets/images/mLogo94289.png' 
import ImageFalabella from '../../../assets/images/mLogo94293.png' 
import ImageRipley from '../../../assets/images/mLogo94303.png' 
import ImageMetro from '../../../assets/images/mLogo94281.png' 
import ImageSodimac from '../../../assets/images/Logo_header_desktop.png' 
import ImageCoolbox from '../../../assets/images/coolbox.webp' 

const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled('div')`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

interface ModalProps {
    modalIsOpen: boolean,
    setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Modal:FC<ModalProps> = ({modalIsOpen, setModalIsOpen}) => {
    
    const handleClose = () => setModalIsOpen(false)
    return (
        <StyledModal
            aria-labelledby="unstyled-modal-title"
            aria-describedby="unstyled-modal-description"
            open={modalIsOpen}
            onClose={handleClose}
            BackdropComponent={Backdrop}
            >
            <div className='modal-container'>
                <header className='modal-header'>
                <h2>ENCUENTRA UNA TIENDA</h2>
                <div onClick={handleClose} style={{width:"20px",cursor:"pointer"}}>
                    <IconClose/>
                </div>
                <div className='stores'>
                    <span>Canales Autorizados</span>
                </div>
                </header>
                <div className='modal-body'>
                <div className='where-to-buy'>
                    <a className='where-to-buy__item' href='https://www.samsung.com/pe/samsung-experience-store/locations/' target='_blank'>
                        <picture className='where-to-buy__logo'>
                            <img alt='' src='https://gethatch.com/resources/images/merchant/mLogo94619.png'/>
                        </picture>
                        <div className='where-to-buy__name'>
                            <span>Tiendas de Experiencia Samsung</span>
                            <div style={{width:"10px"}}>
                            <IconArrowRight/>
                            </div>
                        </div>
                    </a>

                    <a className='where-to-buy__item' href='https://tiendaclaro.pe/catalogo/personas/portabilidad/todos/celulares/serie_galaxy_s22/samsung' target='_blank'>
                    <picture className='where-to-buy__logo'>
                        <img alt='' src={ImageClaro}/>
                    </picture>
                    <div className='where-to-buy__name'>
                        <span>Claro</span>
                        <div style={{width:"10px"}}>
                        <IconArrowRight/>
                        </div>
                    </div>
                    </a>

                    <a className='where-to-buy__item' href='https://www.entel.pe/lanzamiento-samsung-galaxy-s22/' target='_blank'>
                    <picture className='where-to-buy__logo'>
                        <img alt='' src={ImageEntel}/>
                    </picture>
                    <div className='where-to-buy__name'>
                        <span>Entel</span>
                        <div style={{width:"10px"}}>
                        <IconArrowRight/>
                        </div>
                    </div>
                    </a>

                    <a className='where-to-buy__item' href='https://catalogo.movistar.com.pe/samsung-galaxy-s22-ultra?p=plan-ilimitado-mi-movistar-s5590-55.90-26-331-1' target='_blank'>
                    <picture className='where-to-buy__logo'>
                        <img alt='' src={ImageMovistar}/>
                    </picture>
                    <div className='where-to-buy__name'>
                        <span>Movistar</span>
                        <div style={{width:"10px"}}>
                        <IconArrowRight/>
                        </div>
                    </div>
                    </a>

                    <a className='where-to-buy__item' href='/'>
                    <picture className='where-to-buy__logo'>
                        <img alt='' src={ImageMercadoLibre}/>
                    </picture>
                    <div className='where-to-buy__name'>
                        <span>Mercado libre</span>
                        <div style={{width:"10px"}}>
                        <IconArrowRight/>
                        </div>
                    </div>
                    </a>

                    <a className='where-to-buy__item' href='/'>
                    <picture className='where-to-buy__logo'>
                        <img alt='' src={ImageLinio}/>
                    </picture>
                    <div className='where-to-buy__name'>
                        <span>Linio</span>
                        <div style={{width:"10px"}}>
                        <IconArrowRight/>
                        </div>
                    </div>
                    </a>

                    <a className='where-to-buy__item' href='/'>
                    <picture className='where-to-buy__logo'>
                        <img alt='' src={ImageDiners}/>
                    </picture>
                    <div className='where-to-buy__name'>
                        <span>Diners Mall</span>
                        <div style={{width:"10px"}}>
                        <IconArrowRight/>
                        </div>
                    </div>
                    </a>

                    <a className='where-to-buy__item' href='https://tiendaclaro.pe/catalogo/personas/portabilidad/todos/celulares/serie_galaxy_s22/samsung' target='_blank'>
                    <picture className='where-to-buy__logo'>
                        <img alt='' src={ImageClaroMkt}/>
                    </picture>
                    <div className='where-to-buy__name'>
                        <span>Claro Mktplace</span>
                        <div style={{width:"10px"}}>
                        <IconArrowRight/>
                        </div>
                    </div>
                    </a>


                    <a className='where-to-buy__item' href='/'>
                    <picture className='where-to-buy__logo'>
                        <img alt='' src={ImageEfe}/>
                    </picture>
                    <div className='where-to-buy__name'>
                        <span>Tiendas Efe</span>
                        <div style={{width:"10px"}}>
                        <IconArrowRight/>
                        </div>
                    </div>
                    </a>
                    <a className='where-to-buy__item' href='/'>
                    <picture className='where-to-buy__logo'>
                        <img alt='' src={ImageCuracao}/>
                    </picture>
                    <div className='where-to-buy__name'>
                        <span>Curacao</span>
                        <div style={{width:"10px"}}>
                        <IconArrowRight/>
                        </div>
                    </div>
                    </a>
                    <a className='where-to-buy__item' href='/'>
                    <picture className='where-to-buy__logo'>
                        <img alt='' src={ImageHiraoka}/>
                    </picture>
                    <div className='where-to-buy__name'>
                        <span>Hiraoka</span>
                        <div style={{width:"10px"}}>
                        <IconArrowRight/>
                        </div>
                    </div>
                    </a>
                    <a className='where-to-buy__item' href='https://www.estilos.com.pe/489-smartphones?q=Marca-SAMSUNG' target='_blank'>
                    <picture className='where-to-buy__logo'>
                        <img alt='' src={ImageEstilos}/>
                    </picture>
                    <div className='where-to-buy__name'>
                        <span>Estilos</span>
                        <div style={{width:"10px"}}>
                        <IconArrowRight/>
                        </div>
                    </div>
                    </a>
                    <a className='where-to-buy__item' href='/'>
                    <picture className='where-to-buy__logo'>
                        <img alt='' src={ImageMetro}/>
                    </picture>
                    <div className='where-to-buy__name'>
                        <span>Metro</span>
                        <div style={{width:"10px"}}>
                        <IconArrowRight/>
                        </div>
                    </div>
                    </a>
                    <a className='where-to-buy__item' href='/'>
                    <picture className='where-to-buy__logo'>
                        <img alt='' src={ImageOe}/>
                    </picture>
                    <div className='where-to-buy__name'>
                        <span>Oeschle</span>
                        <div style={{width:"10px"}}>
                        <IconArrowRight/>
                        </div>
                    </div>
                    </a>
                    <a className='where-to-buy__item' href='/'>
                    <picture className='where-to-buy__logo'>
                        <img alt='' src={ImagePlazavea}/>
                    </picture>
                    <div className='where-to-buy__name'>
                        <span>Plaza Vea</span>
                        <div style={{width:"10px"}}>
                        <IconArrowRight/>
                        </div>
                    </div>
                    </a>
                    <a className='where-to-buy__item' href='https://simple.ripley.com.pe/tecnologia/celulares/samsung-celulares' target='_blank'>
                    <picture className='where-to-buy__logo'>
                        <img alt='' src={ImageRipley}/>
                    </picture>
                    <div className='where-to-buy__name'>
                        <span>Ripley</span>
                        <div style={{width:"10px"}}>
                        <IconArrowRight/>
                        </div>
                    </div>
                    </a>
                    <a className='where-to-buy__item' href='/'>
                    <picture className='where-to-buy__logo'>
                        <img alt='' src={ImageFalabella}/>
                    </picture>
                    <div className='where-to-buy__name'>
                        <span>Saga Falabella</span>
                        <div style={{width:"10px"}}>
                        <IconArrowRight/>
                        </div>
                    </div>
                    </a>
                    <a className='where-to-buy__item' href='/'>
                    <picture className='where-to-buy__logo'>
                        <img alt='' src={ImageSodimac}/>
                    </picture>
                    <div className='where-to-buy__name'>
                        <span>Sodimac</span>
                        <div style={{width:"10px"}}>
                        <IconArrowRight/>
                        </div>
                    </div>
                    </a>
                    <a className='where-to-buy__item' href='https://www.coolbox.pe/celular-samsung-galaxy-s22-ultra-128gb-8gb-morado-sm-s908edrlltp/p' target='_blank'>
                    <picture className='where-to-buy__logo'>
                        <img alt='' src={ImageCoolbox}/>
                    </picture>
                    <div className='where-to-buy__name'>
                        <span>Coolbox </span>
                        <div style={{width:"10px"}}>
                        <IconArrowRight/>
                        </div>
                    </div>
                    </a>
                    <a className='where-to-buy__item' href='/'>
                    <picture className='where-to-buy__logo'>
                        <img alt='' src={ImageTottus}/>
                    </picture>
                    <div className='where-to-buy__name'>
                        <span>Tottus</span>
                        <div style={{width:"10px"}}>
                        <IconArrowRight/>
                        </div>
                    </div>
                    </a>
                </div>
                </div>
                <footer className='modal-footer'>
                <p>Precios varían de acuerdo a la tienda y/o minoristas.</p>
                </footer>
            </div>
        </StyledModal>
    )
}

export default Modal;