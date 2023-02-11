import Link from "next/link"
import classes from "./MainNavigation.module.css"

function MainNavigation() {
	return (
		<header className={classes.header}>
			<div className={classes.logo}>pan.be</div>
			<nav>
				<ul>
					<li>
						<Link href='/projects'>Portfolio</Link>
					</li>
					<li>
						<Link href='#'>Contact me</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default MainNavigation
