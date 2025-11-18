import express from 'express';
import { connectToDatabase } from './db.js';
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
    console.log("Hello World");
});

app.listen(PORT, () => {
    connectToDatabase();
    console.log(`Server running at port ${ PORT }`);
})