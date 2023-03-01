import Layout from "@/components/layout/Layout"
import "@/styles/globals.css"
// import { Montserrat } from "@next/font/google"

// const montserrat = Montserrat({ weight: "100", variable: "--montserat-font" })

export default function App({ Component, pageProps }) {
	return (
		// <div className={montserrat.className}>
		<Layout>
			<Component {...pageProps} />
		</Layout>
		// </div>
	)
}
