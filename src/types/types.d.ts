import { NoteType, NoteColor } from "./enums"

export type Note = {
    id: string,
    title: string,
    type: NoteType,
    body:string,
    color:NoteColor,
    favorite: boolean,
    date: string,
}

