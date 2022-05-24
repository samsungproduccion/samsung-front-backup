import { televisores } from "../includes/products";
import { tvCarousel } from "../includes/carousel";
import { TvElements } from "../includes/headslide";
import ProductSection from "./ProductSection";

const TabTelevisores = () => {
  return (
    <>
      
      <ProductSection title="Televisores" productList={televisores} itemsCarousel={tvCarousel} sliderElements={TvElements} />

    </>
  );
};

export default TabTelevisores;
