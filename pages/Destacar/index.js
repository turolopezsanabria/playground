import React from 'react'
import NavBar from '../../components/navbar-round3.js'
import Head from 'next/head'

export default function index() {
  return (
    <>
      <div className="App_1">
        <div className="main_992">
          <Head>
            <title>Milanuncios - Home</title>
          </Head>
          <NavBar />
          <div className="MA_current_Desktop fade">
            <img src="img/2020-11-MA-destacar.png" />
            <img src="img/2020-11-MA-footer.png" />
          </div>
        </div>
      </div>
    </>
  )
}
