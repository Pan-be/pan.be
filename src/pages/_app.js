import Layout from "@/components/layout/Layout"
import "@/styles/globals.css"

export default function App({ Component, pageProps }) {
	return (
		// <div className={montserrat.className}>
		<Layout>
			<Component {...pageProps} />
		</Layout>
		// </div>
	)
}
