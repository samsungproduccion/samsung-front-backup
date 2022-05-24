import { ChangeEventHandler, FocusEventHandler, useState } from "react"
import validations from "../components/Form/customValidations"
import { Err, InputValidations } from "../types/form"

const initialError:Err[] = []

export function useInputForm (validationsInput:InputValidations[]) {

    const [error, setError] = useState(initialError)

    const handleError = (value:string) => {
        let newError:Err[] = []
        validationsInput.forEach(validation=>{
            const err = validations[validation.name]({
                props: validation.props,
                value
            })
            if(err) newError.push(err)
        })
        if(JSON.stringify(error) !== JSON.stringify(newError)) setError(newError)
    }

    const onChange:ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e) =>{
        handleError(e.target.value)
    }
    const onBlur:FocusEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e) => {
        handleError(e.target.value)
    }

    return { 
        error,
        onChange,
        onBlur
    }
}