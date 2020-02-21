import React, { useEffect, useState } from 'react';
import Nav from '../components/Nav';
import Body from '../components/Body';
import PageWrapper from '../components/PageWrapper';

export default function HomePage() {
	const [foodImage, setFoodImage] = useState(1);

	useEffect(() => {
		const interval = setInterval(() => {
			console.log('yoooo', foodImage);
			foodImage >= 9 ? setFoodImage(1) : setFoodImage(foodImage + 1);
		}, 3000);
		return () => clearInterval(interval);
	}, [foodImage]);

	return (
		<PageWrapper>
			<div>
				<Nav />
				<Body>
					<div>
						<h2>Öppettider</h2>
						<h4>Måndag Stängt</h4>
					</div>
					<img
						src={`http://www.wok88.se/foto/bild${foodImage}.jpg`}
						alt="food stuff in this one"
					/>
				</Body>
				<style jsx>{`
					background: gold;
					display: flex;
					flex-direction: column;
					margin: auto;
				`}</style>
			</div>
		</PageWrapper>
	);
}

// #e30613 header color
