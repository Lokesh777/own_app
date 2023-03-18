import "./flag.css"
import { RiUserSearchFill } from "react-icons/ri";

export default function Flag(){

    return(
        <div className="flag">
            <div className="flagOrange">
                <h3>89</h3>
                <p>/100</p>
            </div>
            <div className="iconUser">
                <RiUserSearchFill size={25}  color="#fff"/>
            </div>
        </div>
    )
}