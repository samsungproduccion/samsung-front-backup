import carousel_1 from "../../../../assets/images/bespoke-falabella/carousel-1.jpg";
import grid_1 from "../../../../assets/images/bespoke-falabella/grid-1.jpg";
import grid_2 from "../../../../assets/images/bespoke-falabella/grid-2.jpg";
import grid_3 from "../../../../assets/images/bespoke-falabella/grid-3.jpg";
import grid_4 from "../../../../assets/images/bespoke-falabella/grid-4.jpg";
import grid_5 from "../../../../assets/images/bespoke-falabella/grid-6.jpg";
const ImagesContainer = () => {
  return (
    <div className="images-container section">
      <div className="title">
        <p className="primary">Diseñada por ti, para ti</p>
      </div>

      <div className="content">
        <div className="content-imgGrande">
          <img className="imgGrande" src={carousel_1} alt="" />
        </div>
        <div className="grid">
          <div>
            <img src={grid_1} alt="Grid 1" />
          </div>
          <div>
            <img src={grid_2} alt="Grid 2" />
          </div>
          <div>
            <img src={grid_3} alt="Grid 3" />
          </div>
          <div>
            <img src={grid_4} alt="Grid 4" />
          </div>
          <div>
            <img src={grid_5} alt="Grid 5" />
          </div>
        </div>
      </div>
      {/* <div className="infor">
        <div className="show-image">
          <img
            src="https://blog.canaltnt.es/wp-content/uploads/2021/05/06_21_TNT_RICK_MORTY_T5_NOTA_blog.jpg"
            alt="info"
          />
        </div>
        <div className="desc">
          <h4 className="title">Flexibilidad</h4>
          <p className="description">Se adapta al tamaño de tu familia.</p>
        </div>
      </div> */}
    </div>
  );
};
export default ImagesContainer;
