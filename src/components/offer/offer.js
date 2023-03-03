import ContactForm from "../ContactForm/ContactForm"
import Card from "../ui/Card"
import Wrapper from "../ui/Wrapper"
import classes from "./offer.module.css"

const Offer = () => {
	return (
		<Wrapper>
			<Card>
				<div className={classes.texts}>
					<p>
						As a front-end developer, I am proficient in creating responsive and
						functional websites, be it a classic multi-page site or a one-page
						landing page. Based on your project or mockup, I can recreate your
						exact needs down to the last detail. I can also design a website
						mockup or create a ready-made design using graphic design tools.
					</p>

					<p>
						Apart from writing custom code from scratch, I am also experienced
						in working with popular CMS platforms like WordPress or PrestaShop.
						I can also build personal branding tools such as e-business cards,
						websites, and resumes.
					</p>

					<p>
						Please feel free to contact me for a project estimate or to discuss
						your needs.
					</p>
				</div>
			</Card>
			<ContactForm />
		</Wrapper>
	)
}

export default Offer
