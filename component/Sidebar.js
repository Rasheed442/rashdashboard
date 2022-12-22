import React,{ useState, useEffect} from 'react'
import style from "../styles/Sidebar.module.css"
import Image from 'next/image'
import {AiFillCaretDown,AiFillCaretUp,AiOutlineForm,AiOutlineTable,AiOutlineLineChart,AiFillCalendar} from "react-icons/ai"
import {MdDashboard,MdWidgets} from "react-icons/md"
import {ImLocation} from "react-icons/im"
import {CgMenuGridR} from "react-icons/cg"
import {BsFillImageFill} from "react-icons/bs"
import Aos from "aos";
import "aos/dist/aos.css";
function Sidebar() {
    const [open, setOpen] = useState(true)

    useEffect(() => {
        Aos.init({ duration: 1000 });
      }, []);

  return (
 <div className={style.background}>
      <div className={style.overlay}>

         <div className={style.sub}>
            <Image
            priority
            src='/favicon.ico'
            width={20}
            height={20}
            />
         <h3>RANSOM TIM</h3>
         </div>
         <div className={style.line}></div>

          <div className={style.profile} onClick={()=> setOpen(!open)}>
             <div className={style.girl}>
                <Image
                src='/PICS.JPG'
                priority
                width={30}
                height={30}
                />
                <p>ABDULRAUF RASHEED</p>
             </div>
             <AiFillCaretDown size={17} style={{color:"white"}}/>
          </div>
         
     {open ?"":<div data-aos="slide-right">
           
        <div className={style.mp} >
            <p>MP</p>
            <p>My Profile</p>
        </div>

        <div className={style.mp} >
            <p>EP</p>
            <p>Edit Profile</p>
        </div>
        
        <div className={style.mp} >
            <p>ST</p>
            <p> Settings</p>
        </div>

   </div>}
   <div className={style.line}></div>
  
   <div className={style.sub} style={{backgroundColor:"#82C3EC"}}>
      <MdDashboard size={20}/>
      <p>Dashboard</p>
   </div>
   <div className={style.line}></div>

   <div className={style.sub}>
      <BsFillImageFill size={20}/>
      <p>Pages</p>
   </div>
   <div className={style.line}></div>

   <div className={style.sub}>
      <CgMenuGridR size={24}/>
      <p>Components</p>
   </div>
   <div className={style.line}></div>

   <div className={style.sub}>
      <AiOutlineForm size={20}/>
      <p>Forms</p>
   </div>
   <div className={style.line}></div>

   <div className={style.sub}>
      <AiOutlineTable size={20}/>
      <p>Tables</p>
   </div>
   <div className={style.line}></div>

   <div className={style.sub}>
      <ImLocation size={20}/>
      <p>Maps</p>
   </div>
   <div className={style.line}></div>

   <div className={style.sub}>
      <MdWidgets size={20}/>
      <p>Widgets</p>
   </div>
   <div className={style.line}></div>

   <div className={style.sub}>
      <AiOutlineLineChart size={20}/>
      <p>Charts</p>
   </div>
   <div className={style.line}></div>

   <div className={style.sub}>
      <AiFillCalendar size={20}/>
      <p>Calendar</p>
   </div>
   <div className={style.line}></div>






  </div>
</div>
  )
}

export default Sidebar