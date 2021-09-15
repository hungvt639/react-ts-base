import { AxiosResponse } from "axios";
import { UserInterface } from "../../interface";

export interface DataRegister {
  username: string;
  password: string;
  email: string;
  first_name: string;
  last_name: string;
}

export interface ResponseRegister {
  message: string[];
}

export interface DataLogin {
  username: string;
  password: string;
}

export interface ResponseLogin {
  token: string;
  user: UserInterface;
}

export interface DataChangePassword {
  old_password: string;
  password: string;
}

export interface ResponseChangePassword {
  message: string[];
}
export default interface UserRepositoryInterface {
  register: (data: DataRegister) => Promise<AxiosResponse<ResponseRegister>>;
  login: (data: DataLogin) => Promise<AxiosResponse<ResponseLogin>>;
  getProfile: () => Promise<AxiosResponse<UserInterface>>;
  changePassword: (
    data: DataChangePassword
  ) => Promise<AxiosResponse<ResponseChangePassword>>;
}
