import AddNote from "../Components/AddNote/AddNote";
import Card from "../Components/Card/Card";
import style from "./Home.module.css";

const Home = () => {
    return(
        <div className={style.homepage}>
            <div className={style.addNoteForm}>
                 <AddNote/>
            </div>
            <div className={style.cards}>
                <div className={style.cardsContainer}>
                   <Card/>
                </div>
            </div>
        </div>
    )
}

export default Home;