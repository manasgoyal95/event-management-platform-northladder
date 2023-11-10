const express = require("express");
const connectDb = require("./config/connectDb");
const eventModel = require("./model/eventModel");

const app = express();

app.use(express.json());
connectDb();

app.get("/", (req, res) => {
  res.send("Hi!!");
});

app.post("/events", async (req, res) => {
  try {
    const event = new eventModel(req.body);
    await event.save();
    res.status(201).json({
      success: true,
      event,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
});

app.put("/events/:id", async (req, res) => {
  try {
    const event = await eventModel.findById(req.params.id);
    if (!event) return res.status(404).send("Event not found");
    event.set(req.body);
    event.updatedAt = Date.now();
    const result = await event.save();
    res.status(200).json(result);
  } 
  catch (error) {
    console.log(error);
    res.status(500).json({success: false,
        error,});
  }
});

app.delete("/events/:id", async (req, res) => {
  try {
    const event = await eventModel.findByIdAndDelete(req.params.id);
    if (!event) return res.status(404).send("Event not found");
    res.status(200).json({success:true,event});
  } catch (error) {
    console.log(error);
    res.status(500).json({success: false,
        error,});
  }
});

app.get("/events/:id", async (req, res) => {
  const event = await eventModel.findById(req.params.id);
  if (!event) return res.status(404).send("Event not found");
  res.send(event);
});

app.listen("8080", () => {
  console.log("server running");
});
