import { useRouter } from "next/router"

const DetailPage = (params) => {
	const router = useRouter()
	const newsId = router.query.projectId

	return <h1>Detali page</h1>
}

export default DetailPage
