import { Menu } from 'antd';
import { useState,useEffect } from 'react';
import logo from "../../assets/logo.png"
import icons from './iconList';
import { useNavigate,useLocation } from 'react-router-dom';
import { useSelector } from "react-redux";

import "./index.scss"
interface MenuItem{
    key:string;
    label:string;
    icon?:React.ReactNode;
    children?:MenuItem[]
}

interface MenuItemFromData{
    key:string;
    label:string;
    icon:string;
    children?:MenuItemFromData[]
}
function NavLeft() {
    const { menuList } = useSelector((state: any) => state.authSlice);
    const navigate=useNavigate()
    const[menuData,setMenuData]=useState<MenuItem[]>([]);
    const location=useLocation();
   // const selectedKey=location.pathname
    useEffect(()=>{
        configMenu()
    },[menuList]);
   async function configMenu(){
        const mappedMenuItems:MenuItem[]=mapMenuItems(menuList);
        setMenuData(mappedMenuItems);
    }
    //将返回的菜单数据转换成我们需要的格式
    function mapMenuItems(items:MenuItemFromData[]):any{
        return items.map((item:MenuItemFromData)=>({
            key:item.key,
            label:item.label,
            icon:icons[item.icon],
            children:item.children ? mapMenuItems(item.children) : null //递归操作
        }))
    }

    function handleClick({key}:{key:string}){
        navigate(key)
    }

    return <div className='navleft'>
        <div className='logo'>
            <img src={logo} alt="" width={18}/>
            <h1>朋远智慧园区</h1>
        </div>

        <Menu
            defaultSelectedKeys={['/dashboard']}
            mode="inline"
            theme="dark"
            items={menuData}
            onClick={handleClick}
            selectedKeys={[location.pathname]}
        />
    </div>
}
export default NavLeft