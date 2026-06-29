// ComingSoon.jsx

import "./PreSale.css";
import backgroundImage from "../assets/BackgroundGYM.jpg";
import comingSoonImage from "../assets/Gym-coming-soon.jpg";

export default function ComingSoon() {
    const gyms = [
        "Gold's Gym Mohali Punjab",
        "Gold's Gym MIT Kothrud Pune",
    ];
    return (
        <section
            className="coming-soon-section"
            style={{
                backgroundImage: `url(${backgroundImage})`,
            }}
        >
            <div className="overlay"></div>

            <div className="content">
                <h1 className="presale">
                    Pre <span>Sale</span>
                </h1>

                <div className="cards">
                    <div className="gym-card">
                        <h3>Gold's Gym Patna Danapur</h3>
                        <button>View</button>
                    </div>

                    <div className="gym-card">
                        <h3>Gold's Gym Firozabad Dream Valley</h3>
                        <button>View</button>
                    </div>
                </div>

                <div className="title">
                    GYMS COMING <span>SOON</span>
                </div>

                <div className="bottom-section">
                    <div className="gym-list">
                        <h4>GYMS COMING SOON :</h4>
                        {gyms.map((gym, index) => (
                            <p key={index}>🏋 {gym}</p>
                        ))}
                    </div>

                    <div className="coming-image">
                        <img
                            src={comingSoonImage}
                            alt="coming soon"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}