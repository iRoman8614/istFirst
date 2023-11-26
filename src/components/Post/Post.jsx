import styles from './Post.module.scss'
import bg from '../../images/image1.png'
import AuthorInfo from "../AuthorInfo/AuthorInfo";

const PostSmall = ({data}) => {
    return(
        <div className={styles.root}>
            <div className={styles.pictBlock}>
                <img className={styles.pict} src={data?.image}  alt=''/>
                <div className={styles.author}>
                    <AuthorInfo data={data} />
                </div>
            </div>
            <div className={styles.title}>
                {data?.title}
            </div>
        </div>
    )
}
const PostBig = ({data}) => {
    return(
        <div className={styles.bigRoot}>
            <div className={styles.contentBlock}>
                <div className={styles.category}>Travel</div>
                <img className={styles.postImage} src={data?.image} />
                <div className={styles.authorBig}>
                    <AuthorInfo data={data} />
                </div>
                <div className={styles.bigTitle}>{data?.title}</div>
            </div>
            <div className={styles.textBlock}>
                <div className={styles.desc}>{data?.desc}</div>
                <a className={styles.link} href=''>Continue Reading →</a>
            </div>
        </div>
    )
}

const Post = ({variant, data}) => {
    return(
        <>
            {variant === 'big' && <PostBig data={data} />}
            {variant === 'small' && <PostSmall data={data} />}
        </>
    )
}

export default Post;