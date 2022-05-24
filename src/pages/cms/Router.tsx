import { FC } from "react";
import { 
    Route, Routes
} from "react-router-dom";
import RoutePrivate from "../../components/RouteAdmin/RoutePrivate";
import Campaing from "./Campaing";
import EditForm from "./EditForm";
import Formularios from "./Formularios";
import Home from "./Home";
import Usuarios from "./Usuarios";

const Router:FC = () => {
    
    return (
        <Routes>
            <Route path="/" element={<RoutePrivate><Home/></RoutePrivate>}/>
            <Route path="/usuarios" element={<RoutePrivate><Usuarios/></RoutePrivate>}/>
            <Route path="/forms" element={<RoutePrivate><Formularios/></RoutePrivate>}/>
            <Route path="/forms/:campaingId" element={<RoutePrivate><EditForm/></RoutePrivate>}/>
            <Route path="/campaing/:campaingId" element={<RoutePrivate><Campaing/></RoutePrivate>}/>
        </Routes>
    )
}

export default Router