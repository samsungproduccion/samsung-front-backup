import React, { FC, useEffect, createContext, Context } from 'react'
import { CampaingContext as CampaingContextInterface, CampaingTemplateProps } from '../../types/campaings'
import TagManager from 'react-gtm-module'
import { useQuery } from '@apollo/client'
import { CAMPAINGDATA } from '../../graphql/getCampaingData'
import { Box, Skeleton } from '@mui/material'

const initialContext:CampaingContextInterface = {
    id:"",
    name:"",
    slug:"",
    schemaDocument:[],
    properties:{}
}

export const CampaingContext:Context<CampaingContextInterface> = createContext(initialContext)

const CampaingTemplate:FC<CampaingTemplateProps> = ({ id, title, gtmId, children }) => {
    const { data, loading, error } = useQuery(CAMPAINGDATA,{
        variables:{
            campaingId: id
        }
    })
    useEffect(()=>{
        document.title = title
    })
    useEffect(()=>{
        if(gtmId) TagManager.initialize({gtmId:gtmId})
    },[gtmId])

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
    if(error) return <div>Error: {JSON.stringify(error)}</div>

    let properties:{[key:string]:string} = {}
    if(data && data.campaing?.properties) {
        data.campaing.properties.forEach(({key, value}:{key:string,value:string})=>properties[key] = value)
    }

    return (
        <CampaingContext.Provider value={{...data.campaing, properties}}>
            <div id={id} className="campaing">
                {children}
            </div>
        </CampaingContext.Provider>
    )
}

export default CampaingTemplate