import { Collapse } from '@mui/material'
import { FC, useState } from 'react'

interface CollapsibleProps {
    defaultState?: boolean
    header: JSX.Element
}

const Collapsible:FC<CollapsibleProps> = ({defaultState, children, header}) => {

    const [open, setOpen] = useState(defaultState || false)

    const handleCollapsible = () => setOpen(!open)

    return (
        <div className={`collapsible ${open?'collapsible-open':'collapsible-close'}`}>
            <div className='collapsible-header' onClick={handleCollapsible} style={{cursor:"pointer"}}>
                {header}
            </div>
            <Collapse in={open}>
                {children}
            </Collapse>
        </div>
    )
}

export default Collapsible