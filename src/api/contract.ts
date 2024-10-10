import { post } from "../utils/http/request";

interface SearchData{
    contractNo:string;
    person:string;
    tel:string;
    page:number;
    pageSize:number
}
interface SearchData2{
    page:number;
    pageSize:number;
    no:string;
    status:string;
    startDate:string;
    endDate:string;
}

export function getContractList(data:SearchData){
    return post("/contractList",data)
}


export function getBillList(data:SearchData2){
    return post("/billList",data)
}