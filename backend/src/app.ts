import express from "express";
import cors from "cors";
import chatRouter from "./routes/chat";
import "dotenv/config";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/chat", chatRouter);

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Server running ${process.env.SERVER_PORT}`);
});

export default app;
