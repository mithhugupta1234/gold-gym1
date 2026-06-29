import "./Buy_a_Membership.css";
import heroImg from "../assets/Buy-a-membership-our-gym-india-scaled.jpg";

const TrialForm = () => {
    return (
        <section className="trial-section">
            <div className="form-container">
                <form className="trial-form">

                    <input type="text" placeholder="Enter Name" />
                    <input type="email" placeholder="Enter Email" />
                    <input type="tel" placeholder="Enter Phone" />

                    <select>
                        <option>Select a State</option>
                        <option>Delhi</option>
                        <option>Maharashtra</option>
                        <option>Punjab</option>
                    </select>

                    <select>
                        <option>Select City</option>
                        <option>Mumbai</option>
                        <option>Delhi</option>
                        <option>Chandigarh</option>
                    </select>

                    <select>
                        <option>Select Gym</option>
                        <option>Gym 1</option>
                        <option>Gym 2</option>
                    </select>

                    <textarea
                        rows="6"
                        placeholder="Enter Message"
                    ></textarea>

                    <div className="captcha">
                        <input type="checkbox" />
                        <span>I'm not a robot</span>
                    </div>

                    <button type="submit" className="btn">
                        SUBMIT
                    </button>

                </form>
            </div>
        </section>
    );
}

export default function Membership() {
    return (
        <section className="">
            <div className="hero" style={{ backgroundImage: `url(${heroImg})` }}>
                <div className="hero-content">
                    <h1>Book A Free Trial & Buy a Membership</h1>
                    <p>Fill Out This Form to Book Your Free Trial</p>
                </div>
            </div>
            <TrialForm />
        </section>
    );
}