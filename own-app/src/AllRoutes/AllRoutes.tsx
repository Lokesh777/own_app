import {useRoutes} from "react-router-dom"
import Authentication from "../Auth/Auth"
import Home from "../Home/Home"
export default function AllRoutes(){

    const router = useRoutes([
        {path:"/",element:<Home/>},
        {path:"/auth",element:<Authentication/>},
    ])

    return (
        router
    )
}