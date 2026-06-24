import React from 'react'
import './GETINTOUCHWITHUS.css'
import bg from '../assets/Get-in-touch-with-us.jpg'

export default function GetInTouchWithUs() {
    return (
        <section className="get-in-touch" style={{
            backgroundImage: `url(${bg})`,
            backgroundPosition: 'right center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain'
        }}>
            <div className="form-wrap">
                <div className="heading-strip">
                    <h2>GET IN TOUCH WITH US</h2>
                </div>
                <div className="lead">
                    Speak with our experts to share your specific requirements, which can provide customized solutions catering to your needs.
                </div>

                <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                    <select className="input full">
                        <option>SELECT A DEPARTMENT</option>
                    </select>
                    <input className="input" placeholder="Enter Name" />
                    <input className="input" placeholder="Enter Email" />
                    <input className="input" placeholder="Enter Phone" />
                    <select className="input">
                        <option>Select a State</option>
                    </select>
                    <select className="input">
                        <option>Select City</option>
                    </select>
                    <select className="input">
                        <option>Select Gym</option>
                    </select>
                    <textarea className="input textarea" placeholder="Enter Message" />

                    <div className="captcha-row">
                        <label className="checkbox"><input type="checkbox" /> I'm not a robot</label>
                        <div className="captcha-box">reCAPTCHA</div>
                    </div>

                    <button className="submit-btn" type="submit">SUBMIT</button>
                </form>
            </div>
        </section>
    )
}
