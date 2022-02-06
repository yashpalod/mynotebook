import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
    const host = "http://localhost:5000"
    const notesInitial = []
    const [notes, setNotes] = useState(notesInitial);

    // fetch all Notes
    const getNotes = async () => {
        // TODO: API call
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFmYTQ0OGRkODA2OTkxZmEwOWIyY2EyIn0sImlhdCI6MTY0NDEzOTkxMH0.wfKzCmVbACLcbH-hVoPuyGRI0lNs3GYGNRCb-6svKTA'
            },
        });
        const json = await response.json()
        console.log(json);
        setNotes(json);
        // logic to fetch
    }

    // Add a Note
    const addNote = async (title, description, tag) => {
        // TODO: API call
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFmYTQ0OGRkODA2OTkxZmEwOWIyY2EyIn0sImlhdCI6MTY0NDEzOTkxMH0.wfKzCmVbACLcbH-hVoPuyGRI0lNs3GYGNRCb-6svKTA'
            },
            body: JSON.stringify({ title, description, tag })
        });

        // logic to add
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
    const deleteNote = (id) => {
        // TODO: API call
        console.log("Deleted Note" + id);
        const newNotes = notes.filter((note) => { return note._id !== id });
        setNotes(newNotes)
    }

    // Edit a Note
    const editNote = async (id, title, description, tag) => {
        // TODO: API call
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFmYTQ0OGRkODA2OTkxZmEwOWIyY2EyIn0sImlhdCI6MTY0NDEzOTkxMH0.wfKzCmVbACLcbH-hVoPuyGRI0lNs3GYGNRCb-6svKTA'
            },
            body: JSON.stringify({ title, description, tag })
        });
        const json = response.json();

        //logic to edit in client
        for (let index = 0; index < notes.length; index++) {
            const element = notes[index];

            if (element._id === id) {
                element.title = title;
                element.description = description;
                element.tag = tag;
            }
        }
    }

    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
            {props.children}
        </NoteContext.Provider>
    );
}

export default NoteState;