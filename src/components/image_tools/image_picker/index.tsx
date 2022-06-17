import './image_picker.scss';
import {useState} from 'react';
import { imagePicker } from '../../../types/images';

export const ImagePicker = (imageList:  imagePicker[]) => {
  const [imageSelected, setImage] = useState('');

  

  return{
    image: imageSelected,
    templatePickerTemplate: (
      <div className="image--picker--container">
        {imageList.map(image => (
          <div key={image.id} className='pick-image'>
            <img 
              src={image.image} 
              alt={image.ref} 
              onClick={() => setImage(image.name)}
              className={image.name=== imageSelected ? 'list-image selected' : 'list-image' }
            />
          </div>
        ))}
      </div>

    ),
  }
    
  ;
}