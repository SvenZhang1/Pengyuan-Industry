import { get } from "../utils/http/request";

export function getEnergyData(){
    return get("/energyData")
}