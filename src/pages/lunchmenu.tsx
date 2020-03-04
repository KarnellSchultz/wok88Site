import React from 'react';
import PageWrapper from '../components/PageWrapper';
import Nav from '../components/Nav';
import Body from '../components/Body';

import { useSpring, animated } from 'react-spring';

export default function LunchMenu() {
	return (
		<PageWrapper>
			<Nav />
			<Body>
				<div className="menu-body">
					<div className="header-content">
						<h2>Lunch Menu: 85 kr</h2>
						<p>(kl. 11:00 – 14:00 inkl. sallad och dricka)</p>
						<ul>
							<li>Lite stark ⭐️</li>
							<li>Mellan stark ⭐️⭐️</li>
							<li>Mycket starkt ⭐️⭐️⭐️</li>
						</ul>
					</div>
					<div className="menu-options">
						<dl>
							<section>
								<h4>Måndag:</h4>
								<h4>🥺CLOSED🥺</h4>
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
					</div>
				</div>
			</Body>
			<style jsx>{`
				.menu-body {
					display: flex;
					margin: auto;
					flex-direction: column;
					background: gold;
				}

				.header-content {
					display: flex;
					flex-direction: column;
					margin: 2rem;
				}
				.menu-options {
				}
			`}</style>
		</PageWrapper>
	);
}
