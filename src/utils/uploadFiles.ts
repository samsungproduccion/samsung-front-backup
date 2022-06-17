import axios from 'axios';
const url = 'https://api.samsung.com.pe/global/mediaFolder/file-upload';
// const url = 'http://localhost:4000/global/mediaFolder/file-upload';

export const UploadFiles = async (files: FileList, imageFolder:string) => {

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
            //   console.log(data.response);
                imagenUrl = data.response[0].url;
                // console.log(imagenUrl);
            }else{
                uploadError = true;
            }
            return {
                imagenUrl,
                uploadError
            }
        } catch (uploadError) {
            // console.log(uploadError)
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