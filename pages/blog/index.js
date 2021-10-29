import Layout from '../../components/Layout'
import styles from './Blog.module.css'

export default function Blog() {
    return (
        <Layout title="blog page">
            <h1 className={styles.blog}>Blog</h1>
        </Layout>
    )
}
