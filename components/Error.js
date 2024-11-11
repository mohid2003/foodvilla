import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { useRouteError } from 'react-router-dom'


function Error() {
  const  err = useRouteError();
  console.log(err)
  return (

    <div className='ErrorPage'>
      <Header />
        <h1>{err.status + " " + err.statusText}</h1>
        <img src='https://www.cloudns.net/blog/wp-content/uploads/2023/10/Error-404-Page-Not-Found.png' />
        <Footer />
    </div>
  )
}

export default Error