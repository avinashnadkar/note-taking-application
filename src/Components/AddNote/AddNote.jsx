import { useState } from "react";
import Calendar from "../Calendar/Calendar";
import style from "./AddNote.module.css";

const AddNote = () => {

    const [noteData, setNoteData] = useState({ title: "", body: "" ,date:""});

    const handleChange = (e) => {
        let [name, value] = [e.target.name, e.target.value]
        setNoteData({
            ...noteData,
            [name]: value
        })
    }

    const handleSubmit = () => {
        console.log(noteData)
    }

    return (
        <div className={style.addNoteContainer}>
            <div className={style.noteForm}>
                <div className={style.calendar}>
                   <Calendar handleChange={handleChange} data={noteData}/>
                </div>
                <div className={style.title}>
                   <input type='text' value={noteData.title} name="title" onChange={handleChange} placeholder="Title"/>
                </div>
                <div className={style.body}>
                    <textarea value={noteData.body} name="body" onChange={handleChange} placeholder="Note"/>
                </div>
                <div className={style.btn}>
                    <button onClick={handleSubmit}>Add Note</button>
                </div>
            </div>
        </div>
    )
}

export default AddNote;