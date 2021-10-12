import style from "./Card.module.css";

const Card = () => {
    return(
        <div className={style.card}>
            <div className={style.cardHeader}>
              <p>Title</p>
              <p>Date</p>
            </div>
            <div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo minus deleniti, voluptas quia saepe in id? Rerum quos deleniti unde molestiae amet perspiciatis, rem cupiditate facere! Omnis cumque harum corrupti.</p>
            </div>
        </div>
    )
}

export default Card;