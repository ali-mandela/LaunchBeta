import React from 'react'
import './ThankYou.css'
import { Link } from 'react-router-dom'
import innerBG from '../Assets/innerBG.png'
// import { EEmail } from './SubscriberPage';

const ThankYouPage = () => {  
  return (
    <>  
    <div className='thankyouWrapper'>
    <div className='thankyouDiv>'>
      <div className='thankyouTop'>
        <h1>Thank You !</h1>
        <p>We have added your email address to the signup queue.</p>
      </div>
      <div className='thankyouCenter'  style={{
        backgroundImage: `url(${innerBG})`
    } }>
        <h2>777777 People ahead of you</h2>
        <p>The reservation is held for skroay@gmail.com. Is this <Link to='/'>not you ?</Link></p>
      </div>
      <div className='thankyouBottom'>
        <h1>Intersted in Priority access ?</h1>
        <h3>Get early accessby referring your friends. The more friends that join, the sooner you'll get access.</h3>
      </div>
      <div className='thankyouFooter'>
        <div className='thankyou-btn'>
        <button><i class="fa-brands fa-square-twitter"></i>Tweet</button>
        <button><i class="fa-brands fa-1.5x fa-square-facebook"></i>Share</button>
        <button><i class="fa-solid fa-envelope"></i>Email</button>
        <button><i class="fa-brands fa-linkedin"></i>Share</button>

        </div>
        <h1>Or share this unique link :</h1>
        <p>https://www.skropay.com/00000</p>
      </div>
    </div>
    </div>
    </>
  )
}

export default ThankYouPage

/* <EEmail.Consumer> { (EEmail)=>{
      return  <div>ThankYouPage {EEmail}</div>
    }}
    </EEmail.Consumer> */