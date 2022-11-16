import { useState } from 'react'
import './SubscriberPage.css'
import Skropaywhite from '../Assets/Skropaywhite.png'
import skropayPlay from '../Assets/skropayPlay.png'
import bgImg from '../Assets/earlyaccessBg.png'
import innerBG from '../Assets/innerBG.png'

// skropayPlay 

const SubscriberPage = () => {
    const [inputs, setInputs] = useState({});
    let vall = 1000;
 
    

    const handleChange = (event) => { const name = event.target.name; const value
    = event.target.value; setInputs(values => ({...values, [name]: value})) }

    const handleSubmit = (event) => {   event.preventDefault();
    console.log(inputs); }

    return ( <> <section
        className='sectionBg'
        style={{
        backgroundImage: `url(${bgImg})`
    }}>
        <div className='launch-main' style={{ backgroundImage: `url(${innerBG})` }}>

            <img  className='skropayLogo' src={Skropaywhite} alt='Skropaywhitelogo'/>
            <div className='launch-head'>
                <p >
                    <span>Skropay </span>
                    is a digital escrow platform that completely protects you from being
                    <span> scammed</span>
                </p>
            </div> 
                        <form onSubmit={handleSubmit}  >
                              <input
                                type="email"
                                name="email"
                                placeholder='Enter Your Email'
                                className='in-name'
                                onChange={handleChange}
                                autoComplete="off"
                              />
                              <button className='in-btn' type="submit"  >Get Early Access</button>
                            </form> 
              <div className='watch'>
<p>
Don't know what escrow is ?  <span style={{color:'#1BE6D6'}}>  Google it duh!</span>
</p>
<p>or</p>
<p>
<span>Watch the video&ensp;   </span>
 <img src={skropayPlay} alt='play button'/>
</p>
</div>  
  <div className='launchfooter'>
  <p>Be in Top <strong>10,000</strong> to get early access : <strong style={{color:'#1BE6D6'}}  >{vall}</strong> <strong >Subscribed</strong></p>
</div>
</div>
    </section> </> )
}

export default SubscriberPage