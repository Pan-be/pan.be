import Link from "next/link"
import HamburgerMenu from "./HamburgerMenu"
import classes from "./MainNavigation.module.css"

function MainNavigation() {
	return (
		<header className={classes.header}>
			<div className={classes.logo}>
				<Link href='/'>
					<img src='./img/pan.be-logo.png' alt='pan.be logo' />
				</Link>
			</div>
			{/* <nav>
				<ul>
					<li>
						<Link href='/projects'>Portfolio</Link>
					</li>
					<li>
						<Link href='#'>Offer</Link>
					</li>
					<li>
						<Link href='https://cv-pan-be.netlify.app/' target='_blank'>
							Resume
						</Link>
					</li>
					<li>
						<Link href='#'>Contact me</Link>
					</li>
				</ul>
			</nav> */}

			<HamburgerMenu />
		</header>
	)
}

export default MainNavigation
