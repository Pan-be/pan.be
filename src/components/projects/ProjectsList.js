import { Fragment } from "react"
import ProjectItem from "./ProjectItem"
import classes from "./ProjectsList.module.css"

function ProjectsList(props) {
	return (
		<div className={classes.projList}>
			<h1>Most of my projects:</h1>
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
		</div>
	)
}

export default ProjectsList
