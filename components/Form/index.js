import styles from './Form.module.css'

export default function form() {
    return(
            <div className={styles.formOuterContainer}>
                <div className={styles.formContainer}>
                    <form>
                        <fieldset className={styles.fieldSet}>
                            <input
                                id="userName"
                                className={styles.userNameInput}
                                type="text"
                                placeholder="Phone number, username, or email"
                            />
                            <input
                                id="password"
                                className={styles.passwordInput}
                                type="text"
                                placeholder="Password"
                                />                       
                             </fieldset>
                    </form>
                </div>
            </div>
    )
}