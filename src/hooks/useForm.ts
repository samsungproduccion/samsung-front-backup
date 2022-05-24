import { useMutation } from "@apollo/client"
import { ChangeEventHandler, FocusEventHandler, FormEventHandler, useState } from "react"
import validations from "../components/Form/customValidations"
import { ADDCAMPAINGRECORD } from "../graphql/addCampaingDataRecord"
import { Err, InputValidations } from "../types/form"
import { Schema } from "../types/form"

const initialError:{[key:string]:Err[]} = {}

export function useForm (schemaDocument:Schema[], campaingId:string) {
    const [addCampaingRecord, {data, loading, error:errorSendData}] = useMutation(ADDCAMPAINGRECORD)
    const [error, setError] = useState(initialError)

    const handleError = (value:string,field:Schema) => {
        let newError:Err[] = []
        field.validations.forEach(validation=>{
            const err = validations[validation.name]({
                props: validation.props,
                value
            })
            if(err) newError.push(err)
        })
        if(JSON.stringify(error[field.name]) !== JSON.stringify(newError)) setError({...error, [field.name]:newError})
    }

    const onChange:ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e) =>{
        const field = schemaDocument.find(schema=>schema.name === e.target.name)
        if(field){
            handleError(e.target.value, field)
        }
    }
    const onBlur:FocusEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e) => {
        const field = schemaDocument.find(schema=>schema.name === e.target.name)
        if(field){
            handleError(e.target.value, field)
        }
    }
    
    const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        const data = new FormData(e.currentTarget)

        data.forEach((value,key)=>{
            const field = schemaDocument.find(schema=>schema.name === key)
            if(field) handleError(value.toString(), field)
        })

        for(let fieldErr in error){
            if(error[fieldErr].length>0){
                return
            }
        }

        let fields:{key:string,value:string}[] = []
        data.forEach((value,key)=> fields.push({key,value:value.toString()}))

        addCampaingRecord({
            variables:{
                campaingId,
                fields: fields
            }
        })
    }

    return {
        onChange,
        onBlur,
        onSubmit
    }
}