import React from 'react';

export default function Body({ children }) {
	return (
		<div>
			<>{children}</>
			<style jsx>{`
				display: flex;
				flex-direction: column;
				background: cornsilk;
				margin: auto;
			`}</style>
		</div>
	);
}
