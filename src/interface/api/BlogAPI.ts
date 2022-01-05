import { AxiosResponse } from "axios";

export interface ResponseBlog {
    id: number;
    title: string;
    slug: string;
    content: string;
    time_create: string;
    time_update: string;
    pre?: {
        id: number;
        title: string;
        slug: string;
        time_create: string;
        time_update: string;
    };
    next?: {
        id: number;
        title: string;
        slug: string;
        time_create: string;
        time_update: string;
    };
}
export interface DataCreateBlog {
    title: string;
    content: string;
}
export default interface BlogRespositoryInterface {
    getListBlog: () => Promise<AxiosResponse<ResponseBlog[]>>;
    getBlog: (slug: string) => Promise<AxiosResponse<ResponseBlog>>;
    createBlog: (data: DataCreateBlog) => Promise<AxiosResponse<ResponseBlog>>;
}
