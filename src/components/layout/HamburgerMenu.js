import { slide as Menu } from "react-burger-menu"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import {
// 	solid,
// 	regular,
// 	brands,
// 	icon,
// } from "@fortawesome/fontawesome-svg-core/import.macro"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import classes from "./HamburgerMenu.module.css"
import Link from "next/link"
import { menuObj } from "@/utilis/menuObj"

function HamburgerMenu() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const handleMenuToggle = (e) => {
		e.preventDefault()
		setIsMenuOpen(!isMenuOpen)
	}
	const handleMenuItemClick = () => {
		setIsMenuOpen(false)
	}

	return (
		<div>
			<button className={classes.barsButton} onClick={handleMenuToggle}>
				<FontAwesomeIcon icon={faBars} className={classes.bars} />
			</button>
			<Menu
				right
				isOpen={isMenuOpen}
				styles={{
					bmMenu: {
						background: "transparent",
						padding: "2.5em",
						width: "100vw",
					},
					bmBurgerButton: {
						position: "fixed",
						width: "36px",
						height: "30px",
						left: "36px",
						top: "36px",
					},
					// bmCrossButton: { height: "24px", width: "24px" },
					// bmCross: { background: "#bdc3c7" },
					// bmItemList: { color: "#b8b7ad", padding: "0.8em" },
					// bmItem: { display: "inline-block" },
					// bmOverlay: { background: "rgba(0, 0, 0, 0.3)" },
					bmOverlay: { background: "transparent" },
				}}>
				<ul>
					{menuObj.map((menuItem) => (
						<li className={classes.menuItem}>
							<Link
								href={menuItem.url}
								target={menuItem.target}
								onClick={handleMenuItemClick}>
								{menuItem.title}
							</Link>
						</li>
					))}
				</ul>
			</Menu>
		</div>
	)
}

export default HamburgerMenu
