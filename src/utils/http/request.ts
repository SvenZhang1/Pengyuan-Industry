import http from "./http"
interface ApiResponse{
    code:number;
    message:string,
    data:any
}
export function get(url:string,params?:any):Promise<ApiResponse> {
    return http.get(url,{params})
}

export function post(url:string,data?:any):Promise<ApiResponse>{
    return http.post(url,data)
}