import React from 'react'
import Footer from '../../components/footer';
import Header from '../../components/header';

const NotFound = () => {

    //if(window) window.location.href = 'https://www.samsung.com/pe/'

    return (
        <>
            <Header/>
                <div> 404 - Ruta no encontrada</div>
            <Footer/>
        </>
    )
}

export default NotFound