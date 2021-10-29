import Layout from "../../components/Layout"
import styles from './User.module.css'

export default function User() {
    return (
        <Layout title="user page">
            <h1 className={styles.user}>User</h1>
        </Layout>
    )
}
