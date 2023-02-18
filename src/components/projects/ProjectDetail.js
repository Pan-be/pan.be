import Card from "../ui/Card"
import Wrapper from "../ui/Wrapper"
import classes from "./ProjectDetail.module.css"

const ProjectDetail = (props) => {
	return (
		<Wrapper>
			<Card>
				<section className={classes.detail}>
					<img src={props.img} alt={props.title}></img>
					<h1>{props.title}</h1>
					<address>({props.stack})</address>
					<p>{props.description}</p>
				</section>
			</Card>
		</Wrapper>
	)
}

export default ProjectDetail
