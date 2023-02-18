import Head from "next/head"
import ProjectsList from "@/components/projects/ProjectsList"
import { Fragment } from "react"
import { connectToDatabase } from "@/utilis/db"

const Projects = (props) => {
	return (
		<Fragment>
			<Head>
				<title>Portfolio</title>
			</Head>
			<ProjectsList projects={props.projects} />
		</Fragment>
	)
}

export const getStaticProps = async () => {
	const { client, projectsCollection } = await connectToDatabase()

	const projects = await projectsCollection.find().toArray()

	client.close()

	return {
		props: {
			projects: projects.map((project) => ({
				title: project.title,
				stack: project.stack,
				img: project.img,
				id: project._id.toString(),
			})),
		},
	}
}
export default Projects
