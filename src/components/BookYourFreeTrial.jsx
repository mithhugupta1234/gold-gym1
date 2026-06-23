import React from 'react'
import './BookYourFreeTrial.css'
import heroImg from '../assets/BookYourFreeTrial.png'
import logo2 from '../assets/GG-Express.png'
import logo3 from '../assets/GG-Activ.png'
import logo1 from '../assets/GG.png'

export default function BookYourFreeTrial() {
	return (
		<section className="book-trial">
			<div
				className="book-trial__hero"
				style={{ backgroundImage: `url(${heroImg})` }}
			>
				<div className="book-trial__overlay">
					<h2 className="book-trial__eyebrow">Book Your Free Trial</h2>
					<p className="book-trial__sub">Start Your Fitness Journey At Gold's Gym Today</p>
					<button className="book-trial__cta">Sign Me Up</button>
				</div>
			</div>

			<div className="book-trial__logos">
				<img src={logo1} alt="Gold's Gym" />
				<img src={logo2} alt="Gold's Gym Express" />
				<img src={logo3} alt="Gold's Gym Activ" />
			</div>
		</section>
	)
}
