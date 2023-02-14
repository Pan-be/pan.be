import classes from "./FooterComponent.module.css"
const FooterComponent = () => {
	return (
		<footer className={classes.footer}>
			<h5>
				© copyright by{" "}
				<a href='https://business-card-pan-be.netlify.app/'>pan.be</a>
				{" " + new Date().getFullYear()}
			</h5>
		</footer>
	)
}

export default FooterComponent
