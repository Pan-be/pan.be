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
import ContactModal from "../contactModal/ContactModal"

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
							<li key={menuItem.title}>
								{menuItem.title === "Contact me" ? (
									<ContactModal />
								) : (
									<Link href={menuItem.url} target={menuItem.target}>
										{menuItem.title}
									</Link>
								)}
							</li>
						))}
					</ul>
				</nav>

				<HamburgerMenu />
			</header>
			<div className={classes.brands}>
				<Link href='https://github.com/Pan-be'>
					<FontAwesomeIcon icon={faGithub} className={classes.brandIcon} />
				</Link>
				<Link
					href='https://www.linkedin.com/in/konrad-bieniek-73779b17a/'
					target='_blank'>
					<FontAwesomeIcon icon={faLinkedin} className={classes.brandIcon} />
				</Link>
				<Link href='discord://Pan-Be#3514' target='_blank'>
					<FontAwesomeIcon icon={faDiscord} className={classes.brandIcon} />
				</Link>
			</div>
		</Fragment>
	)
}

export default MainNavigation
