import React from 'react'
import Layout from '../components/Layout'
import styles from './Home.module.css'

export default function app() {
    return (
        <Layout title="home page">
            <h1 className={styles.home}>Home</h1>
        </Layout>
    )
}
