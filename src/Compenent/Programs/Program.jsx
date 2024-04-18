import React from 'react'
import './Program.css'
import Program_1 from '../../Assets/program-1.png'
import Program_2 from '../../Assets/program-2.png'
import Program_3 from '../../Assets/program-3.png'
import Program_icon1 from '../../Assets/program-icon-1.png'
import Program_icon2 from '../../Assets/program-icon-2.png'
import Program_icon3 from '../../Assets/program-icon-3.png'
const Program=()=>{
    const programs= [Program_1,Program_2,Program_3]
    const programicons=[Program_icon1,Program_icon2,Program_icon3]
  return (
    <div className="programs" id="programs"> 
    
                    <div className="program">
                <img src={Program_1} alt=""/>   
                        <div className="captions">
                        <img src={Program_icon1} alt="" />
                        <p>Graduation Degree</p>
                    </div>
                    </div>
                    <div className="program">
                <img src={Program_2} alt=""/>   
                        <div className="captions">
                        <img src={Program_icon2} alt="" />
                        <p>Graduation Degree</p>
                    </div>
                    </div>
                    <div className="program">
                <img src={Program_3} alt=""/>   
                        <div className="captions">
                        <img src={Program_icon3} alt="" />
                        <p>Graduation Degree</p>
                    </div>   
                </div>
            
            
      
    </div>
  )
}

export default Program
