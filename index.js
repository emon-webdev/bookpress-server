require('dotenv').config();
const express = require('express');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

const cors = require('cors');

app.use(cors());
app.use(express.json());




const uri = "mongodb+srv://meowDbUser:9cfRveDc8lnwXJED@cluster0.0aavw86.mongodb.net/?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});


async function run() {
    try {
        await client.connect();

        const db = client.db('booksCollection');
        const booksCollection = db.collection('books');







        console.log("Meow server successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);




app.get('/', (req, res) => {
    res.send(`Meow App server is running on port ${port}`);
});

app.listen(port, () => {
    console.log(`Meow App listening on port ${port}`)
})