import React from 'react';

export default function Button({ text = 'Click Me', link = '/' }) {
	return (
		<>
			<button>
				<a href={link}>{text}</a>
			</button>
			<style jsx>
				{`
					.button,
					a.button,
					button,
					[type='submit'],
					[type='reset'],
					[type='button'] {
						-webkit-appearance: none;
						display: inline-block;
						border: 1px solid #0366ee;
						border-radius: 4px;
						background: #0366ee;
						color: #ffffff;
						font-weight: 600;
						font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue,
							Helvetica, Arial, sans-serif;
						font-size: 1rem;
						text-transform: none;
						padding: 0.75rem 1.25rem;
						margin: 0 0 0.5rem 0;
						vertical-align: middle;
						text-align: center;
						cursor: pointer;
						text-decoration: none;
						line-height: 1;
					}

					.button:hover,
					a.button:hover,
					button:hover,
					[type='submit']:hover,
					[type='reset']:hover,
					[type='button']:hover {
						border: 1px solid #0250bc;
						background: #0250bc;
						color: #ffffff;
						text-decoration: none;
					}

					.button:focus,
					.button:active,
					a.button:focus,
					a.button:active,
					button:focus,
					button:active,
					[type='submit']:focus,
					[type='submit']:active,
					[type='reset']:focus,
					[type='reset']:active,
					[type='button']:focus,
					[type='button']:active {
						border: 1px solid #0250bc;
						background: #0250bc;
						color: #ffffff;
						text-decoration: none;
					}

					.button::-moz-focus-inner,
					a.button::-moz-focus-inner,
					button::-moz-focus-inner,
					[type='submit']::-moz-focus-inner,
					[type='reset']::-moz-focus-inner,
					[type='button']::-moz-focus-inner {
						border: 0;
						padding: 0;
					}
				`}
			</style>
		</>
	);
}
