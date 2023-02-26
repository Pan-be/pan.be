import { useState } from "react"
import AboutMe from "./aboutMe/AboutMe"
import Cart from "./ui/Card"
import classes from "./MainPage.module.css"
import Logos from "./aboutMe/Logos"

const MainPage = () => {
	const [detailsAreVisible, setDetailsAreVisible] = useState(false)

	const showDetailsHandler = (e) => {
		e.preventDefault()
		setDetailsAreVisible(!detailsAreVisible)
	}

	return (
		<div className={classes["article-container"]}>
			<aside className={classes["face-container"]}>
				<img src='img/biala_buzia.png' alt='logo' />
			</aside>
			<div className={classes.article}>
				<h1>Konrad Bieniek</h1>
				<h2>Front-End Developer</h2>
				<h2 onClick={showDetailsHandler}>Read more...</h2>
			</div>
			<div className={classes.aboutMe}>
				{detailsAreVisible && (
					<>
						<Cart>
							<AboutMe />
						</Cart>
						<Cart>
							<Logos />
						</Cart>
					</>
				)}
			</div>
		</div>
	)
}

export default MainPage
