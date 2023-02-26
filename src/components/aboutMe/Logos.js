import classes from "./Logos.module.css"

const Logos = () => {
	const logosArr = [
		{ title: "html", href: "img/htmlLogoColor.png", alt: "HTML logo" },
		{ title: "css", href: "img/cssLogoColor.png", alt: "CSS logo" },
		{ title: "js", href: "img/jsLogoColor.png", alt: "JS logo" },
		{ title: "git", href: "img/gitLogoColor.png", alt: "GIT logo" },
	]

	const handleMouseEnter = (event) => {
		event.target.classList.add(classes.logoElActive)
	}

	const handleMouseLeave = (event) => {
		event.target.classList.remove(classes.logoElActive)
	}

	// const handleClick = (e) => {
	// 	handleMouseEnter(e)
	// 	handleMouseLeave(e)
	// }

	return (
		<ul className={classes.logosList}>
			{logosArr.map((logo) => (
				<li key={logo.title} className={classes.logoEl}>
					<img
						src={logo.href}
						alt={logo.alt}
						onMouseEnter={handleMouseEnter}
						onMouseLeave={handleMouseLeave}
						// onClick={handleClick}
					/>
				</li>
			))}
		</ul>
	)
}

export default Logos
