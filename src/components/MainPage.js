import AboutMe from "./aboutMe/AboutMe"
import classes from "./MainPage.module.css"

const MainPage = () => {
	return (
		<main className={classes["article-container"]}>
			<aside className={classes["face-container"]}>
				<img src='img/biala_buzia.png' alt='logo' />
			</aside>
			<div className={classes.article}>
				<h1>Konrad Bieniek</h1>
				<h2>Front-End Developer</h2>
				<h2>Read more...</h2>
			</div>
			{/* <div className={classes.aboutMe}>
				<AboutMe />
			</div> */}
		</main>
	)
}

export default MainPage
