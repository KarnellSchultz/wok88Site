import React from 'react';
import PageWrapper from '../components/PageWrapper';
import Nav from '../components/Nav';
import Body from '../components/Body';

export default function LunchMenu() {
	return (
		<PageWrapper>
			<Nav />
			<Body>
				<>
					<div>
						<h2>Lunch Menu: 85 kr</h2>
						<p>(kl. 11:00 – 14:00 inkl. sallad och dricka)</p>
						<ul>
							<li>Lite stark ⭐️</li>
							<li>Mellan stark ⭐️⭐️</li>
							<li>Mycket starkt ⭐️⭐️⭐️</li>
						</ul>
					</div>
					<dl>
						<section>
							<h4>Måndag:</h4>
							<h4>CLOSED</h4>
						</section>

						<section>
							<h4>Tisdag:</h4>
							<ol type="A">
								<li>Masaman Curry med Kyckling,jordnötter, Ris 🍚 ⭐️⭐️ </li>
								<li>Äggnudlar med Biff </li>
								<li>Sötsur Wok med Fläskfilé, Ris 🍚 ⭐️ </li>
								<li>
									Tre Små Rätter <strong>95:-</strong>
								</li>
								<li>Vegetarisk( Tofu, Cashewnötter ), Ris 🍚 </li>
							</ol>
						</section>
					</dl>
				</>
			</Body>
			<style jsx>{`
				background: DarkSeaGreen;
				display: flex;
				flex-direction: column;
				margin: auto;
			`}</style>

			<style jsx>{`
				p {
					color: blue;
				}
				div {
					background: goldenrod;
				}
				@media (max-width: 600px) {
					div {
						background: blue;
					}
				}
			`}</style>
			<style global jsx>{`
				body {
					background: #fffff0;
				}
			`}</style>
		</PageWrapper>
	);
}
