import AddNote from "../Components/AddNote/AddNote";
import Card from "../Components/Card/Card";
import style from "./Home.module.css";
import { useContext } from "react";
import { StoreContext } from "../Context/StoreContextProvider";

const Home = () => {

    const { cards } = useContext(StoreContext);

    return(
        <div className={style.homepage}>
            <div className={style.addNoteForm}>
                 <AddNote/>
            </div>
            <div className={style.cards}>
                <div className={style.cardsContainer}>
                    {
                        cards.map(el=>{
                            return( <Card title={el.title} body={el.body} date={el.date}/> )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Home;