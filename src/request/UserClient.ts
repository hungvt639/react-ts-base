import getInstanceAxios from "./request";
const baseDomain = process.env.REACT_APP_BASE_URL as string;
const baseURL = `${baseDomain}/`;

export default function instanceAxios(isToken = true) {
    return getInstanceAxios(baseURL, isToken);
}
