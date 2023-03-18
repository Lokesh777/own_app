import "./list.css"

export default function List({list,color}){

    return (
       
            <div className="ListArray">
               
                <p style={{backgroundColor:`${color}`}} className="dotGreen"></p>
                 <span className="spanP"> {list}</span> 
               
            </div>
       
    )
}