import React from 'react'
import Layout from '../components/Layout'
import styles from './Home.module.css'

export default function app() {
    return (
        <Layout>
            <div className={styles.home}>
                This my first blog
            </div>
        </Layout>
    )
}
