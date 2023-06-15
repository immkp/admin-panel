"use client"

import { BrowserRouter } from "react-router-dom"
import Header from '../components/header/Header'
import Routes from '../components/routes/Routes'
import Footer from '../components/footer/Footer'


import Image from "next/image"
import styles from "./page.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from "@fortawesome/free-solid-svg-icons"

export default function Home() {
  return (
    <BrowserRouter>
      {/* <main className={styles.main}>
        <FontAwesomeIcon
          icon={faCheck}
          className='fas fa-check'
          style={{ color: "red", fontSize: 64 }}
        />
        Check
      </main> */}
      <div>
        <Header />
        <div className='padding-class'>
          <Routes />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
