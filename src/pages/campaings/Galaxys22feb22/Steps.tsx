import React from 'react'
import './styles.scss'
import IconStep1 from '../../../assets/images/step1.webp'
import IconStep2 from '../../../assets/images/step2.webp'
import IconStep3 from '../../../assets/images/step3.webp'

const Steps = () => {
  return (
    <div className='steps'>
        <div className='step'>
            <div>
                <img src={IconStep1} alt='samsung step-1' className='icon icon-step'/>
                1.
            </div>
            <p>
                Cuando recibas tu nuevo Galaxy S22 o Galaxy TAB S8 ingresa a Samsung Members con tu Samsung Account.
                <br/>
                <br/>
                Luego, dirígete a la sección beneficios para activar tu cupón virtual, donde visualizarás tu codigo de E-voucher y el link para redimir los productos seleccionados.
            </p>
        </div>
        <div className='step'>
            <div>
                <img src={IconStep2} alt='samsung step-2' className='icon icon-step'/>
                2.
            </div>
            <p>
                La URL de canje será una sección de shop.samsung.com.pe con los productos seleccionados para canje.
                <br/>
                <br/>
                Escoge el ítem promocional, durante el proceso de compra deberás ingresar tu código E-voucer.
                <br/>
                <br/>
                Se programará el envío del producto(s) seleccionado(s).
                <br/>
                <br/>
                Para consultas relacionadas a la promoción se trandrá habilitado la opción 0 en el Call Center 0-800-001-32
            </p>
        </div>
        <div className='step'>
            <div>
                <img src={IconStep3} alt='samsung step-3' className='icon icon-step'/>
                3.
            </div>
            <p>
                Puedes obtener tu cupón virtual hasta el <b>15 de Marzo.</b>
                <br/>
                <br/>
                Puedes redimir tu cupón virtual hasta el <b>31 de Marzo.</b>
            </p>
        </div>
        <p className='terms'>*Valido para compras <b>del 23 de febrero al 10 de Marzo del 2022</b></p>
        <p className='terms__message'>
            La entrega de productos estarán sujetos a las políticas de la tienda Online de Samsung Perú, disponibilidad de stock y zona de reparto.
        </p>
    </div>
  )
}

export default Steps