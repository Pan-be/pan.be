import { Email } from "@/utilis/smtp"
import { useState } from "react"
import Card from "../ui/Card"
import classes from "./ContactForm.module.css"

const ContactForm = (params) => {
	const [formState, setFormState] = useState({})

	const changeHandler = (e) => {
		setFormState({ ...formState, [e.target.name]: e.target.value })
	}

	const submitHandler = (e) => {
		e.preventDefault()
		const config = {
			SecureToken: "9ca126dc-b3a4-4226-a1e8-2f6ae29256cc",
			To: "pan.be.fed@gmail.com",
			From: formState.email,
			Subject: "From Pan.Be contact form",
			Body: formState.name,
		}
		if (Email) {
			Email.send(config).then(() => alert("email sent succesfully"))
		}
	}

	return (
		<Card>
			<form onSubmit={submitHandler}>
				<input
					type='text'
					name='name'
					placeholder='Your Name'
					value={formState.name || ""}
					onChange={changeHandler}
				/>
				<input
					type='email'
					name='email'
					placeholder='Your message'
					value={formState.email || ""}
					onChange={changeHandler}
				/>
				<input type='submit' value='Send Email' />
			</form>
		</Card>
	)
}

export default ContactForm
