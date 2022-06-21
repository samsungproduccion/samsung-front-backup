import axios from 'axios';
const url = 'https://api.samsung.com.pe/global/evoucherBespoke/file-upload';

export const UploadFile = async (files: FileList) => {

    let imagenUrl = '';
    let uploadError = false;

    // const {files} = e.target;
    if (files) {
        // console.log(files ? files[0] : '');
        const formData = new FormData();
    
        formData.append("uploadFile", files[0]);

        try {
            // const data = await  axios.post('http://localhost:4050/files', formData,{
            //     headers: {
            //         'Content-Type': 'multipart/form-data'
            //     }
            // });
            const data = await  fetch('http://localhost:4050/files', {
                method: 'POST',
                body: formData,
                
            });
            console.log(data);
            // if (data.response) {
                
            //     imagenUrl = data.response[0].url;
            //     console.log(imagenUrl);
            // }else{
            //     uploadError = true;
            // }
            return {
                imagenUrl,
                uploadError
            }
        } catch (uploadError) {
            console.log(uploadError)
            uploadError = true;
            return {
                imagenUrl,
                uploadError
            }
        }
        
    }

    return {
        imagenUrl,
        uploadError
    }
};