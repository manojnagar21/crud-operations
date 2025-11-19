import express from 'express';
import { connectToDatabase } from './db.js';
const app = express();
// const router = express.Router();
import userRouter from './routes/userRoutes.js';
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/api/user", userRouter);
const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
    console.log("Hello World");
});

// app.get("/user/", userLogin);

app.listen(PORT, () => {
    connectToDatabase();
    console.log(`Server running at port ${ PORT }`);
})