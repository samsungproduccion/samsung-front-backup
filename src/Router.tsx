import { FC } from "react";
import { 
    BrowserRouter,
    Routes,
    Route,
    // HashRouter
} from "react-router-dom";
import BespokeFalabella from "./pages/landings/bespoke-falabella";
import BeSpokeRegistro from "./pages/landings/bespoke-registrom0522";
import BeSpokeapr22 from "./pages/landings/BeSpokeapr22";
import NigthBeyond from "./pages/landings/night-beyond05abr22";
import PremiumService from "./pages/landings/premium-service20abr22";
import ThankBespoke from "./pages/landings/thankyou/ThankBespoke";


const Router:FC = () => {
    return ( 
        <BrowserRouter>
            {/* <Routes>
                <Route path="/bespoke-falabella" element={<BespokeFalabella />} />
            </Routes> */}

            <Routes>
                <Route path="/" element={<PremiumService />} />
                <Route path="/premium-service" element={<PremiumService />} />
                <Route path="/thanks-bespoke" element={<ThankBespoke />} />
                <Route path="/bespoke-registro" element={<BeSpokeRegistro />} />
                <Route path="/bespoke" element={<BeSpokeapr22 />} />

            </Routes>

        </BrowserRouter>
    )
}

export default Router;