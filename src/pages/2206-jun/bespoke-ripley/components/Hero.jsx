
import banner from "../../../../assets/images/bespoke/ripley/main_banner_desktop.gif";
import banner_mobile from "../../../../assets/images/bespoke/ripley/main_banner_mobile.gif";
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
