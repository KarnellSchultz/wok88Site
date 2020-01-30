import React from 'react';

export default function PageWrapper({ children }) {
	return (
		<div>
			<img src="http://www.wok88.se/logotype.png" alt="drag-on" />
			{children}
			<style jsx>{`
				-moz-box-shadow: 3px 3px 5px 6px #ccc;
				-webkit-box-shadow: 3px 3px 5px 6px #ccc;
				box-shadow: 3px 3px 5px 6px #ccc;
				width: 800px;
			`}</style>
		</div>
	);
}
