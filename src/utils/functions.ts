import { Note } from "../types/types"

let notes:Array<Note> = []

export const getNotes = () => {
    return notes;
}

export const addNote = (body:Note):void => {
    notes.push(body);
}