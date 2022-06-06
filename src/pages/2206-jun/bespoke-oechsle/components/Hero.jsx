
import banner from "../../../../assets/images/bespoke/main-banner-desktop2.gif";
import banner_mobile from "../../../../assets/images/bespoke/main-banner-mobile.gif";
import { useDevice } from "../../../../hooks/useDevice";

const Hero = () => {

  const { isDesktop, isLaptop } = useDevice();

  return (
    <div className="hero section">
      
      <div className="main-banner">
        {(isDesktop || isLaptop) ?
          <img src={banner} alt="banner-bespoke" />
          : <img src={banner_mobile} alt="banner-bespoke" />
        }
        </div>
    </div>
  );
};
export default Hero;
