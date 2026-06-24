import './OurBusinessVerticals.css'
import Ourbusinessverticals from '../assets/Our-business-verticals.jpg';

export default function OurBusinessVerticals() {
    return (
        <section className="our-business-verticals" style={{ backgroundImage: `url(${Ourbusinessverticals})` }}>
            <div className="obv-overlay">
                <div className="obv-container">
                    <h2 className="obv-title">Our Business Verticals</h2>
                    <p className="obv-subtitle">Gold's Gym India business comprises of 2 verticals- Gold's Gym & GCFI</p>

                    <div className="obv-cards">
                        <div className="obv-card">
                            <div className="obv-icon" aria-hidden>
                                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z" stroke="#FFD400" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <h3 className="obv-card-title">Gyms</h3>
                            <p className="obv-card-desc">We are one of the largest gym chains in India with 150+ active clubs & have been in India since 2002</p>
                        </div>

                        <div className="obv-card">
                            <div className="obv-icon" aria-hidden>
                                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z" stroke="#FFD400" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <h3 className="obv-card-title">GCFI</h3>
                            <p className="obv-card-desc">GCFI opened its doors for all the fitness enthusiasts in 2006 and has produced thousands of personal trainers and health coaches.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
