import React, { useState } from 'react'
import style from "../styles/Sale.module.css"
import {GrPowerReset} from "react-icons/gr"
import Image from 'next/image'
import {BsFillPencilFill,BsClock} from "react-icons/bs"
function Sale() {
  const [slide , setSlide] = useState(false)
  const [slide1 , setSlide1] = useState(false)
  const [slide2 , setSlide2] = useState(false)
  return (
    <div className={style.grid}>

         <div className={style.sale} onMouseOver={()=> setSlide(true)} onMouseLeave={()=> setSlide(false)}>
            <div className={style.chart}>
            <Image
            src='/chart.jpeg'
            priority
            width={300}
            height={200}
            />
            <div className={style.icon} style={{marginTop:slide ? "0px":""}}>
           <GrPowerReset/>
           <BsFillPencilFill/>
            </div>
          </div>

           <h3>Daily Sales</h3>
            <p>55% increase in today sales.</p>
            <div className={style.line}></div>
            <div className={style.clock}>
              <BsClock/>
              <p>Updated 4 minutes ago</p>
            </div>
         </div>

         <div className={style.sale} onMouseOver={()=> setSlide1(true)} onMouseLeave={()=> setSlide1(false)}>
            <div className={style.chart}>
            <Image
            src='/chart1.jpeg'
            priority
            width={300}
            height={200}
            />
            <div className={style.icon} style={{marginTop:slide1 ? "0px":""}}>
           <GrPowerReset/>
           <BsFillPencilFill/>
            </div>
          </div>

           <h3>Daily Sales</h3>
            <p>55% increase in today sales.</p>
            <div className={style.line}></div>
            <div className={style.clock}>
              <BsClock/>
              <p>Updated 4 minutes ago</p>
            </div>
         </div>

         <div className={style.sale} onMouseOver={()=> setSlide2(true)} onMouseLeave={()=> setSlide2(false)}>
            <div className={style.chart}>
            <Image
            src='/chart2.jpeg'
            priority
            width={300}
            height={200}
            />
            <div className={style.icon} style={{marginTop:slide2 ? "0px":""}}>
           <GrPowerReset/>
           <BsFillPencilFill/>
            </div>
          </div>

           <h3>Daily Sales</h3>
            <p>55% increase in today sales.</p>
            <div className={style.line}></div>
            <div className={style.clock}>
              <BsClock/>
              <p>Updated 4 minutes ago</p>
            </div>
         </div>
         
         <div className={style.sale} onMouseOver={()=> setSlide2(true)} onMouseLeave={()=> setSlide2(false)}>
            <div className={style.chart}>
            <Image
            src='/chart3.jpeg'
            priority
            width={300}
            height={200}
            />
            <div className={style.icon} style={{marginTop:slide2 ? "0px":""}}>
           <GrPowerReset/>
           <BsFillPencilFill/>
            </div>
          </div>

           <h3>Daily Sales</h3>
            <p>55% increase in today sales.</p>
            <div className={style.line}></div>
            <div className={style.clock}>
              <BsClock/>
              <p>Updated 4 minutes ago</p>
            </div>
         </div>


         <div className={style.sale} onMouseOver={()=> setSlide2(true)} onMouseLeave={()=> setSlide2(false)}>
            <div className={style.chart}>
            <Image
            src='/chart4.jpeg'
            priority
            width={300}
            height={200}
            />
            <div className={style.icon} style={{marginTop:slide2 ? "0px":""}}>
           <GrPowerReset/>
           <BsFillPencilFill/>
            </div>
          </div>

           <h3>Daily Sales</h3>
            <p>55% increase in today sales.</p>
            <div className={style.line}></div>
            <div className={style.clock}>
              <BsClock/>
              <p>Updated 4 minutes ago</p>
            </div>
         </div>


         <div className={style.sale} onMouseOver={()=> setSlide2(true)} onMouseLeave={()=> setSlide2(false)}>
            <div className={style.chart}>
            <Image
            src='/chart5.jpeg'
            priority
            width={300}
            height={200}
            />
            <div className={style.icon} style={{marginTop:slide2 ? "0px":""}}>
           <GrPowerReset/>
           <BsFillPencilFill/>
            </div>
          </div>

           <h3>Daily Sales</h3>
            <p>55% increase in today sales.</p>
            <div className={style.line}></div>
            <div className={style.clock}>
              <BsClock/>
              <p>Updated 4 minutes ago</p>
            </div>
         </div>



    </div>
    
  )
}

export default Sale