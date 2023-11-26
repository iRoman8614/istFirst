import styles from './Footer.module.scss'

const Footer = () => {
    return(
        <div className={styles.root}>
            <div>
                Copyright &copy; Explorer  - Images used for demonstration purpose only (<a>Licenses</a>)
            </div>
            <div>
                Copyright &copy; <a>Studio Corvus</a> Powered by <a>Webflow</a>
            </div>
        </div>
    )
}

export default Footer;