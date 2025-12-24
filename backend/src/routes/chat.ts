import { Router } from "express";
import * as chatController from "../controllers/chat";

const chatRouter = Router();

chatRouter.get("/messages", async (req, res) => {
  try {
    const sessionId = req.query?.sessionId;
    if (typeof sessionId != "string") {
      return res.status(400).json({ error: "sessionId must be a string" });
    }
    const messages = await chatController.getMessagesWithSessionId(sessionId || "-1");
    res.send(messages);
  } catch (err) {
    console.log("/messages route error: ", err);
    res.status(500).json({
      error:
        "Sorry, we are unable to process your request at this moment. Please try again later",
    });
  }
});

chatRouter.post("/message", async (req, res) => {
  try {
    let { sessionId, text }: { sessionId: string; text: string } = req.body;

    const response = await chatController.createNewReplyMessageToAnswerUser(
      sessionId,
      text
    );
    res.send(response);
  } catch (err) {
    console.log("/message route error: ", err);
    res.status(500).json({
      error:
        "Sorry, we are unable to process your request at this moment. Please try again later",
    }); 
  }
});

export default chatRouter;
