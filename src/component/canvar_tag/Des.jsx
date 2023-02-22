import React, { useRef } from 'react'
import css from './des.module.css'


const Des = () => {


    const canva=useRef();
   setInterval(()=>{
    const ctx= canva.current.getContext("2d");
    
    ctx.fillRect(25, 25, 100, 100);

   },1000)

  return (
    <>
    <div className={css.main}>

        <canvas ref={canva} height={300} width={500} className={css.canva}></canvas>
        
        
    </div>
    </>
  )
}

export default Des