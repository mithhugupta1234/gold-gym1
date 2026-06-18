import React from 'react'
import './maine.css'

export default function Main({ statsImg }) {
	return (
		<main>
			<div className="stats-carousel container">
				<img src={statsImg} alt="Gold's Gym stats" />
			</div>
			<strong>
				Our Legacy
			</strong>
		</main>
	)
}

