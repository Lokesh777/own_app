import {useRoutes} from "react-router-dom"
import Authentication from "../Auth/Auth"
import Home from "../Home/Home"
import ProductList from "../components/ProductList"
import GamePage from "../GamesAssign/GamePage";
import Questions from "../Questions/Question";
import AllSolutions from "../Questions/solution/AllSolutions";
import AdminForm from "../AdminForm/ProductForm";
import GetData from "../AdminForm/GetData";

export default function AllRoutes(){

    const router = useRoutes([
        {path:"/",element:<Home/>},
        {path:"/auth",element:<Authentication/>},
        {path:"/products",element:<ProductList/>},
        {path:"/games",element:<GamePage/>},
        {path:"/quiz",element:<Questions />},
        {path:"/ans",element:<AllSolutions />},
        {path:"/admin_form",element:<AdminForm />},
        {path:"/admin_data",element:<GetData />},
    ])

    return (
        router
    )
}