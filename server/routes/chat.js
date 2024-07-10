import express from "express";
import { isAuthenticated } from "../middlewares/auth.js";
import { addMembers, deleteChat, getChatDetails, getMessages, getMyChats, getMyGroups, leaveGroup, newGroupChat, removeMember, renameGroup, sendAttachments } from "../controllers/chat.js";
import { attachmentMulter } from "../middlewares/multer.js";
import { addMemberValidator, chatIdValidator, newGroupValidator, removeMemberValidator, renameValidator, sendAttachmentsValidator, validateHandler } from "../lib/validators.js";

const app = express.Router();

app.use(isAuthenticated);

app.post("/new", newGroupValidator(), validateHandler, newGroupChat)
app.get("/my", getMyChats)
app.get("/my/groups", getMyGroups)
app.put("/addmembers", addMemberValidator(), validateHandler, addMembers)
app.delete("/removemember", removeMemberValidator(), validateHandler, removeMember)
app.delete("/leave/:id", chatIdValidator(), validateHandler, leaveGroup)
app.post("/message", attachmentMulter, sendAttachmentsValidator(), validateHandler, sendAttachments)
app.get("/message/:id", chatIdValidator(), validateHandler, getMessages)
app.get("/:id", chatIdValidator(), validateHandler, getChatDetails)
app.put("/:id", renameValidator(), validateHandler, renameGroup)
app.delete("/:id", chatIdValidator(), validateHandler, deleteChat)

export default app;