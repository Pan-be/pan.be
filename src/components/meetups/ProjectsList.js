import ProjectItem from "./ProjectItem"
import classes from "./ProjectsList.module.css"

function ProjectsList(props) {
	return (
		<ul className={classes.list}>
			{props.projects.map((proj) => (
				<ProjectItem
					key={proj.id}
					id={proj.id}
					image={proj.img}
					title={proj.title}
					address={proj.url}
				/>
			))}
		</ul>
	)
}

export default ProjectsList
