import * as XLSX from "xlsx";
import {saveAs} from "file-saver";
export function exportToExcel(data:any,header:string[]){
    const ws=XLSX.utils.json_to_sheet(
        data,{header}
    );
  //创建一个工作簿
  const wb=XLSX.utils.book_new()
  //把我们的工作表加到工作簿中      
  XLSX.utils.book_append_sheet(wb,ws,"sheet1");
   //转成二进制数据     
 const buf=XLSX.write(wb,{bookType:"xlsx",type:"buffer"});
 //保存和下载
 saveAs(new Blob([buf],{type:"application/octet-stream"}),"selected-data.xlsx") 
}