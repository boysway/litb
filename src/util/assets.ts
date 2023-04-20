import Logo from "../assets/img/logo.png";
import register from "../assets/img/pexels-alesia-kozik-6770521.jpg";
import login from "../assets/img/pexels-alesia-kozik-6771900.jpg";
import {BsArrowRight} from "react-icons/bs"
import {FcGoogle} from "react-icons/fc"


export const getRegex = {
       phone:/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
       password:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
}
export const getAssets = {
        Logo:Logo,
        register:register,
        login:login

}

export const getColors = {
       primary:"#eaa016",
       dark_primary:"#c98a15",
       secondary:"#487d72",
       dark_secondary:"#2a564d",
       tetiary:"#9e9e9e",
       white:"#ffff"
}

export const getIcons = {
       ArrRight:BsArrowRight,
       ColorGoogle:FcGoogle
}

export const url = {
       dev_base:"http://localhost:8080/",
       login:"authenticate",
       register:"register_user",
       refresh:"refresh",
       user:"auth/user",
       user_update:"auth/update",
       user_verify:"token/verify",
       reset_link:"forgot_password"
}