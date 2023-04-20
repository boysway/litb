import { url } from "../util/assets"
import { axiosUtil } from "../util/helper"

export const getUser = async (token:string) =>{
         const user:any = await axiosUtil("AuthGET",url.dev_base+url.user,null,"Bearer "+token)
         return user
 
}

export const updateUser = async (token:String, data:Object) =>{
        const user: any = await axiosUtil("AuthPOST", url.dev_base+url.user_update,data,"Bearer "+token)
        return user
}