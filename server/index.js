const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, getInspiration, getHobby, createHobby, deleteHobby} = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.get("/api/inspiration", getInspiration);
app.get("/api/hobby", getHobby);
app.post("/api/hobby", createHobby)
app.put("/api/hobby:name", deleteHobby)

app.listen(4000, () => console.log("Server running on 4000"));
