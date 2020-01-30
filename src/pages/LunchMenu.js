import React from 'react';
import PageWrapper from '../components/PageWrapper';
import Nav from '../components/Nav';
import Body from '../components/Body';

export default function LunchMenu() {
	return (
		<PageWrapper>
			<Nav />
			<Body />
			<style jsx>{`
				background: green;
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
