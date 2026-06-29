import React from 'react'
import './BookYourFreeTrial2.css'
import { useNavigate } from 'react-router-dom';

export default function BookYourFreeTrial2() {
    const navigate = useNavigate();
    return (
        <section className="byft-banner">
            <div className="byft-inner">
                <div className="byft-text">
                    <h1>Buy a Gold's Gym Membership Today.</h1>
                    <p>Start Your Fitness Journey Today!</p>
                </div>

                <div className="byft-cta">
                    <button className="byft-button" onClick={() => navigate("/membership")}>Book Your Free Trial</button>
                </div>
            </div>
        </section>
    )
}
