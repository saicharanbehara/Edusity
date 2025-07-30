import React from 'react'
import '../Testimonials/Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user1 from '../../assets/user-1.png'
import user2 from '../../assets/user-2.png'
import user3 from '../../assets/user-3.png'
import user4 from '../../assets/user-4.png'
import { useRef } from 'react'

const Testimonials = () => {
    const slider = useRef()

    let tx= 0
    
    const slideForward = ()=>{
        if (tx > -50)
        {
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }
    const slideBackward = ()=>{
        if (tx < 0)
        {
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }

  return (
    <div className='Testimonials'>
        <img src={next_icon} className='next-btn' onClick={slideForward}/>
        <img src={back_icon} className='back-btn' onClick={slideBackward}/>
        <div className="slider">
             <ul ref={slider}>
                <li>
                    <div className='slide'>
                        <div className="userInfo">
                            <img src={user1} alt="" />
                            <div>
                                <h3> Emily Williams </h3>
                                <span> Edusity, USA </span>
                            </div>
                        </div>
                         <p>
                                Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.
                            </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="userInfo">
                            <img src={user2} alt="" />
                            <div>
                                <h3>
                                    William Jackson
                                </h3>
                                <span>
                                    Edusity, USA
                                </span>
                            </div>
                        </div>
                         <p>
                                Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.
                            </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="userInfo">
                            <img src={user3} alt="" />
                            <div>
                                <h3>
                                    Emily Williams
                                </h3>
                                <span>
                                    Edusity, USA
                                </span>
                            </div>
                        </div>
                         <p>
                                Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.
                            </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="userInfo">
                            <img src={user4} alt="" />
                            <div>
                                <h3>
                                    William Jackson
                                </h3>
                                <span>
                                    Edusity, USA
                                </span>
                            </div>
                        </div>
                         <p>
                                Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.
                            </p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonials