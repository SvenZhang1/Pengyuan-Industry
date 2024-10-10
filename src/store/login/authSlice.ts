import { createSlice } from "@reduxjs/toolkit";

export const authSlice=createSlice({
    name:"auth",
    initialState:{
        token:sessionStorage.getItem("token")||null,
        menuList:[]
    },
    reducers:{
        setToken:(state,action)=>{
            state.token=action.payload;//把token存储到redux里
            sessionStorage.setItem("token",action.payload)    
        },
        clearToken:state=>{
            state.token=null;
            sessionStorage.removeItem("token")
        },
        setMenu:(state,action)=>{
            state.menuList=action.payload
        }
    }
})

export const{setToken,clearToken,setMenu}=authSlice.actions;
export default authSlice.reducer