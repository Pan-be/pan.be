import { MongoClient } from "mongodb"

export const fetchProjects = () => {
	const client = MongoClient.connect(
		"mongodb+srv://pan:JachuStachu12@cluster0.vh8v8ji.mongodb.net/?retryWrites=true&w=majority"
	)

	return client
}
