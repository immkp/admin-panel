import React, { useState } from "react"
import styles from "./Header.module.css"
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"

import Image from "next/image"
// import styles from "./page.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGaugeHigh,
  faCartShopping,
  faUser,
} from "@fortawesome/free-solid-svg-icons"

const Header = () => {
  const [show, setShow] = useState(false)
  //assigning location variable
  const location = useLocation()

  //destructuring pathname from location
  const { pathname } = location

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/")
  // console.log(splitLocation);
  return (
    <>
      <header className={styles.header}>
        <h1>
          <Link to='/'>PRODUCT ADMIN</Link>
        </h1>
        <nav>
          <ul>
            <li
              className={
                splitLocation[1] === "dashboard" ? `${styles.active}` : ""
              }
            >
              <Link
                to={
                  JSON.parse(localStorage.getItem("loginStatus")) === true
                    ? "/dashboard"
                    : "/"
                }
              >
                {/* <FontAwesomeIcon icon='fa-regular fa-gauge-high' /> */}
                <FontAwesomeIcon
                  icon={faGaugeHigh}
                  className='fa-regular fa-gauge-high'
                  style={{ fontSize: 40 }}
                />
                {/* <i className='fa fa-tachometer'></i> */}
                <br />
                <span>Dashboard</span>
              </Link>
            </li>
            <li
              className={
                splitLocation[1] === "products" ? `${styles.active}` : ""
              }
            >
              <Link
                to={
                  JSON.parse(localStorage.getItem("loginStatus")) === true
                    ? "/products"
                    : "/"
                }
              >
                <FontAwesomeIcon icon='fa-solid fa-cart-shopping' />
                <FontAwesomeIcon
                  icon={faCartShopping}
                  className='fa-solid fa-cart-shopping'
                  style={{ fontSize: 40 }}
                />
                <br />
                <span>Products</span>
              </Link>
            </li>
            <li
              className={
                splitLocation[1] === "account" ? `${styles.active}` : ""
              }
            >
              <Link
                to={
                  JSON.parse(localStorage.getItem("loginStatus")) === true
                    ? "/account"
                    : "/"
                }
              >
                {/* <i className='fa fa-user'></i>
                 */}
                <FontAwesomeIcon
                  icon={faUser}
                  className='fa fa-user'
                  style={{ fontSize: 40 }}
                />
                <br />
                <span>Account</span>
              </Link>
            </li>
          </ul>
        </nav>
        <div className={styles.logout}>
          {JSON.parse(localStorage.getItem("loginStatus")) === true && (
            <Link
              to='/'
              onClick={() => localStorage.setItem("loginStatus", false)}
            >
              Admin, <b>Logout</b>
            </Link>
          )}
        </div>
      </header>
      <div className={styles.headermob}>
        <header>
          <h1>
            <Link to='/'>PRODUCT ADMIN</Link>
          </h1>
          <i onClick={() => setShow(!show)} className='fa fa-bars'></i>
        </header>
        {show && (
          <>
            <nav>
              <ul>
                <li
                  className={
                    splitLocation[1] === "dashboard" ? `${styles.active}` : ""
                  }
                >
                  <Link
                    to={
                      JSON.parse(localStorage.getItem("loginStatus")) === true
                        ? "/dashboard"
                        : "/"
                    }
                  >
                    <br />
                    <span>Dashboard</span>
                  </Link>
                </li>
                <li
                  className={
                    splitLocation[1] === "products" ? `${styles.active}` : ""
                  }
                >
                  <Link
                    to={
                      JSON.parse(localStorage.getItem("loginStatus")) === true
                        ? "/products"
                        : "/"
                    }
                  >
                    <br />
                    <span>Products</span>
                  </Link>
                </li>
                <li
                  className={
                    splitLocation[1] === "account" ? `${styles.active}` : ""
                  }
                >
                  <Link
                    to={
                      JSON.parse(localStorage.getItem("loginStatus")) === true
                        ? "/account"
                        : "/"
                    }
                  >
                    <br />
                    <span>Account</span>
                  </Link>
                </li>
              </ul>
            </nav>
            <div className={styles.logout}>
              <Link to='/'>
                Admin, <b>Logout</b>
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default Header
