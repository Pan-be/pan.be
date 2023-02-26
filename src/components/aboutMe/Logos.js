import classes from "./Logos.module.css"

const Logos = () => {
	const logosArr = [
		{ title: "html", href: "img/skills/html.png", alt: "HTML logo" },
		{ title: "css", href: "img/skills/css.png", alt: "CSS logo" },
		{ title: "js", href: "img/skills/javascript.png", alt: "JS logo" },
		{ title: "react", href: "img/skills/react.png", alt: "react logo" },
		{ title: "redux", href: "img/skills/redux.png", alt: "redux logo" },
		{ title: "nextjs", href: "img/skills/nextjs.png", alt: "nextjs logo" },
		{ title: "git", href: "img/skills/git.png", alt: "GIT logo" },
		{
			title: "bootstrap",
			href: "img/skills/bootstrap.png",
			alt: "bootstrap logo",
		},
		{ title: "php", href: "img/skills/php.png", alt: "php logo" },
		{
			title: "database",
			href: "img/skills/database.png",
			alt: "database logo",
		},
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
