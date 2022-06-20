import { useState } from "react";
import { imagePicker } from "../../../../types/images";

interface Props{
  image: imagePicker,

  selectedImages: string[];
  setSelectedImages: (id: string) => void;

}

export const Image = ({image, selectedImages, setSelectedImages}:Props) => {

  const [selected, setSelected] = useState(false);
  const pickImage = (id: string) => {
    if(selectedImages.length >= 5 && selected===false) return;
    setSelected(!selected);
    setSelectedImages(id);
  }

  return(
    <div className={selected ? "image-container selected" : "image-container"}>
      <img src={image.image} alt={image.ref} onClick={() => pickImage(image.id)} />
    </div>
  );
}
