import { MongoClient } from "mongodb"

const uri =
	"mongodb+srv://pan:JachuStachu12@cluster0.vh8v8ji.mongodb.net/?retryWrites=true&w=majority"
const client = new MongoClient(uri)

export async function connectToDatabase() {
	await client.connect()
	const database = client.db("panbe")
	const projectsCollection = database.collection("projects")
	return { client, projectsCollection }
}
