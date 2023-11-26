import styles from './AuthorInfo.module.scss'

const AuthorInfo = ({data}) => {
    return(
        <div className={styles.root}>
            <div>
                <img src={data?.avatar} alt={''} />
            </div>
            <div className={styles.infoBlock}>
                <div>{data?.date}</div>
                <div>{data?.author}</div>
            </div>
        </div>
    )
}

export default AuthorInfo;