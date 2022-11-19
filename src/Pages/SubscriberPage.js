import { useState, useEffect} from 'react'
import './SubscriberPage.css'
import Skropaywhite from '../Assets/Skropaywhite.png'
import skropayPlay from '../Assets/skropayPlay.png'
import bgImg from '../Assets/earlyaccessBg.png'
import innerBG from '../Assets/innerBG.png' 
import axios from 'axios'
import {toast, ToastContainer, } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
// import axiosAPI from '../axios'

// skropayPlay 

const SubscriberPage = () => {
    const [email, setEmail] = useState('')  
    const [subs , setSubs]  =useState(10)  
    const [ isloading, setIsLoading] = useState(false)

    // const url = 'http://localhost:3001';
    const url = "https://sklaunch-node.herokuapp.com/";
 

//funcion to get data -- num of sbsccriber
    const getApiData=async(url)=>{
        try{
            // const res = await axios.get('http://localhost:3001/registter')
            const res = await axios.get(`${url}/registter`)
            // const res = await axiosAPI.get('/registter');

        setSubs(res.data.num);
        console.log(' i am getting data');
        }catch(eror){
            console.log(eror);
                setSubs(eror.request.status)
        } 
        setIsLoading(true);
    } 
    
    //use effect
    useEffect(() => { 
        getApiData(url);  
        }, [ ])  

 
const handleSubmit=(e)=>{
    e.preventDefault();  
}

const register =async ()=>{ 
    console.log();
    console.log(email); 
    if(email){
        try{ 
            // const res = await axios.post('http://localhost:3001/register', {email});
            const res = await axios.post(`${url}/register`, {email});
            console.log(res);
            if(res.status===201){
                toast.success(res.data.message,{
                    position:'top-left',
                    autoClose:5000,
                    pauseOnHover:true,
                    draggable:true,
                    theme:"dark",
            })}else{
                toast.success(res.data.message,{
                    position:'top-left',
                    autoClose:5000,
                    pauseOnHover:true,
                    draggable:true,
                    theme:"dark",
            })
            }
        
        }catch(e){
            console.log(e);
            toast.error(e.message,{
                position:'top-left',
                autoClose:5000,
                pauseOnHover:true,
                draggable:true,
                theme:"dark",
        })
        }
        
    }
    else{
        toast.error("email field can't be empty",{
                            position:'top-left',
                            autoClose:5000,
                            pauseOnHover:true,
                            draggable:true,
                            theme:"dark",
                    });
    }
  setEmail('')
}


    return ( <>
     { isloading && <section
        className='outer-bg'
        style={{
        backgroundImage: `url(${bgImg})`
    } }>
    <div className='inner-bg' style={{ backgroundImage: `url(${innerBG})` }}>
        <div className='launch-main' >

            <img  className='skropayLogo' src={Skropaywhite} alt='Skropaywhitelogo'/>
          
          
<div className='launch-head'> 
                <p >
                    <span>Skropay </span>
                    is a digital escrow platform that completely protects you from being
                    <span> scammed</span>
                </p>
            </div>  
                     <form className='form-div' onSubmit={(event)=>handleSubmit(event)} > 
                              <input
                                type="email"
                                name="email"
                                placeholder='Enter Your Email'
                                className='in-name'
                                value={email}
                                onChange={(e)=>setEmail(e.target.value)}
                                autoComplete="off"
                              />

                            <button type="submit"   className='in-btn'
                            onClick={register}
                            >Get Early Access</button>
                             
                           </form>  
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
  <p>Be in Top <strong>10,000</strong> to get early access : <strong style={{color:'#1BE6D6'}}  >{subs}</strong> <strong >Subscribed</strong></p>
</div>
</div>
</div>
    </section> }
    <ToastContainer/>
    </> )
}

export default SubscriberPage