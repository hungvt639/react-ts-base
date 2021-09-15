import getInstanceAxios from "./request";
import { AxiosInstance } from "axios";
const baseDomain = process.env.REACT_APP_BASE_URL as string;
const baseURL = `${baseDomain}/`;

export default function ClientAPI(isToken = true): AxiosInstance {
  return getInstanceAxios(baseURL, isToken);
}
