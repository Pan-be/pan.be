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
			<form>
				<input
					type='text'
					name='name'
					placeholder='Your Name'
					value={values.name}
					onChange={handleChange}
				/>
				<input
					type='email'
					name='email'
					placeholder='Your email'
					value={values.email}
					onChange={handleChange}
				/>
				<input
					type='text'
					name='subject'
					placeholder='Your subject'
					value={values.subject}
					onChange={handleChange}
				/>
				<textarea
					type='text'
					name='message'
					placeholder='Your message'
					rows={4}
					value={values.message}
					onChange={handleChange}
				/>
				<button onClick={onSubmit}>Send a mail</button>
			</form>
		</Card>
	)
}

export default ContactForm
