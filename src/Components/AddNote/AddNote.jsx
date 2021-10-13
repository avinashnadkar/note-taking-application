import { useState } from "react";
import Calendar from "../Calendar/Calendar";
import style from "./AddNote.module.css";
import { useContext } from "react";
import { StoreContext } from "../../Context/StoreContextProvider";

const AddNote = () => {

    const [noteData, setNoteData] = useState({ title: "", body: "" ,date:""});

    const { cards,setCards } = useContext(StoreContext);

    const handleChange = (e) => {
        let [name, value] = [e.target.name, e.target.value]
        setNoteData({
            ...noteData,
            [name]: value
        })
    }

    const handleSubmit = () => {
        let localData = JSON.parse(localStorage.getItem('cards'))
        if(localData == null){
            localStorage.setItem('cards',JSON.stringify([noteData]));
            setCards([noteData])
        }else{
            let arr = localData
            arr.push(noteData);
            localStorage.setItem('cards',JSON.stringify(arr))
            setCards(localData)
           // console.log(arr)
        }
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