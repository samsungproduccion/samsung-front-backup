const ImagesContainer = () => {
  return (
    <div className="images-container section">
      <div className="title">
        <p className="primary">Diseñada por ti, para ti</p>
      </div>

      <div className="content">
        <div className="content-imgGrande">
          <img
            className="imgGrande"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0wVYysD2-Eb73N-hq-vrvXUBegsGRKjTo7w&usqp=CAU"
            alt=""
          />
        </div>
        <div className="grid">
          <div>
            <img
              src="https://www.redbionova.com/wp-content/uploads/2018/11/rickmorty.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://gcdn.lanetaneta.com/wp-content/uploads/2021/09/Mejores-programas-como-Rick-Morty-en-Netflix.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://img.europapress.es/fotoweb/fotonoticia_20210620111333_1200.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdxm_OwzvaAQrRJsCXt1UNy26EN7mnI8URFnVXhBBoHIOdOOwxBNmAPQeETihNLVfJtY4&usqp=CAU"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://static2.abc.es/media/play/2017/09/28/rick-morty-kaJC--620x349@abc.jpg"
              alt=""
            />
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
