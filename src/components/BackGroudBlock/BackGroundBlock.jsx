import styles from './BackGroundBlock.module.scss'
import logo from '../../images/logo.svg'
import Post from "../Post/Post";
import mock from '../../mock/bigPosts'
import {useState} from "react";

const BackGroundBlock = () => {
    const[limit, setLimit]=useState(3);
    const[page, setPage]=useState(1);
    const max = Math.ceil(mock.length / limit);
    const numbers = [];

    for(let i = 1; i <= max; i++) {
        numbers.push(i);
    }
    console.log('numbers', numbers);

    const handleClickNext = () => {
        console.log('max', max)
        if(page < max) {
            setPage( page + 1)
            console.log('page', page)
        }
    }

    const handleClickPrev = () => {
        if(page > 1) {
            setPage(page - 1)
        }
    }

    const handleClick = (num) => {
        setPage(num);
    }

    return(
        <div className={styles.root}>
            <div className={styles.header}>
                <img className={styles.logo} src={logo} />
                <div className={styles.buttonSet}>
                    <a>Home</a>
                    <a>Blog</a>
                    <a>Categories</a>
                    <a>Pick category</a>
                    <a>About us</a>
                    <a>Contact us</a>
                </div>
            </div>
            <div className={styles.cardSet}>
                {mock
                    .slice((page-1)*limit, page*limit)
                    .map((item) => {
                    return(
                        <Post variant='big' data={item} key={item.id} />
                    )
                })}
            </div>
            <button onClick={handleClickPrev}>Назад</button>
            <>
                {numbers.map((item, ind) => {
                    return(
                        <button onClick={()=>{handleClick(item)}} key={ind}>{item}</button>
                    )
                })}
            </>
            <button onClick={handleClickNext}>Вперед</button>
        </div>
    )
}

export default BackGroundBlock;