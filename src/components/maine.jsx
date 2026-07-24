import React from "react";
import "./maine.css";

export default function Main({ statsImg }) {
	return (
		<main>
			<div className="stats-carousel">
				<img src={statsImg} alt="Gold's Gym stats" />
			</div>
			<h2>Our Legacy</h2>
			<section className="legacy container">
				<div className="legacy-video">
					<iframe
						src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
						title="Gold's Gym Legacy"
						allowFullScreen
					></iframe>
				</div>
				<div className="legacy-content">
					<p>
						Gold's Gym is a globally renowned fitness brand that has made its
						mark in India. With a strong legacy dating back to 1965 in Venice
						Beach, California, Gold's Gym has become synonymous with fitness
						excellence and innovation. Gold's Gym India carries the legacy
						ahead in the home country since its inception in 2002.
					</p>
					<p>
						Gold's Gym India has expanded its presence across various cities,
						aiming to empower individuals to achieve their fitness goals
						regardless of their fitness levels. It combines state-of-the-art
						equipment, expert trainers, and a supportive community to foster a
						holistic approach to wellness.
					</p>
				</div>
			</section>
		</main>
	);
}