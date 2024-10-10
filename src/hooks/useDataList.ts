import { useState,useCallback, useEffect } from "react";
type MyFormData={
    [key:string]:any
}

interface DataFetcher<T>{
    (args:T&{page:number;pageSize:number}):Promise<any>
}

function useDataList<T extends MyFormData,U>(initialFormData:T,fetchData:DataFetcher<T>){
    const [dataList, setDataList] = useState<U[]>([])
    const [page, setPage] = useState<number>(1);
    const [pageSize, setPageSize] = useState<number>(10);
    const [total, setTotal] = useState<number>(0)
    const [loading, setLoading] = useState<boolean>(false);
    const [formData, setFormData] = useState<T>(initialFormData);
    const loadData=useCallback(async ()=>{
        setLoading(true);
        try{
            const {data:{list,total}}= await fetchData({page,pageSize,...formData});
            setDataList(list);
            setTotal(total)
        }catch(error){

            console.log(error)
        }finally{

            setLoading(false)
        }   
    },[formData,page,pageSize,fetchData])
    useEffect(()=>{
        loadData()
    },[loadData]);

    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        const {name,value}=e.target;
        setFormData(prevState=>({
            ...prevState,
            [name]:value
        }))
    }
    const onChange=(page:number,pageSize:number)=>{
        setPage(page);
        setPageSize(pageSize)
    }
    const reset=()=>{
        setPage(1)
        setPageSize(10)
        setFormData(initialFormData)
    }
    return {dataList,page,pageSize,total,loading,formData,setDataList,setPage,setPageSize,setTotal,setLoading,setFormData,loadData,onChange,handleChange,reset}
}


export default useDataList