import React from 'react';
import Button from './Button';

export default function Nav() {
	return (
		<>
			<div className="nav-bar">
				<ul>
					<li>
						<Button text={'Hem'} link={'/'}></Button>
					</li>
					<li>
						<Button text={'lunchMenu'} link={'/lunchmenu'}></Button>
					</li>
					<li>
						<Button text={'A la Carte'}></Button>
					</li>
					<li>
						<Button text={'Contact Us'} link={'/contact'}></Button>
					</li>
					<li>
						<Button text={'Lunch Me'} link={'/woot'} />
					</li>
				</ul>
			</div>
			<style jsx>{`
				display: flex;
				flex-direction: frow;
				justify-content: space-between;
				background: #e30613;
				width: 100%;
				.nav-bar {
					display: flex;
				}
			`}</style>
			<style global jsx>{`
				body {
					background: #fffff0;
				}
			`}</style>
		</>
	);
}
