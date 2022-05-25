import { FC } from "react";
import { 
    BrowserRouter,
    Routes,
    Route,
    HashRouter
} from "react-router-dom";
import BeSpokeRegistro from "./pages/landings/bespoke-registrom0522";
// import NigthBeyond from "./pages/landings/night-beyond05abr22";
import PremiumService from "./pages/landings/premium-service20abr22";
import ThankBespoke from "./pages/landings/thankyou/ThankBespoke";


const Router:FC = () => {
    return ( 
        <BrowserRouter>
            <Routes>
                {/* <Route path="*" element={<ThankBespoke />} /> */}
                {/* <Route path="*" element={<PremiumService />} /> */}
                <Route path="*" element={<BeSpokeRegistro />}  />
            </Routes>
        </BrowserRouter>
    )
}

export default Router