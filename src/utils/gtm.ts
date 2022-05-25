import TagManager from "react-gtm-module"



export const InitGtm = (gtm: string) =>{
    const tagManagerArgs = {
        gtmId: gtm
    }
    return TagManager.initialize(tagManagerArgs);
    
}