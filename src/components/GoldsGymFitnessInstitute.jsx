import React from 'react'
import './GoldsGymFitnessInstitute.css'
import Fitness from '../assets/FitnessInstitute.png'
import Fitness2 from '../assets/FitnessInstitute2.png'
import Fitness3 from '../assets/FitnessInstitute3.png'
import Fitness4 from '../assets/FitnessInstitute4.png'

export default function GoldsGym({ goldsGymFitnessInstitute }) {
    return (
        <div className="GoldsGymFitnessInstitute">
            <div className="image-wrap">
                <img src={goldsGymFitnessInstitute} alt="Gold's Gym legacy" />
                <div className="overlay">
                    <h1>Gold's Gym <span className="highlight">Fitness Institute</span></h1>
                    <p className="lead">Become a Certified Fitness Professional Today</p>
                    <p className="sub">Physical Activity Or Can Improve Your Health</p>
                    <div>
                        <span className="Fitness"><img src={Fitness} alt="Fitness Institute" />GGFI online</span>
                        <span className="Fitness"><img src={Fitness2} alt="Fitness Institute" />GGFI offline</span>
                        <span className="Fitness"><img src={Fitness3} alt="Fitness Institute" />ACE</span>
                        <span className="Fitness"><img src={Fitness4} alt="Fitness Institute" />Short Courses</span>
                    </div>
                    <button className="know-more">Know More</button>
                </div>
            </div>
        </div>
    )
}
