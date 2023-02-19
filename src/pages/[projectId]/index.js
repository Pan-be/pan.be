import { ObjectId } from "mongodb"
import ProjectDetail from "@/components/projects/ProjectDetail"
import { Fragment } from "react"
import Head from "next/head"
import { connectToDatabase } from "@/utilis/db"

const DetailPage = (props) => {
	return (
		<Fragment>
			<Head>
				<title>{props.projectData.title}</title>
				<meta name='description' content={props.projectData.description} />
			</Head>
			<ProjectDetail
				img={props.projectData.img}
				title={props.projectData.title}
				stack={props.projectData.stack}
				description={props.projectData.description}
				html={props.projectData.html}
				github={props.projectData.github}
			/>
		</Fragment>
	)
}

export const getStaticPaths = async () => {
	const { client, projectsCollection } = await connectToDatabase()

	const projects = await projectsCollection.find({}, { _id: 1 }).toArray()

	client.close()
	return {
		fallback: "blocking",
		paths: projects.map((project) => ({
			params: { projectId: project._id.toString() },
		})),
	}
}

export const getStaticProps = async (context) => {
	const projectId = context.params.projectId

	const { client, projectsCollection } = await connectToDatabase()

	const selectedProject = await projectsCollection.findOne({
		_id: new ObjectId(projectId),
	})

	client.close()
	return {
		props: {
			projectData: {
				id: selectedProject._id.toString(),
				title: selectedProject.title,
				stack: selectedProject.stack,
				img: selectedProject.img,
				description: selectedProject.description,
				html: selectedProject.html ? selectedProject.html : "#",
				github: selectedProject.github ? selectedProject.github : "#",
			},
		},
	}
}

export default DetailPage
