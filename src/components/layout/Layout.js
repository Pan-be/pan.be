import MainNavigation from "./MainNavigation"
import classes from "./Layout.module.css"
import FooterComponent from "./FooterComponent"

function Layout(props) {
	return (
		<div className={classes.app}>
			<MainNavigation />
			<main className={classes.main}>{props.children}</main>
			<FooterComponent />
		</div>
	)
}

export default Layout
