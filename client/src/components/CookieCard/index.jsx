import { useEffect } from 'react'
import './CookieCard.css'

export default function CookieCard() {

  useEffect(() => {
    if (localStorage.getItem('localstorage') === 'true') {
      const CookieDiv = document.getElementById('Cookie')
      CookieDiv.classList.add('Accepted')
    }
  })

  const acceptCookies = () => {
    const CookieDiv = document.getElementById('Cookie')
    CookieDiv.classList.add('Accepted')
    localStorage.setItem('localstorage', true)
    localStorage.setItem('cartList', "[]")
  }

  return (
    <div id='Cookie' className='CookieBG'>
      <div className="CookieDiv shadow-lg">
        <h3>Cookies</h3>
        <p>We use cookies to improve our services</p>
        <button className='btn btn-outline-success me-2' onClick={acceptCookies}>Accept</button>
      </div>
    </div>
  )
}