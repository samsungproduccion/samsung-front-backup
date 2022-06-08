import axios from 'axios';
// const url = 'https://api.samsung.com.pe/global/evoucherBespoke/file-upload';
const url = 'http://api.samsung.com.pe/global/mediaFolder/file-upload';

export const UploadFile = async (files: FileList, imageFolder='evoucherBespoke') => {

    let imagenUrl = '';
    let uploadError = false;

    // const {files} = e.target;
    if (files) {
        console.log(files ? files[0] : '');
        const formData = new FormData();
    
        formData.append("uploadFile", files[0]);
        formData.append("getFolder", imageFolder);

        try {
            const {data} = await  axios.post(url, formData);
            if (data.response) {
                imagenUrl = data.response[0].url;
                console.log(imagenUrl);
            }else{
                uploadError = true;
            }
        } catch (uploadError) {
            console.log(uploadError)
            uploadError = true;
        }
        
    }

    return {
        imagenUrl,
        uploadError
    }
};