import Link from "next/link"
import { Fragment } from "react"

const Projects = (params) => {
	return (
		<Fragment>
			<h1>My portfolio</h1>
			<ul>
				<li>
					<Link href='/projects/portfolio'>Portfolio</Link>
				</li>
			</ul>
		</Fragment>
	)
}

export default Projects
