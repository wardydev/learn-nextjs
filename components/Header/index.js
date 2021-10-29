import styles from './Header.module.css'
import Link from 'next/link'

export default function Header() {
    return (
        <header>
            <div className={styles.header}>
                <div className={styles.logo}>
                    <h4>myLogo</h4>
                </div>
                <ul className={styles.menus}>
                    <li>
                        <Link href="/"><a className={styles.link}>Home</a></Link>
                    </li>
                    <li>
                        <Link href="/blog"><a className={styles.link}>Blog</a></Link>
                    </li>
                    <li>
                        <Link href="/user"><a className={styles.link}>User</a></Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}
