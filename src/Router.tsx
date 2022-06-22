import { FC } from "react";
import { 
    BrowserRouter,
    Routes,
    Route,
    // HashRouter
} from "react-router-dom";
import BeSpokeapr22 from "./pages/landings/BeSpokeapr22";
import BeSpokeRegistro from "./pages/landings/bespoke-registrom0522";
import PremiumService from "./pages/landings/premium-service20abr22";
import ThankBespoke from "./pages/landings/thankyou/ThankBespoke";
import ThanksBespokeRegistro from "./pages/landings/thankyou/ThankBespokeRegistro";
import ComplaintsBook from "./pages/2206-jun/complaintsbook";
import BespokeOechsle from "./pages/2206-jun/bespoke-oechsle";
import BespokeFalabella from "./pages/landings/bespoke-falabella";
import BespokeRipley from "./pages/2206-jun/bespoke-ripley";
import { Test } from "./pages/Test";



const Router:FC = () => {
    return ( 
        <BrowserRouter>
            {/* <Routes>
                <Route path="/bespoke-ripley" element={<BespokeRipley />} />
            </Routes> */}

            <Routes>
                <Route path="/bespoke" element={<BeSpokeapr22 />} />
                <Route path="/thank-you-bespoke" element={<ThankBespoke />} />
                <Route path="/premium-service" element={<PremiumService />} />
                <Route path="/thank-you-bespoke-registro" element={<ThanksBespokeRegistro />} />
                <Route path="/bespoke-registro" element={<BeSpokeRegistro />} />
                <Route path="/bespoke" element={<BeSpokeapr22 />} />
                <Route path="/bespoke-falabella" element={<BespokeFalabella />} />
                <Route path="/bespoke-oechsle" element={<BespokeOechsle />} />
                <Route path="/bespoke-ripley" element={<BespokeRipley />} />
                <Route path="/libro-de-reclamaciones" element={<ComplaintsBook />} />
                <Route path="/test" element={<Test />} />
                <Route path="*" element={<PremiumService />} />
            </Routes>

        </BrowserRouter>
    )
}

export default Router;