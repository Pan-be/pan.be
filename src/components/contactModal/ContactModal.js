import { useState } from "react"
import Modal from "react-modal"
import classes from "./ContactModal.module.css"

const ContactModal = (props) => {
	const [isModalOpen, setIsModalOpen] = useState(false)

	const handleModalOpen = () => {
		setIsModalOpen(true)
	}

	const handleModalClose = () => {
		setIsModalOpen(false)
	}

	const handleOnClick = () => {
		handleModalOpen()
		props.onClick()
	}

	return (
		<>
			<a className={classes.link} onClick={handleOnClick}>
				Contact me
			</a>
			<Modal
				className={classes.modal}
				isOpen={isModalOpen}
				onRequestClose={handleModalClose}>
				<div
					className={classes["modal-overlay"]}
					onClick={handleModalClose}></div>
				<div className={classes.wrapper}>
					<div
						style={{
							position: "relative",
							width: "100%",
							height: "100%",
							paddingTop: "170.0000%",
							paddingBottom: 0,
							boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)",
							marginTop: "1.6em",
							marginBottom: "0.9em",
							overflow: "hidden",
							borderRadius: "8px",
							willChange: "transform",
						}}>
						<iframe
							loading='lazy'
							style={{
								position: "absolute",
								width: "100%",
								height: "100%",
								top: 0,
								left: 0,
								border: "none",
								padding: 0,
								margin: 0,
							}}
							src='https://www.canva.com/design/DAFY9VhdfsY/view?embed'
							allowFullScreen='allowfullscreen'
							allow='fullscreen'></iframe>
					</div>
					<div className={classes.footer}>
						<p>
							<a
								href='https://www.canva.com/design/DAFY9VhdfsY/view?utm_content=DAFY9VhdfsY&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link'
								target='_blank'
								rel='noopener'>
								business_card-pan.be
							</a>
						</p>
						<p>
							© copyright by pani.be &amp; pan.be
							<script>document.write(new Date().getFullYear())</script>
						</p>
					</div>
				</div>
			</Modal>
		</>
	)
}

export default ContactModal
