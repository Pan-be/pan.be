import Link from "next/link"
import HamburgerMenu from "./HamburgerMenu"
import classes from "./MainNavigation.module.css"
import { menuObj } from "@/utilis/menuObj"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
	faGithub,
	faLinkedin,
	faDiscord,
} from "@fortawesome/free-brands-svg-icons"
import { Fragment } from "react"

function MainNavigation() {
	return (
		<Fragment>
			<header className={classes.header}>
				<div className={classes.logo}>
					<Link href='/'>
						<img src='./img/pan.be-logo.png' alt='pan.be logo' />
					</Link>
				</div>
				<nav className={classes.mainNav}>
					<ul>
						{menuObj.map((menuItem) => (
							<li>
								<Link href={menuItem.url} target={menuItem.target}>
									{menuItem.title}
								</Link>
							</li>
						))}
					</ul>
				</nav>

				<HamburgerMenu />
			</header>
			<div className={classes.brands}>
				<FontAwesomeIcon icon={faGithub} className={classes.brandIcon} />
				<FontAwesomeIcon icon={faLinkedin} className={classes.brandIcon} />
				<FontAwesomeIcon icon={faDiscord} className={classes.brandIcon} />
			</div>
		</Fragment>
	)
}

export default MainNavigation
