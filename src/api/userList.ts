import { post } from "../utils/http/request";
import type { DataType } from "../page/users/interface";
interface searchType{
    page:number;
    pageSize:number;
    companyName?:string;
    contact?:string;
    tel?:string;
}

export function getUserList(data:searchType){
    return post("/userList",data)
}
//删除客户
export function deleteUser(id:string){
    return post("/deleteUser",{id})
}
//批量删除客户
export function batchDeleteUser(ids:React.Key[]){
    return post("/batchDeleteUser",{ids})
}
//编辑/新增 企业接口
export function editUser(data:DataType){
    return post("/editUser",data)

}