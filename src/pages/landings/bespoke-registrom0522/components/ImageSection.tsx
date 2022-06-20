import { imageList } from '../includes/imageList';
import { Image } from "./Image";
interface Props{
  selectedImages: string[];
  setSelectedImages: (id: string) => void;
}

export const ImageSection = ({selectedImages, setSelectedImages}:Props) => {

  return(
    <>
      <div className="image-section">
        <h3>Elige tu diseño si compraste 1 bespoke</h3>
        <div className="images-container">
          {imageList.map(image =>{
            if (image.additionalInfo==='1') {
              return(
                <Image image={image} setSelectedImages={setSelectedImages} selectedImages={selectedImages} />
              )
            }
          })}
        </div>
      </div>
      <div className="image-section ">
        <h3>Elige tu diseño si compraste 2 bespokes</h3>
        <div className="images-container second">
          {imageList.map(image =>{
            if (image.additionalInfo==='2') {
              return(
                <Image image={image} setSelectedImages={setSelectedImages} selectedImages={selectedImages} />
              )
            }
          })}
        </div>
      </div>
      <div className="image-section ">
        <h3>Elige tu diseño si compraste 3 bespokes</h3>
        <div className="images-container third">
          {imageList.map(image =>{
            if (image.additionalInfo==='3') {
              return(
                <Image image={image} setSelectedImages={setSelectedImages} selectedImages={selectedImages} />
              )
            }
          })}
        </div>
      </div>
    </>
  );
}

