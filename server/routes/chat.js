import express from "express";
import { isAuthenticated } from "../middlewares/auth.js";
import { addMembers, deleteChat, getChatDetails, getMessages, getMyChats, getMyGroups, leaveGroup, newGroupChat, removeMember, renameGroup, sendAttachments } from "../controllers/chat.js";
import { attachmentMulter } from "../middlewares/multer.js";

const app = express.Router();

app.use(isAuthenticated);

app.post("/new", newGroupChat)
app.get("/my", getMyChats)
app.get("/my/groups", getMyGroups)
app.put("/addmembers", addMembers)
app.delete("/removemember", removeMember)
app.delete("/leave/:id", leaveGroup)
app.post("/message", attachmentMulter, sendAttachments)
app.get("/message/:id", getMessages)
app.get("/:id", getChatDetails)
app.put("/:id", renameGroup)
app.delete("/:id", deleteChat)

export default app;