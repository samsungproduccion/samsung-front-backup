import React, { FC } from 'react'
import { useInputForm } from '../../../hooks/useInputForm'
import { Input } from '../../../types/form'

const InputText:FC<Input> = ({name,label,placeholder,description, error, onBlur, onChange}) => {
  
  return (
    <div className={`ch-ff__field ch-ff__note ${error.length>0 && "error"}`}>
        {label && <label htmlFor={name}>{label}</label> }
        <input placeholder={placeholder} id={name} name={name} type="text" onBlur={onBlur} onChange={onChange}/>
        {description && <p dangerouslySetInnerHTML={{__html:description}}></p>}
    </div>
  )
}

export default InputText