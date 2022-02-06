import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
    const notesInitial = [
        {
            "_id": "6a44d3d806991fa09b2cab",
            "user": "61fa448dd806991fa09b2ca2",
            "title": "First Note",
            "description": "Hello Yash Palod",
            "tag": "personal",
            "date": "2022-02-02T08:46:11.602Z",
            "__v": 0
        },
        {
            "_id": "61fa45a8d806991f9b2cae",
            "user": "61fa448dd806991fa09b2ca2",
            "title": "First Note",
            "description": "Hello Yash Palod",
            "tag": "personal",
            "date": "2022-02-02T08:49:44.560Z",
            "__v": 0
        },
        {
            "_id": "1fa45a806991fa09b2cae",
            "user": "61fa448dd806991fa09b2ca2",
            "title": "First Note",
            "description": "Hello Yash Palod",
            "tag": "personal",
            "date": "2022-02-02T08:49:44.560Z",
            "__v": 0
        },
        {
            "_id": "61a45a806991fa09b2cae",
            "user": "61fa448dd806991fa09b2ca2",
            "title": "First Note",
            "description": "Hello Yash Palod",
            "tag": "personal",
            "date": "2022-02-02T08:49:44.560Z",
            "__v": 0
        },
        {
            "_id": "61fa45ad806991fa09b2ca",
            "user": "61fa448dd806991fa09b2ca2",
            "title": "First Nce",
            "description": "Hecdso Yash Palod",
            "tag": "personal",
            "date": "2022-02-02T08:49:44.560Z",
            "__v": 0
        }
    ]

    const [notes, setNotes] = useState(notesInitial);

    // Add a Note
    const addNote = (title, description, tag) => {
        // TODO: API call
        console.log("Adding a New Note");
        const note = {
            "_id": "61fa45ad891fa09b2ca",
            "user": "61fa448dd806991fa09b2ca2",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2022-02-02T08:49:44.560Z",
            "__v": 0
        };
        setNotes(notes.concat(note))
    }

    // Delete a Note
    const deleteNote = () => { }

    // Edit a Note
    const editNote = () => { }

    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
            {props.children}
        </NoteContext.Provider>
    );
}

export default NoteState;