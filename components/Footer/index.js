import styles from './Footer.module.css'

export default function Footer(){
    return(
        <footer className={styles.Footer}>
            <ul>
                <p>Meta
                About
                Blog 
                Jobs 
                Help 
                API
                Privacy 
                Terms 
                Locations 
                <span className={styles.instaliteLine}> Instagram Lite </span>
                Threads 
                <span className={styles.contactLine}> Contact Uploading & Non-Users </span>
                <span className={styles.metaLine}> Meta Verified</span></p>
                <p>English <span className={styles.copyrightLine}>© 2024 Instagram from Meta</span></p>
            </ul>
        </footer>
    )
}