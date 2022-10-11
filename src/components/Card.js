import {useState} from 'react';
import likeUnliked from '../assets/icons/likeUnliked.svg';
import likeLiked from '../assets/icons/likeLiked.svg';
import styles from './Card.module.css';

export default function Card({title, text, currentLikes}) {
    const [curLikes, setCurLikes] = useState(currentLikes);
    const [liked, setLiked] = useState(false);

    const onLikeClick = () => {
        liked ? setCurLikes(curLikes - 1) : setCurLikes(curLikes + 1);
        setLiked(!liked);
    }

    return (
        <div className={styles.container}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{text}</p>

            <div className={styles.footer}>
                <span className={styles.likesAmt}>{curLikes}</span>
                <button className={styles.likeBtn + (liked ? (' ' + styles.likeBtnLiked) : '')} onClick={onLikeClick}>
                    <img src={liked ? likeLiked : likeUnliked} alt='' />
                </button>
            </div>
        </div>
    )
}