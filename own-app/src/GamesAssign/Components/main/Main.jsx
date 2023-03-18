import "./Main.css"
import SelectTag from "./Select/Select"
import Card from "./card/Card"
import Chat from "./chat/Chat"
import Strip from "./frontStrip/FrontStrip"


export default function MainPage(){


    return (
        <div className="container"> 
            <p className="heading">Watch of the Yōkai Hunters</p>
            
            <div className="content">
                <div className="front1">
                    <Strip />
                    <div className="strip2">
                        <p className="para">Currently Showing: Only newly listed pairs that appears to be safe. </p>
                        <SelectTag />
                    </div>

                    <div className="cards">
                        <Card text={"$BTYRANT"} pic={"https://s3-alpha-sig.figma.com/img/2abc/c486/70eb943935febcb71976375edccd6619?Expires=1679270400&Signature=HrWfH77smqSgnVQZ372fIm6K3rPFbqtl4Ya26-fZDZJK~7NnppMwVJ2cNsc0S5mSboxuJ75-7nh7dOAHTbqx78TZsS3hjpOdE0MIMiYdx~jpm3wa4qH~CMYdiFDxRGAKPfEu-Frg0mRfkJjqnxnfAg-8GZ8IRhHURRAvBdIflx3iKwpG7vD3iuVbV7Lzy3iTRVL-s3MK2PVHcCwGSNr5-5LPbLZO3Adg~JLdn8ALOpAsWsJ8oxwCFAzQnBtkHhG68oMm1lZkDoHUd6c2aAe1gGD4SzQQ6mOBAWuizqG09nWFRTczuMTKy6-LQj4g8l7AevChnGF0M6Pf8Y2UJS68hg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} />
                        <Card text={"$SHIBINO"} pic={"https://s3-alpha-sig.figma.com/img/16fd/9aab/1438e2552caed9fb65f5631ba92afaed?Expires=1679270400&Signature=Ok4Com~BhSvtYrQfZuIsaKUuwBhKRq8m-bmFXCMRkKZCbTeoeBEbuSTueuvfNypCP8psDKThk0kTN0fkL4KKN5-eS~gdRzzOvYAzMrrgQz0~S2vp-390ON1GAWmG4sERCMSJifJPVRO5lAIkoZPY0j-1-l6t0R83bEBJtMYNk7ySrYR9wVLT~wixc9ZyGI-dpcJO4FrRGYJAsw20LtWtTIHBNPvAvXIRP0ROzlV8zNw49A5sSf~WZsgd94M1AiJtBYEciulG06ZGd7ZPCrsKVuai7lKIP4PnWy1vw5Lk7mEN4d3~51NBdfyKIIv-L1Vtzg4HkHMRpxDrpl-UlFjO3Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} />
                        {/* <Card />
                        <Card /> */}
                    </div>
                
                </div>

                <div className="front2">
                    <div className="upperchat">
                      <Chat name={"darkener🤓"} image={"https://s3-alpha-sig.figma.com/img/7682/d697/7a06f59a590281e5a3a433997e7eca14?Expires=1679270400&Signature=IXrBl2d8kQwbKVkGvp1gM1bKtOj87hTZEhyqev6cCMV-8qenzIigiRZhd0BrKroxsSGZFDCCNqdP8q05CQCAIiRt0Z~h2iUzkr0w3w~z6j4Vkl28QaPTVffWUUNtCltnFc6NishKlzjvXaZBI8g522TR4aBx-CLfxj7You4DFzeR5BQiBPaQr4-t2blXxDNVKX78BSELS4mYyFtlvnzQFmFEThQRwjses8zZF0K9HTFYgZ4wRpyPl1cMLcs~4b~eD0vdl9RDWgUlQ3~52pWw8jlcMan-60K26oQd58YxRtBkCfXzLtLKE7OsJM3UepCETaQQBUx5pWBA82R9XoR0Vg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} />
                      <Chat name={"rajasthan🤓"} image={"https://s3-alpha-sig.figma.com/img/6d6d/9030/a1246466e8e74a2061091b83c3ed5708?Expires=1679270400&Signature=XyIJQEWWDrRvS0HfrbmUrcuFkIZCBQ9ijm-jRTmoqOhBAJur84t30kAUxe7mWE8HD0w39REzDxwfms4q1vOHSLklt-H4X-NP13g9DEe~4NtKPViO~3v~o~yCdna1Z9c20tPrqZp5K0Giep4cQo1ZsWEXnWNspyHBM1j3tP7vKN2nlluLdTPE2DTUq67r~0eSFvOVa3RitL61wfw51VATkeWGISPQ8LAtPxnVQ27cxDDfUapz1tHObadkbyBWz42EiRREXevYNDIuK0cyEAQHHVOYRZ~I4QW7lwyUgNJ4W2nwprAqBBRqJZZ7c4P5f2oYsOSM-Rvim9A-bcBYAI6Rpw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} />
                      <Chat name={"Ankur🤓"} image={"https://s3-alpha-sig.figma.com/img/78f1/e9f5/772efb89b923784e53e87ea22223a487?Expires=1679270400&Signature=VQ-A2VVTkZ1yLKpZfaF02Tq8Vup7gmaqSRBoPpcY4khXMQk440ePqlHjJXMgS~w7-xGsZKQyi8SeANavA~vsESGvsBXmS0nr7zTyuOVkCyVLp81Ylsr-XpTlDlw5fDaG3y9uIYYK7BehNzAvf-z~zdO247Ar1HLOQiKrRaQ7VQN0t4nJQZXhp~oiSEy~hmRShjEdCyK0nGtJNongO0XO6KV2ln5e7F5wmte-zNgCXZc65QmJeRYwQJxUdsdQ~j5Xj~ay2dK0zNkQ5keXErAdc4z3j-H3kyaIxKg7nGJexaxQM1b517jDJlJDzr~m3R4nDawl039nOSYMdrBMK60LLg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} />
                      <Chat name={"Aman😎"} image={"https://s3-alpha-sig.figma.com/img/add3/cd12/72414901da68e8b6867df9ed73b8de11?Expires=1679270400&Signature=jRdeaThKUxAfahMjcEzKcuRpmWDNEzevptDyxuWpKWwiHWkO9IzmukSP4bf2odo-QCIDs0gIur-qrUHwCo3BRGn~3ZFk1RgWaNF~6G6g4vEAeKiyDCfzFlnHJhJylpPpmZGGiBkWwzmULT6ieilCJsbXfsj6IKRA1iycy5ahgXHFoFMv0QP-edkUV00yVNhTlUS0xygi-LoobrnAdKU9V8GGNBOOzDzqIcuEVq7d704cuV3DhWKew1Flq04aFcXMrcBRLKdK2kTDyatIXMSAHmq~7JXY-T~U66Sx7tCKKkMRUzVwvt1vPrSXWndfYVphA9yVst5rV7~U171CawOF5w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} />
                    </div>
                    <input
                    className="inputChat"
                    type="text" 
                    placeholder="Write your message"
                    />
                </div>
            </div>
       
        </div>
    )
}