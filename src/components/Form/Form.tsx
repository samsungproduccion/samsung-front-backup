import React, { FC } from 'react'
import { useForm } from '../../hooks/useForm'
import { FormSchema } from '../../types/form'
import InputText from './inputs/InputText'
import InputTextarea from './inputs/InputTextarea'

const Form:FC<FormSchema> = ({schema, campaingId}) => {

    const { onBlur, onChange, onSubmit } = useForm(schema,campaingId)
    console.log(schema)
    return (
        <div className='mb80'>
            <form className='ch-ff' onSubmit={onSubmit}>
                <div className='ch-flex'>
                    {schema.map(field=>(
                        <>
                            {field.type ==="text" && <InputText {...field} onChange={onChange} onBlur={onBlur} error={[]}/>}            
                            {field.type ==="textarea" && <InputTextarea {...field} onChange={onChange} onBlur={onBlur} error={[]}/>}            
                        </>
                    ))}
                </div>
                <button className={`ch-btn`} id="btnSend">Enviar</button>
            </form>
        </div>
    )
}

export default Form