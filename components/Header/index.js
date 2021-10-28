import styles from './Header.module.css'

export default function Header() {
    return (
        <header>
            <div className={styles.header}>
                <div className={styles.logo}>
                    <h4>myLogo</h4>
                </div>
                <ul className={styles.menus}>
                    <li><a href="">Home</a></li>
                    <li><a href="">Blog</a></li>
                    <li><a href="">User</a></li>
                </ul>
            </div>
        </header>
    )
}
