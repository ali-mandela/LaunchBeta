import React, {useContext, useEffect, useState} from 'react'
import './ThankYou.css'
import {Link, useParams} from 'react-router-dom'
import innerBG from '../Assets/innerBG.png'
import {responseData} from '../Context/dataContext'
import axios from 'axios'

const AlreadyRegistered = () => {
    const idd = useParams(); 
    const {resDataEmail, resDataRef} = useContext(responseData); 
    const [subs,
        setSubs] = useState(0)
    const [email,
        setEmail] = useState("") 
        const [ copied , isCopied] = useState(false) 
        const clickCopy=()=>{
            isCopied(true)
            navigator.clipboard.writeText(`https://skropay.com/#/launch/${idd.id} `)
            setTimeout(()=>{
                isCopied(false)
            }, 4000);
        }
     const url = 'https://test.bytegenixtech.com';

    const getApiData = async(url) => {

        try {
            const res = await axios.get(`${url}/rank/${idd.id}`)
            setSubs(res.data.rank)
            setEmail(res.data.ress[0].email) 
        } catch (eror) { 
        }
    } 
    useEffect(() => {
        getApiData(url);
    })
    var link = `https://skropay.com/%23/launch/${idd.id}`
    return ( <> <div className='thankyouWrapper'>
        <div className='thankyouDiv>'>
            <div className='thankyouTop'>
                <h1>Already Registered!</h1>
                <br/>
                <p>We have added your email address to the signup queue.</p>
            </div>
            <div
                className='thankyouCenter'
                style={{
                backgroundImage: `url(${innerBG})`
            }}>
                <h2> {subs}   People ahead of you</h2>
                <p>The reservation is held for
                    <span
                        style={{
                        color: "orangered"
                    }}> {email}</span>. Is this
                    <Link to='/'> not you?</Link>
                </p>
            </div>
            <div className='thankyouBottom'>
                <h1>Intrested in Priority access?</h1>
                <p>Get early access by referring your friends. The more friends that join, the
                    sooner you'll get access.</p>
            </div>
            <div className='thankyouFooter'>
                <div className='thankyou-btn'>
                    <a
                        href={`whatsapp://send?text=Are you worried about being scammed when making online transactions? An escrow service like Skropay can help protect you and your hard-earned money safe from scammers. Skropay allows you to hold payment in a secured wallet until both parties have completed their obligations. This ensures that you only release payment once you have received the goods or services that you paid for. 
                        %0a%0aWe are excited to announce the upcoming launch of Skropay and invite you to join our early access list.%0a%0aSimply visit%0a%0a ${link} %0a%0aand enter your email to stay updated on our progress and be among the first to try out Skropay. Don't miss out on the opportunity to experience the peace of mind that Skropay offers. We look forward to having you on board!`}
                        target="_blank">
                        <i class="fa-brands fa-whatsapp"></i>
                        <p
                            style={{
                            color: "white"
                        }}>whatsapp</p>
                    </a>
                    <a
                        href={`https://twitter.com/intent/tweet?&url=Excited to announce the upcoming launch of Skropay and invite you to join our early access list. %0aSimply visit ${link} and enter your email to stay updated on our progress and be among the first to try out Skropay. We look forward to having you on board!`}
                        target="_blank">
                        <i class="fa-brands fa-square-twitter"></i>
                        <p
                            style={{
                            color: "white"
                        }}>Tweet</p>
                    </a>
                    <a   href={`https://www.linkedin.com/sharing/share-offsite/?url=${link}`}
                        target="_blank">
                        <i class="fa-brands fa-linkedin"></i>
                        <p
                            style={{
                            color: "white"
                        }}>LinkedIn</p>
                    </a>
                    <a
                        href={`https://www.facebook.com/sharer/sharer.php?u=${link}`}
                        target="_blank">
                        <i class="fa-brands fa-1.5x fa-square-facebook"></i>
                        <p
                            style={{
                            color: "white"
                        }}>Facebook</p>
                    </a>

               </div>
                <h1>Or share this unique link :</h1>
                <p> 
                    <button className='copyClip'   onClick={clickCopy} >        https://skropay.com/#/launch/${idd.id}      </button>

                    <button className='buttonSpan' onClick={clickCopy}>
                    {copied ? `copied` : `copy` } </button>
 
                </p>
            </div>
        </div>
    </div>
</>
) } 

export default AlreadyRegistered 
 