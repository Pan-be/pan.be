import Link from "next/link"
import Card from "../ui/Card"
import Wrapper from "../ui/Wrapper"
import classes from "./ProjectDetail.module.css"

const ProjectDetail = (props) => {
	return (
		<Wrapper>
			{/* <Card> */}
			<section className={classes.detail}>
				<img src={props.img} alt={props.title}></img>
				<h1>{props.title}</h1>
				<address>({props.stack})</address>
				<p>{props.description}</p>
				<address className={classes.links}>
					<Link href={props.html} target='blank'>
						Live preview
					</Link>
					<Link href={props.github} target='blank'>
						GitHub repository
					</Link>
				</address>
			</section>
			{/* </Card> */}
		</Wrapper>
	)
}

export default ProjectDetail
