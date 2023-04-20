import { url } from "../util/assets"
import { axiosUtil } from "../util/helper"


export const loginUser: any = async(data:Object, err:any) => {
        return await axiosUtil("Post",url.dev_base+url.login,data,null);  
}

export const refreshUser: any =  async(data:Object) => {
        return await axiosUtil("Post", url.dev_base+url.refresh,data,null);
    
}

export const registerUser: any = async(data:Object) => {
        return await axiosUtil("Post", url.dev_base+url.register,data,null);
}

export const verifyUser : any =  async(data:Object, token:String) => {
        return await axiosUtil("AuthPOST",url.dev_base+url.user_verify,data,"Bearer "+token);
}

export const resetUserLink : any =  async(data:Object) => {
        return await axiosUtil("Post",url.dev_base+url.reset_link,data,null);
}



