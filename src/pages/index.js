import React from 'react';
import Nav from '../components/Nav';
import Body from '../components/Body';
import PageWrapper from '../components/PageWrapper';

export default function HomePage() {
	return (
		<PageWrapper>
			<div>
				<Nav />
				<Body />
				<style jsx>{`
					background: green;
					display: flex;
					flex-direction: column;
					margin: auto;
				`}</style>
			</div>
		</PageWrapper>
	);
}

// #e30613 header color
