import axios from "axios";
import http from "http";
import https from "https";
import { AxiosInstance } from "axios";

function config(baseAPI: string, isToken: boolean) {
    const instance = axios.create({
        baseURL: baseAPI,
        httpAgent: new http.Agent({ keepAlive: true }),
        httpsAgent: new https.Agent({ keepAlive: true }),
    });
    const token = localStorage.getItem("token");
    instance.interceptors.request.use(
        function (config) {
            config.headers = {
                Accept: "*/*",
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            };
            if (!isToken) delete config.headers.Authorization;
            return config;
        },
        function (error) {
            return Promise.reject(error);
        }
    );

    instance.interceptors.response.use(
        function (response) {
            try {
                if (response.status !== 200) return Promise.reject(response);
                return response;
            } catch (error) {
                return Promise.reject(error);
            }
        },
        function (error) {
            return Promise.reject(error);
        }
    );
    return instance;
}
const baseDomain = process.env.REACT_APP_BASE_URL as string;
const baseURL = `${baseDomain}/`;
export default function AxiosAPI(isToken = true): AxiosInstance {
    return config(baseURL, isToken);
}
