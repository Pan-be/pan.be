import { MongoClient } from "mongodb"
import Head from "next/head"
import ProjectsList from "@/components/projects/ProjectsList"
import { Fragment } from "react"

const Projects = (props) => {
	return (
		<Fragment>
			<Head>
				<title>Portfolio</title>
			</Head>
			{/* <h1>My portfolio</h1> */}
			<ProjectsList projects={props.projects} />
		</Fragment>
	)
}

export const getStaticProps = async () => {
	const client = await MongoClient.connect(
		"mongodb+srv://pan:JachuStachu12@cluster0.vh8v8ji.mongodb.net/?retryWrites=true&w=majority"
	)

	const db = client.db("panbe")
	const projectsCollection = db.collection("projects")

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
