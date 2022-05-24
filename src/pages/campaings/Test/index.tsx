import React, { useContext } from 'react'
import { CampaingContext } from '../../../components/campaingtemplate/CampaingTemplate'
import Footer from '../../../components/footer'
import Form from '../../../components/Form/Form'
import Header from '../../../components/header'

const Test = () => {
    
    const {
        id,
        properties:{
            titulo,
            subtitulo,
            image
        },
        schemaDocument
    } = useContext(CampaingContext)

    return (
        <>
            <Header/>
            <h1>{titulo}</h1>
            <p>{subtitulo}</p>
            <img src={image} alt="Momento" />
            <Form schema={schemaDocument} campaingId={id}/>
            <Footer/>
        </>
    )
}

export default Test