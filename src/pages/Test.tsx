import { useRef } from "react";
import { UploadFile } from "../utils/uploadFile";

export const Test = () => {
  const imageRef = useRef<any>(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
          const { imagenUrl, uploadError } = await UploadFile(
             imageRef.current.files,
            'evoucherBespoke'
          );
          console.log({imagenUrl,uploadError})
  }
  return(
    <div>
      <form action="" onSubmit={(e) => handleSubmit(e)}>
      <div className="ch-ff__field fileUploader">
                  <label htmlFor="product">Adjunta tu Boleta (*)</label>
                  <input
                    ref={imageRef}
                    type="file"
                    accept=".jpg, .jpeg, .png, .pdf, .tif, .bmp"
                    // onChange={(e)=> handleImage(e)}
                    required
                  />
                </div>

                <input type="submit" value='enviar '/>
      </form>
     
    </div>
  );
}