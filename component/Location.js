import React from 'react'
import style from '../styles/Location.module.css'
import Image from 'next/image'
import {AiOutlineGlobal} from "react-icons/ai"
import Sale from '../component/Sale'
function Location() {
  return (
    <div className={style.background}>
         <div className={style.global}>
             <div className={style.globalicon}>
                <AiOutlineGlobal size={25}/>
             </div>
             <h3>Global Sales by Top Location</h3>
         </div>


{/* display map here */}
<div className={style.map}>

       <div>
         <div className={style.main}>
              <div className={style.flag}>
                  <Image
                  src='/usa.webp'
                  priority
                  width={20}
                  height={20}
                  />

                  <p>USA</p>
              </div>

              <div className={style.gdp}>
                  <p>2.920</p>
                  <p>53.23%</p>
              </div>
         </div>

         <div className={style.main}>
              <div className={style.flag}>
                  <Image
                  src='/ger.jpeg'
                  priority
                  width={20}
                  height={20}
                  />

                  <p>Germany</p>
              </div>

              <div className={style.gdp}>
                  <p>1.300</p>
                  <p>20.23%</p>
              </div>
         </div>

         <div className={style.main}>
              <div className={style.flag}>
                  <Image
                  src='/aus.webp'
                  priority
                  width={20}
                  height={20}
                  />

                  <p>Australia</p>
              </div>

              <div className={style.gdp}>
                  <p>4.920</p>
                  <p>33.23%</p>
              </div>
         </div>

         <div className={style.main}>
              <div className={style.flag}>
                  <Image
                  src='/rom.png'
                  priority
                  width={20}
                  height={20}
                  />

                  <p>Romania</p>
              </div>

              <div className={style.gdp}>
                  <p>6.920</p>
                  <p>39.23%</p>
              </div>
         </div>

         <div className={style.main}>
              <div className={style.flag}>
                  <Image
                  src='/Uk.webp'
                  priority
                  width={20}
                  height={20}
                  />

                  <p>UK</p>
              </div>

              <div className={style.gdp}>
                  <p>12.920</p>
                  <p>33.23%</p>
              </div>
         </div>

         <div className={style.main}>
              <div className={style.flag}>
                  <Image
                  src='/nig.png'
                  priority
                  width={20}
                  height={20}
                  />

                  <p>Nigeria</p>
              </div>

              <div className={style.gdp}>
                  <p>32.920</p>
                  <p>33.23%</p>
              </div>
              
         </div>   
       </div>

       <div className={style.mapimage}>
          <Image
          src='/map.jpeg'
          width={500}
          height={300}
          priority
          />
       </div>

</div>
   <Sale/>
   
    </div>
  )
}

export default Location