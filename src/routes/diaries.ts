import express from "express";
import { addNote, getNotes } from "../utils/functions";
import { Note } from "../types/types";

const router = express.Router();

router.get("/",(_req,res)=>{
    const notes = getNotes();
    res.send({
        notes
    });
})

router.post("/",(req,res)=>{
    res.send("saving a diary");
    addNote(req.body as Note);
})

router.delete("/",(_req,res)=>{
    res.send("todo salio bien")
    res.statusCode = 200; 
})

export default router;