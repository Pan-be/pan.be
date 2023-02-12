import ProjectsList from "@/components/projects/ProjectsList"
import { Fragment } from "react"

const LIST = [
	{
		id: "p1",
		url: "https://order-meal-pan-be.netlify.app/",
		title: "FE module to order food (React)",
		img: "https://earlystemer.com/wp-content/uploads/2021/09/html-structure-1024x588.png",
	},
	{
		id: "p2",
		url: "https://expense-tracker-pan-be.netlify.app",
		title: "Expense Tracker (React)",
		img: "https://earlystemer.com/wp-content/uploads/2021/09/html-structure-1024x588.png",
	},
	{
		id: "p3",
		url: "https://cours-goals-pan-be.netlify.app",
		title: "Simple Goals list (React)",
		img: "https://earlystemer.com/wp-content/uploads/2021/09/html-structure-1024x588.png",
	},
]

const Projects = (params) => {
	return (
		<Fragment>
			<h1>My portfolio</h1>
			<ProjectsList projects={LIST} />
		</Fragment>
	)
}

export default Projects
