import React from 'react';
import PageWrapper from '../components/PageWrapper';
import Nav from '../components/Nav';
import Body from '../components/Body';

export default function contactUs() {
	return (
		<PageWrapper>
			<Nav />
			<Body>
				<div className="contact-header">
					<h1> Finn Malmgrens Plan 7 </h1>
					<h1> 121 38 Johanneshov </h1>

					<h2>
						<a href="tel:086483462">☎️ 08-648-34-62</a>
					</h2>
				</div>
				<a
					target="blank"
					href="https://www.google.se/maps/place/Wok+88+HB/@59.2959806,18.1001989,17.08z/data=!4m5!3m4!1s0x465f783db9714735:0xf766610b6cb08cda!8m2!3d59.295699!4d18.1026088">
					<img src="http://wok88.se/karta.png" alt="map location for wok88" />
				</a>

				<img
					src="https://animated.name/uploads/posts/2016-08/1470682894_441.gif"
					alt="Cool dragon"
				/>

				<style jsx>{`
					display: flex;
					margin: auto;

					.contact-header {
						display: flex;
						flex-direction: column;
						margin: 2rem;
					}
					a {
						text-decoration: none;
					}
				`}</style>
			</Body>
		</PageWrapper>
	);
}
