const ImagesContainer = () => {
  return (
    <div className="images-container section">
      <div className="grid">
        <div className="img1">
          <img
            src="https://i.blogs.es/b6d70c/rick-y-morty/840_560.jpeg"
            alt=""
          />
        </div>
        <div className="img2">
          <img
            src="https://media.vandalsports.com/i/640x360/3-2022/20223292845_1.jpg"
            alt=""
          />
        </div>
        <div className="img3">
          <img
            src="https://media.vandalsports.com/i/640x360/5-2022/202251816546_1.jpg"
            alt=""
          />
        </div>
        <div className="img4">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB-XTLgmdOVNsRcrfrX7ennxkX59AatgPNAQ&usqp=CAU"
            alt=""
          />
        </div>
        <div className="img5">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzBZKAOl_wG2I3T7W2Kieua-xJXtpWp4vDpg&usqp=CAU"
            alt=""
          />
        </div>
      </div>
      <div className="infor">
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
      </div>
    </div>
  );
};
export default ImagesContainer;
