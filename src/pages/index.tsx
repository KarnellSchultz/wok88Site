import React, { useEffect, useState } from 'react';
import Nav from '../components/Nav';
import Body from '../components/Body';
import PageWrapper from '../components/PageWrapper';

export default function HomePage() {
	const [foodImage, setFoodImage] = useState(1);

	useEffect(() => {
		const interval = setInterval(() => {
			foodImage >= 9 ? setFoodImage(1) : setFoodImage(foodImage + 1);
		}, 3000);
		return () => clearInterval(interval);
	}, [foodImage]);

	return (
		<PageWrapper>
			<Nav />
			<Body>
				<div className="header-content">
					<h1>Öppettider</h1>
					<h4>Måndag Stängt</h4>
					<h4>Tisdag - Fredag</h4>
				</div>
				<div className="food-images">
					<img
						src={`http://www.wok88.se/foto/bild${foodImage}.jpg`}
						alt="food stuff in this one"
					/>
				</div>
			</Body>
			<style jsx>{`
				flex-direction: column;
				display: flex;
				margin: auto;

				.header-content {
					margin: 2rem;
				}
				.food-images {
					margin: 1.5rem;
				}
			`}</style>
		</PageWrapper>
	);
}

// #e30613 header color
