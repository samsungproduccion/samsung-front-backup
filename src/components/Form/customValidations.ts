import { Validation, Validations } from "../../types/form"

export const required:Validation = ({value}) => {
    if(value && value!=="") return null
    return {
        message: "El campo es requerido"
    }
}

export const minLength:Validation = ({props,value}) =>{
    if(value.length>props[0]) return null
    return {
        message: "debe ser menor a 3 letras"
    }
}

const validations:Validations = {
    required,
    minLength
}

export default validations