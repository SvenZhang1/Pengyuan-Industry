import React from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface Iprops{
    allowed:boolean;
    redirectTo:string;
    children:any
}

function RequireAuth({allowed,redirectTo,children}:Iprops){
    const {token}= useSelector((state:any)=>state.authSlice)
    const isLogin=token?true:false;
    const navigate=useNavigate()
    useEffect(()=>{
        //allowed表示当前路由是否需要登录   isLogin表示用户是否登录
        if(allowed!==isLogin){
            navigate(redirectTo)
        }
    },[allowed,isLogin,redirectTo])

    return allowed===isLogin?<>{children}</>:<></>
}

export default RequireAuth