import "./Chat.css"
export default function Chat({image,name}){

    return(
        <div className="boxchat">
            <img className="Avtar" src={image} alt="avtar" />
            <div className="chatText">
                <div>
                   <h3>{name}</h3>
                   <p>Yokul Hunter!</p>
                </div>
                <p>yeah one of the best decisions was to get on this dApp, cannot express how easy it is to spot rugs now.</p>
            </div>
        </div>
    )
}