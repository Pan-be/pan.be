import classes from "./ProjectDetail.module.css"

const ProjectDetail = (props) => {
	return (
		<section className={classes.detail}>
			<img src={props.img} alt={props.title}></img>
			<h1>{props.title}</h1>
			<address>({props.stack})</address>
			<p>{props.description}</p>
		</section>
	)
}

export default ProjectDetail
