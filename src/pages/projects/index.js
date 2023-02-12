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
		title: "Simple Goals list",
		stack: "React",
		img: "https://earlystemer.com/wp-content/uploads/2021/09/html-structure-1024x588.png",
		descritpion:
			"This project is a modern and dynamic web application, built using the latest technologies in JavaScript development. It features a clean and user-friendly interface, with a focus on efficient navigation and seamless user experience. The project utilizes cutting-edge libraries such as React, Redux, and Webpack, to deliver a fast and responsive website that can handle complex data structures with ease. With its modular architecture and scalable design, this project is the perfect solution for businesses and organizations looking to take their online presence to the next level. Whether you need to showcase products, manage customer information, or deliver dynamic content, this project has everything you need to succeed in the digital world.",
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
