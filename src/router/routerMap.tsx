
import { lazy } from "react"
const Dashboard=lazy(()=>import("../page/dashboard"))
const UserList = lazy(() => import('../page/users'));
const AddUser = lazy (()=>import("../page/users/addUser"));
const Tenement =lazy(()=>import("../page/estate/tenement"));
const Room = lazy(()=>import("../page/estate/room") )
const Car = lazy(()=>import("../page/estate/car"))
const Repair=lazy(()=>import("../page/repair"))
const Contract=lazy(()=>import("../page/finance/contract"))
const Surrender=lazy(()=>import("../page/finance/surrender"))
const Bill=lazy(()=>import("../page/finance/bill"));
const Merchants=lazy(()=>import("../page/merchants"))
const All=lazy(()=>import("../page/operation/all"))
const Article=lazy(()=>import("../page/operation/article"))
const Comments=lazy(()=>import("../page/operation/comments"))
const Equipment=lazy(()=>import("../page/equipment"));
const Enengy=lazy(()=>import("../page/energy"))
const Settings = lazy(() => import('../page/settings'));
const Personal=lazy(()=>import("../page/personal"))
export const componentMap:any={
    "/dashboard":<Dashboard/>,
    '/users/list': <UserList/>,
    '/users/add': <AddUser/>,
    "/estate/tenement":<Tenement/>,
    "/estate/room":<Room/>,
    "/estate/car":<Car/>,
    "/repair":<Repair/>,
    "/finance/contract":<Contract/>,
    "/finance/surrender":<Surrender/>,
    "/finance/bill":<Bill/>,
    "/merchants":<Merchants/>,
    "/operation/all":<All/>,
    "/operation/article":<Article/>,
    "/operation/comments":<Comments/>,
    "/equipment":<Equipment/>,
    "/energy":<Enengy/>,
    "/settings":<Settings/>,
    "/personal":<Personal/>
}