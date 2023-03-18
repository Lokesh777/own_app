import {useRoutes} from "react-router-dom"
import Authentication from "../Auth/Auth"
import Home from "../Home/Home"
import ProductList from "../components/ProductList"
import GamePage from "../GamesAssign/GamePage";
import Questions from "../Questions/Question";
import AllSolutions from "../Questions/solution/AllSolutions";

export default function AllRoutes(){

    const router = useRoutes([
        {path:"/",element:<Home/>},
        {path:"/auth",element:<Authentication/>},
        {path:"/products",element:<ProductList/>},
        {path:"/games",element:<GamePage/>},
        {path:"/quiz",element:<Questions />},
        {path:"/ans",element:<AllSolutions />},
    ])

    return (
        router
    )
}