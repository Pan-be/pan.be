import MainNavigation from "./MainNavigation"
import classes from "./Layout.module.css"
import FooterComponent from "./Footer"

function Layout(props) {
	return (
		<div>
			<MainNavigation />
			<main className={classes.main}>{props.children}</main>
			<FooterComponent />
		</div>
	)
}

export default Layout
