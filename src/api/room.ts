import { post } from "../utils/http/request";
export function getRoomList(roomid:string){
    return post("/roomList",{roomid})
}