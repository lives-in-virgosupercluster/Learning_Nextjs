import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <div className={styles.main}>
      <Head>
        <title>Events App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <nav>
          <img/>
          <Link href='/'>Home</Link>
          <Link href='/events/'>Events</Link>
          <Link href='/about-us'>About Us</Link>
        </nav>
      </header>
      <main className={`${styles.main} ${inter.className}`}>
        <Link href=''>
          <h2>Events in London</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque explicabo nesciunt blanditiis, laborum minus officiis alias ipsum veritatis aliquam a fugit harum, assumenda magni voluptate id odio nisi pariatur enim perferendis aliquid rem maxime vel? Sapiente repellat at, voluptate excepturi beatae recusandae quasi modi laboriosam? Modi aliquam hic autem veniam!
          </p>
        </Link>
        <Link href=''>
          <h2>Events in Barcelona</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque explicabo nesciunt blanditiis, laborum minus officiis alias ipsum veritatis aliquam a fugit harum, assumenda magni voluptate id odio nisi pariatur enim perferendis aliquid rem maxime vel? Sapiente repellat at, voluptate excepturi beatae recusandae quasi modi laboriosam? Modi aliquam hic autem veniam!
          </p>
        </Link>
        <Link href=''>
          <h2>Events in SanFrancisco</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque explicabo nesciunt blanditiis, laborum minus officiis alias ipsum veritatis aliquam a fugit harum, assumenda magni voluptate id odio nisi pariatur enim perferendis aliquid rem maxime vel? Sapiente repellat at, voluptate excepturi beatae recusandae quasi modi laboriosam? Modi aliquam hic autem veniam!
          </p>
        </Link>
       
      </main>
      <footer className={styles.footer}>
        <p>2024 Time to Code-A project of Nextjs</p>
      </footer>
      </div>
    </>
  )
}
