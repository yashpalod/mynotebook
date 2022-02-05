import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
    const notesInitial = [
        {
            "_id": "61fa44d3d806991fa09b2cab",
            "user": "61fa448dd806991fa09b2ca2",
            "title": "First Note",
            "description": "Hello Yash Palod",
            "tag": "personal",
            "date": "2022-02-02T08:46:11.602Z",
            "__v": 0
        },
        {
            "_id": "61fa45a8d806991fa09b2cae",
            "user": "61fa448dd806991fa09b2ca2",
            "title": "First Note",
            "description": "Hello Yash Palod",
            "tag": "personal",
            "date": "2022-02-02T08:49:44.560Z",
            "__v": 0
        },
        {
            "_id": "61fa45a8d806991fa09b2cae",
            "user": "61fa448dd806991fa09b2ca2",
            "title": "First Note",
            "description": "Hello Yash Palod",
            "tag": "personal",
            "date": "2022-02-02T08:49:44.560Z",
            "__v": 0
        },
        {
            "_id": "61fa45a8d806991fa09b2cae",
            "user": "61fa448dd806991fa09b2ca2",
            "title": "First Note",
            "description": "Hello Yash Palod",
            "tag": "personal",
            "date": "2022-02-02T08:49:44.560Z",
            "__v": 0
        },
        {
            "_id": "61fa45a8d806991fa09b2cae",
            "user": "61fa448dd806991fa09b2ca2",
            "title": "First Nce",
            "description": "Hecdso Yash Palod",
            "tag": "personal",
            "date": "2022-02-02T08:49:44.560Z",
            "__v": 0
        }
    ]

    const [notes, setNotes] = useState(notesInitial);

    return (
        <NoteContext.Provider value={{ notes, setNotes }}>
            {props.children}
        </NoteContext.Provider>
    );
}

export default NoteState;