import Wrapper from "../ui/Wrapper"
import ProjectItem from "./ProjectItem"
import classes from "./ProjectsList.module.css"

function ProjectsList(props) {
	return (
		<Wrapper>
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
							stack={proj.stack}
						/>
					))}
				</ul>
			</div>
		</Wrapper>
	)
}

export default ProjectsList
