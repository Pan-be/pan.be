import { Fragment } from "react"
import Head from "next/head"
import MainPage from "@/components/MainPage"

const HomePage = (params) => {
	return (
		<Fragment>
			<Head>
				<title>pan.be</title>
				<meta
					name='description'
					content='Welcome to my portfolio and business card website! I am a skilled web developer specializing in JavaScript programming. Here you will find a showcase of my latest projects, as well as information about the services I offer. If you need a website, application, or custom software built, I can help. Contact me today to learn more about my services.'
				/>
			</Head>
			<MainPage />
		</Fragment>
	)
}

export default HomePage
