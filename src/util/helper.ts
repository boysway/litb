import axios from "axios";
import { Navigate } from "react-router-dom";
import { refreshUser } from "../services/auth";
import { getUser } from "../services/user";

export const axiosUtil = (
  method: any,
  url: string,
  data: Object | any,
  header: any
) => {
  switch (method) {
    case "Get":
      return axios({
        method: "get",
        url: url,
      }).then((res) => {
        return res;
      });

    case "Post":
      return axios({
        method: "post",
        url: url,
        data: data,
      }).then((res) => {
        return res;
      });

    case "AuthGET":
      return axios
        .get(url, {
          headers: { Authorization: header },
        })
        .then((res) => {
          return res;
        })
        .catch((err) => {
          return err;
        });

    case "AuthPOST":
      return axios
        .post(url, data, {
          headers: { Authorization: header },
        })
        .then((res) => {
          return res;
        })
        .catch((err) => {
          return err;
        });

    default:
      return {
        userName: "",
        email: "",
        isVerified: false,
        processComplete: false,
        resetPasswordToken: "",
        role: "",
      };
  }
};

export const authUser = async (refresh: string) => {
   
  const tk = await refreshUser({ refreshTokenString: refresh });
  
  const user: any = await getUser(tk.data.newToken);

  if (user.data.user.phoneNumber === null) {
    return {
      data: {
        message: {
          title: "ok",
          description: "toProcess",
        },
      },
    };
  }

  if (!user.data.user.isVerified) {
    return {
      data: {
        message: {
          title: "ok",
          description: "toVerify",
        },
      },
    };
  }

  return user;
};

export const seperateString =  (name:String) => {
  return name.split(" ")
}
