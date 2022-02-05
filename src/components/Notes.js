import React, { useContext } from 'react';
import noteContext from '../context/Notes/NoteContext';
import Noteitem from './Noteitem';

const Notes = () => {
    const context = useContext(noteContext);
    const { notes, setNotes } = context;
    return (
        <div className="row my-3">
            <h1>Your Notes</h1>
            {notes.map((note) => {
                return <Noteitem note={note} />
            })}
        </div>
    );
}

export default Notes;