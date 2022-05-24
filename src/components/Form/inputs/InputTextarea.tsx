import React, { FC } from 'react'
import { useInputForm } from '../../../hooks/useInputForm'
import { Input } from '../../../types/form'

const InputTextarea:FC<Input> = ({name,label,placeholder,description,onBlur,onChange,error}) => {

  return (
    <div className={`ch-ff__field ch-ff__note ${error.length>0 && "error"}`}>
        <label htmlFor={name}>{label}</label> 
        <textarea className='textarea' rows={5} name={name} id={name} placeholder={placeholder} onBlur={onBlur} onChange={onChange}/>
        <p dangerouslySetInnerHTML={{
          __html:description
        }}></p>
    </div>
  )
}

export default InputTextarea