import { FC, useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../../context/auth'

const RoutePrivate:FC = ({children}) => {

    const { session, isLoading } = useContext(AuthContext)

    const {
        pathname
    } = useLocation()

    return (!session && !isLoading)
        ?(
            <Navigate to={`/cms/signin?redirectUrl:${pathname}`}/>
        )
        :(
            <>
                {children}
            </>
        )
}

export default RoutePrivate