import Offer from "@/components/offer/offer"
import NewMeetupForm from "@/components/projects/NewMeetupForm"
import Head from "next/head"
import { Fragment } from "react"

const OfferPage = () => {
	return (
		<Fragment>
			<Head>
				<title>Offer</title>
			</Head>
			<Offer />
		</Fragment>
	)
}

export default OfferPage
