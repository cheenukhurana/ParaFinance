import Head from 'next/head'
import styles from './layout.module.css'

export const siteTitle = 'Next.js Sample Website'
export default function Layout({children}){
    return (
        <div className='styles.container'>
            <Head>
                <link rel="icon" href="/favicon.ico"></link>
                <meta
                    name="description"
                    content="Paranormal Yield Optimiser"
                />
                <meta name="title" content={siteTitle} />
            </Head>
        </div>
    )
}