import React, { useState } from 'react'
import style from "../styles/Main.module.css"
import {SlOptionsVertical} from "react-icons/sl"
import Location from '../component/Location'
import {AiOutlineSearch,
    AiTwotoneBell,AiOutlineUser,
    AiTwotoneCopy,AiOutlineTwitter,AiOutlineMenu,
    AiFillTag,AiOutlineClose} from "react-icons/ai"
import {BsFillHouseFill,BsFillCalendarDateFill} from "react-icons/bs"
import {MdWidgets,MdTimer} from "react-icons/md"
import {CgDanger} from "react-icons/cg"

function Main() {
    const [menu, setMenu] = useState(true)
  return (
    <div className={style.app}>

    <div className={style.container}>

        <div className={style.dash}>
            <SlOptionsVertical/>
            <h4>Dashboard</h4>
        </div>
     
         
         <div className={style.search}>
            <input type='text' placeholder='search'/>
            <AiOutlineSearch size={25}/>
            <div className={style.icon}>
            <div className={style.notifications}>
                 <AiTwotoneBell size={25}/>
                 <span>3</span>
            </div>
            <AiOutlineUser size={25}/>
            <MdWidgets size={25}/>
            {/* <div onClick={()=> setMenu(!menu)}>
                {menu ?<AiOutlineMenu size={25}/> :<AiOutlineClose size={25}/>}
            </div> */}
         </div>
         </div>

    </div>

        <div className={style.issues}>
            <div className={style.bg}>
                    <div className={style.paste}>
                        <div className={style.copy}>
                        <AiTwotoneCopy size={50} style={{color:"white"}}/>
                        </div>
                        <p>Used space<br/><span>49/50</span> GB</p>
                    </div>
                    <p><CgDanger style={{color:"red"}}/> Get more space</p>
                </div> 
                
                <div className={style.bg}>
                    <div className={style.paste}>
                    <div className={style.copy1}>
                        <BsFillHouseFill size={50} style={{color:"white"}}/>
                        </div>                    
                    <p>Revenue<br/><span>$34,534</span> GB</p>
                    </div>
                    <p><BsFillCalendarDateFill/> Last 24 hours</p>
                </div> 
                
                <div className={style.bg}>
                    <div className={style.paste}>
                    <div className={style.copy2}>
                        <CgDanger size={50} style={{color:"white"}}/>
                        </div>                    
                    <p>Fixed Issues<br/><span>75</span> </p>
                    </div>
                    <p><AiFillTag/> Tracked from Github</p>
                </div> 

                <div className={style.bg}>
                    <div className={style.paste}>
                    <div className={style.copy3}>
                        <AiOutlineTwitter size={50} style={{color:"white"}}/>
                        </div>                    
                    <p>Followers<br/><span>+245</span></p>
                    </div>
                    <p><MdTimer/> Timer</p>
                </div> 
        </div>
                <Location/>
          
    </div>
  )
}

export default Main