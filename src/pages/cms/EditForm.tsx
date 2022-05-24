import { useQuery } from '@apollo/client'
import { Box, Divider, Skeleton, Stack, TextField, Typography } from '@mui/material'
import { useParams } from 'react-router-dom'
import MultipleSelectChip from '../../components/formularios/SelectValidations'
import { CAMPAINGSCHEMA } from '../../graphql/getSchema'
import { Schema } from '../../types/form'

const EditForm = () => {

    const { campaingId } = useParams()

    const {data, loading} = useQuery(CAMPAINGSCHEMA,{
        variables:{
            id: campaingId || ''
        }
    })

    if(loading) return (
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            py: 8
          }}
        >
          <Skeleton variant="rectangular" width="100%" height="600px" />
        </Box>
    )

    return (
        <div>
            {data?.campaing?.schemaDocument && (
                <>
                    <Typography
                        sx={{ m: 1, mb: 3 }}
                        variant="h4"
                        >
                        Esquema
                    </Typography>
                    <Stack spacing={2}>
                        {data.campaing.schemaDocument.map(({name, description, label, placeholder, type, validations}:Schema, index: number)=>(
                            <>
                                <Box
                                    component="form"
                                    sx={{
                                    '& > :not(style)': { m: 1, width: '25ch', mb: 2 },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    {name && <TextField id="filled-basic" label="Nombre" variant="outlined" defaultValue={name}/>}
                                    {label && <TextField id="filled-basic" label="Label" variant="outlined" defaultValue={label}/>}
                                    {placeholder && <TextField id="filled-basic" label="Placeholder" variant="outlined" defaultValue={placeholder}/>}
                                    {type && <TextField id="filled-basic" label="Tipo" variant="outlined" defaultValue={type}/>}
                                    {description && <TextField id="filled-basic" label="Descripción" variant="outlined" defaultValue={description}/>}
                                    {validations && <MultipleSelectChip/>}
                                </Box>
                                {index !== data.campaing.schemaDocument.length -1 && <Divider style={{display:"block"}}/>}
                            </>
                        ))}
                    </Stack>
                </>
            )} 
        </div>
    )
}

export default EditForm