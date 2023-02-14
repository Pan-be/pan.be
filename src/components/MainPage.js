import classes from "./MainPage.module.css"

const MainPage = () => {
	return (
		<main className={classes["article-container"]}>
			<aside className={classes["face-container"]}>
				<img src='img/face.png' alt='logo' />
			</aside>
			<div className={classes.article}>
				<p>Konrad Bieniek</p>
				<p>Front-End Developer</p>
				<p>
					<a href='#'>Read more...</a>
				</p>
			</div>
		</main>
	)
}

export default MainPage
