import { sendContactForm } from "@/lib/api"
import { useState } from "react"
import Card from "../ui/Card"
import classes from "./ContactForm.module.css"

const initValues = {
	name: "",
	email: "",
	subject: "",
	message: "",
}

const initialState = { values: initValues }

const ContactForm = () => {
	const [state, setState] = useState(initialState)

	const { values } = state

	const handleChange = ({ target }) =>
		setState((prev) => ({
			...prev,
			values: {
				...prev.values,
				[target.name]: target.value,
			},
		}))

	const onSubmit = async (e) => {
		e.preventDefault()
		setState((prev) => ({
			...prev,
		}))
		try {
			await sendContactForm(values)
		} catch (error) {
			setState((prev) => ({
				...prev,
				error: error.message,
			}))
		}
	}

	return (
		<Card>
			<form className={classes.form} onSubmit={onSubmit}>
				<h4>if you have any questions for me, just email:</h4>
				<div className={classes.control}>
					<input
						type='text'
						name='name'
						placeholder='Your Name'
						value={values.name}
						required
						onChange={handleChange}
					/>
				</div>
				<div className={classes.control}>
					<input
						type='email'
						name='email'
						placeholder='Your email'
						value={values.email}
						required
						onChange={handleChange}
					/>
				</div>
				<div className={classes.control}>
					<input
						type='text'
						name='subject'
						placeholder='Your subject'
						value={values.subject}
						required
						onChange={handleChange}
					/>
				</div>
				<div className={classes.control}>
					<textarea
						type='text'
						name='message'
						placeholder='Your message'
						rows={4}
						value={values.message}
						required
						onChange={handleChange}
					/>
				</div>
				<div className={classes.actions}>
					<button onClick={onSubmit}>Send a mail</button>
				</div>
			</form>
		</Card>
	)
}

export default ContactForm
