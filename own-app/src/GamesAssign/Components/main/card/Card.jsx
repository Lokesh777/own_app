import "./card.css"
import { RiComputerLine } from "react-icons/ri";
import { FaRegPaperPlane,FaTwitter } from "react-icons/fa";
import { IoGameController } from "react-icons/io5";
import { AiOutlineCaretDown } from "react-icons/ai";
import Tab from "./tab/Tab";
import { IoIosCopy } from "react-icons/io";
import List from "./list/List";
import Flag from "./rightMost/Flag";

const data = [
    {color:"#85DE50",list:"Renounced"},
    {color:"#85DE50",list:"Buy Tax(3%)"},
    {color:"#85DE50",list:"Sell Tax(3%)"},
    {color:"#f87e05",list:"Max Tax(25%)"},
    {color:"#85DE50",list:"Fake Renounced"},
    {color:"#f87e05",list:"Sell Renounced"},
    {color:"#85DE50",list:"Nevelty"},
    {color:"#85DE50",list:"Creator Tokens"},
    {color:"#f87e05",list:"Trade Modifier"},
    {color:"#85DE50",list:"Fresh Wallets (20%)"},
    {color:"#85DE50",list:"Contract Verified"},
    {color:"#f87e05",list:"Liquidity: Locked"},
    {color:"#f87e05",list:"Fresh Walls"},
    {color:"#f87e05",list:"Mintable"},
    {color:"#f87e05",list:"Airdrop (0%)"},
    {color:"#f87e05",list:"Fresh Wallet"},


]

export default function Card({pic,text}){

    return (
        <div className="cardBox">
          
          <div className="cardLeft">
            <img className="avatar" src={pic} alt="avtar" />
            <div className="icons">
                <RiComputerLine size={10} />
                <FaRegPaperPlane size={10} />
                <FaTwitter size={10} />
                <IoGameController size={10} />
                <RiComputerLine size={10} />
                <FaRegPaperPlane size={10} />
                <FaTwitter size={10} />
                <IoGameController size={10} />

            </div>
            <div className="times">
              <p>TIME LISTED</p>
              <h4 className="hours">1.5 Hours</h4>
            </div>
          </div>
          
          <div className="cardRight">
                <div className="innerCard">
                    <p className="cardHead">{text}</p>
                    <p className="discount" >235%+</p>
                    <button className="btn">24 HRS <AiOutlineCaretDown /> </button>
                </div>
                <p className="paraCard">Fable of the Baby Dragon Tyrant</p>
                <Tab />
                <div className="secret">
                    <p>Contract: 0xaa1db055d53f14f7e6a13e01097b17db620d3ef4 <span><IoIosCopy /></span></p>
                     <p>Pair: 0x8ab4309019d7674c6112eb32698a30fdcba6a278 <span><IoIosCopy /></span></p>
                </div>

                 <div className="ListItems">
                 {
                    data.map((ele)=>                     
                        <List color={ele.color} list={ele.list} />
                    )
                 }
                 
                 </div>

                 <div className="BtnBox">
                    <button className="trade" >TRADE</button>
                    <button className="chart" >CHART</button>
                    <button className="orangebtn">Poor structure but low risk of a scam.</button>
                 </div>

          </div>

          <div className="rightMost">
             <Flag />
          </div>

        </div>
    )
}