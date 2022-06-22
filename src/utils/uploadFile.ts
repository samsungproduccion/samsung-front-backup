import axios from 'axios';
// const url = 'https://api.samsung.com.pe/global/evoucherBespoke/file-upload';
// const url = 'http://localhost:4050/api';
const url = 'https://back.samsung.com.pe/api';

export const UploadFile = async (files: FileList, folderName:string) => {

    let imagenUrl = '';
    let uploadError = false;

    // const {files} = e.target;
    if (files) {
            // console.log(files ? files[0] : '');
        const formData = new FormData();
    
        formData.append("uploadFile", files[0]);
        formData.append("folder", folderName);

        try {
            const {data} = await  axios.post(url,formData);

            console.log(data);
            if (data.status === 'ok') {
                
                imagenUrl = data.url;
                console.log(imagenUrl);
            }else{
                uploadError = true;
            }
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