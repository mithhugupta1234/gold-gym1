import React from "react";
import "./Testimonials.css";
import bg from "../assets/Testimonials.png";

const Testimonials = () => {
	return (
		<section
			className="testimonials-section"
			style={{ backgroundImage: `url(${bg})` }}
		>
			<div className="testimonials-inner">
				<h2 className="testimonials-title">Testimonials</h2>

				<div className="testimonial-card">
					<p className="testimonial-text">
						It's a very nice gym with world top class equipment of Life fitness
						and Hammer Strength, and people surrounding is also good, and
						staff of this branch is very kind, they help members very well and
						all the trainers are certified with good knowledge of teaching as
						well. Good place to achieve your goals.
					</p>

					<p className="testimonial-author">Mayur Abnave</p>

					<ul className="testimonial-dots" aria-hidden>
						<li className="dot"></li>
						<li className="dot active"></li>
						<li className="dot"></li>
					</ul>
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
