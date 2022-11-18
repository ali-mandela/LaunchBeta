import { useState, useEffect } from 'react'
import axios from 'axios';
import './SubscriberPage.css'
import Skropaywhite from '../Assets/Skropaywhite.png'
import skropayPlay from '../Assets/skropayPlay.png'
import bgImg from '../Assets/earlyaccessBg.png'
import innerBG from '../Assets/innerBG.png'
import axiosapi from '../axios'
import {toast, ToastContainer, } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// skropayPlay 

const SubscriberPage = () => {
    const [email, setEmail] = useState(''); 
    const [subs , setSubs]  =useState() 
    
    //use effect
    useEffect(() => {
        axiosapi.get('/registter').then(res=>{
            // axios.get('http://localhost:3001/registter').then(res=>{
            console.log(res);
            setSubs(res.data.num)
        }).catch(e=>{
            setSubs(1000)
        })
        }, [ ])
    

 // handle validaition
const handleValidiation = ()=>{
    if(email===''){
        toast.error("email field can't be empty",{
                position:'top-left',
                autoClose:5000,
                pauseOnHover:true,
                draggable:true,
                theme:"dark",
        });
        return false;
    } 
return true;
}

    const handleSubmit = async (e) => 
    {   
        e.preventDefault(); 

        if(handleValidiation()){ 
            const { data } = email;
            const {res } = await axios.post('http://localhost:3001/register', {data})
            // const {res} = await axiosapi.post('/register', {  email }); 
        if(res.status===false){
            toast.error(res.error,{
                position:'top-left',
                autoClose:5000,
                pauseOnHover:true,
                draggable:true,
                theme:"dark",
        });
        }
        if(res.status===true){
            setSubs(res.num)
            toast.error("succesfully submitted",{
                position:'top-left',
                autoClose:5000,
                pauseOnHover:true,
                draggable:true,
                theme:"dark",
        });
        }
        }  
    setEmail(' ');
}

//use effect



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
            <div>
                        <form  className='form-div' action=''  onSubmit={(e)=>{handleSubmit(e)}}  >
                              <input
                                type="email"
                                name="email"
                                placeholder='Enter Your Email'
                                className='in-name'
                                onChange={(e)=>setEmail(e.target.value)}
                                autoComplete="off"
                              />

                            <button type="submit"  className='in-btn'>Get Early Access</button>
                             
                            </form> 
                            </div>
              <div className='watch'>
<p>

Don't know what escrow is ?  <span style={{color:'#1BE6D6'}}>  Google it duh!</span>
</p>
<p>or </p>
<p>
<span>Watch the video&ensp;   </span>
 <img src={skropayPlay} alt='play button'/>
</p>
</div>  
  <div className='launchfooter'>
  <p>Be in Top <strong>10,000</strong> to get early access : <strong style={{color:'#1BE6D6'}}  >{`99999${subs}`}</strong> <strong >Subscribed</strong></p>
</div>
</div>

    </section> 
    <ToastContainer/>
    </> )
}

export default SubscriberPage