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

function HamburgerMenu() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const handleMenuToggle = (e) => {
		e.preventDefault()
		setIsMenuOpen(!isMenuOpen)
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
					// bmMenu: { background: "black", padding: "2.5em" },
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
				}}>
				<a className='menu-item' href='/'>
					<FontAwesomeIcon icon='fa-solid fa-bars fa-2xl' />
					Home
				</a>
				<a className='menu-item' href='#'>
					About
				</a>
				<a className='menu-item' href='#'>
					Contact
				</a>
			</Menu>
		</div>
	)
}

export default HamburgerMenu
