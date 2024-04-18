import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../Assets/next-icon.png'
import back_icon from '../../Assets/back-icon.png'
import user_1 from '../../Assets/user-1.png'
import user_2 from '../../Assets/user-2.png'
import user_3 from '../../Assets/user-3.png'
import user_4 from '../../Assets/user-4.png'

function Testimonial() {
    const slider=useRef()
    let tx=0
    const slideForward=(slide)=>{
        if(slide==="next"){
            if(tx>-50){
                tx-=25
                slider.current.style.transform=`translateX(${tx}%)`
            }
        }
        if(slide==="right"){
            if(tx<0){
                tx+=25
                slider.current.style.transform=`translateX(${tx}%)`
            }
        }
       
    }
  return (
    <div className="testimonials" id="testimonials">
     <img src={next_icon} alt="" className='next-btn' onClick={()=>slideForward("next")}/> 
     <img src={back_icon} alt="" className='back-btn' onClick={()=>slideForward("right")}/> 
     <div className="slider">
        <ul ref={slider}>
        <li>
            <div className="slide" >
                <div className="user-info">
                    <img src={user_1}alt="" />
                    <div>
                        <h3>William Jackson1</h3>
                        <span> Edusity, USA</span>
            
                    </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil doloremque aliquid error iste quis deleniti, itaque provident distinctio dolore quaerat odit corporis incidunt cumque sed soluta dolores magnam porro at?</p>
            </div>
        </li>
        <li>
            <div className="slide">
                <div className="user-info">
                    <img src={user_2}alt="" />
                    <div>
                        <h3>William Jackson 2</h3>
                        <span> Edusity, USA</span>
            
                    </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil doloremque aliquid error iste quis deleniti, itaque provident distinctio dolore quaerat odit corporis incidunt cumque sed soluta dolores magnam porro at?</p>
            </div>
        </li>
        <li>
            <div className="slide">
                <div className="user-info">
                    <img src={user_3}alt="" />
                    <div>
                        <h3>William Jackson 3</h3>
                        <span> Edusity, USA</span>
            
                    </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil doloremque aliquid error iste quis deleniti, itaque provident distinctio dolore quaerat odit corporis incidunt cumque sed soluta dolores magnam porro at?</p>
            </div>
        </li>
        <li>
            <div className="slide">
                <div className="user-info">
                    <img src={user_4}alt="" />
                    <div>
                        <h3>William Jackson 4</h3>
                        <span> Edusity, USA</span>
            
                    </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil doloremque aliquid error iste quis deleniti, itaque provident distinctio dolore quaerat odit corporis incidunt cumque sed soluta dolores magnam porro at?</p>
            </div>
        </li>
        </ul>
     </div>
    </div>
  )
}

export default Testimonial
