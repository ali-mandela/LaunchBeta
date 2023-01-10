import {useState, useEffect, useContext} from 'react'
import './SubscriberPage.css'
import Skropaywhite from '../Assets/SkroPayW.svg' 
import bgImg from '../Assets/earlyaccessBg.png'
import innerBG from '../Assets/innerBG.png'
import axios from 'axios'
import {toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {useNavigate, useParams} from 'react-router-dom' 
import {responseData} from '../Context/dataContext'
import swal from 'sweetalert';   


const SubscriberPage = () => { 
    const resultz = useParams();  

    const {setResDataEmail, setResDataRef} = useContext(responseData);
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [subs, setSubs] = useState(10);
    const [cityName, setcityName] = useState('');
    const [isloading, setIsLoading] = useState(false); 
    

 
 
    
    // Geolocation API
    if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(async (position) => {
                let {latitude, longitude} = position.coords; 
                var apikey = 'c11192a0b85747199adb22415b9baced'
                const res =await axios.get(`https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&apiKey=${apikey}`)
                 setcityName(res.data.features[0].properties.county)
              });
    } else{
        console.log("you denied the loaction");
    }  
  const url = 'https://test.bytegenixtech.com';

 
    const getApiData = async(url) => {
        try {
            const res = await axios.get(`${url}/count`) 
            setSubs(res.data.subscriber);
        } catch (eror) {
            setSubs(eror.request.status)
        }
        setIsLoading(true);
    } 
    //use effect
    useEffect(() => {
        getApiData(url);
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
    } 
    const validateEmail = (email) => {
       
    const regex =/^([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)*|"([]!#-[^-~ \t]|(\\[\t -~]))+")@((?:yahoo|gmail|outlook|protonmail|titan|zoho|aol|icloud|me|mac|gmx|trustifi|yandex|hubspot|mail|tutanota)+(\.[-!#-'*+/-9=?A-Z^-~]+)*|\[[\t -Z^-~]*])/i
 
        if (regex.test(email)) {   
          return true;
        } else { 
          return false;

        }
      };
 
// function to register the user 
const register = async() => {

        if (email ) {

          if(validateEmail(email)){
            try { 
                var response;
                if(resultz.id){
                    response=await axios.post(`${url}/register/${resultz.id}`, {email, cityName})  
                }else{ 
                    response = await axios.post(`${url}/register`, {email, cityName})  
                } 
            var resEmail ;
            var resRef_id ;   
            if (response.data.status === "success"){

                if(response.data.msg==='invalid referral id.'){ 
                swal(`Oops`, `Invalid referral id: ${resultz.id}.`, {button: "Okay!"});
                navigate('/')

                }else if(response.data.msg==="user already exist"){
                    resRef_id=response.data.res[0].ref_id;
                setResDataRef(resRef_id) ;
                swal("thank you!", `You Have already registerd using this email.`, "success", {button: "Okay!"});
                navigate(`/alreadyregistered/${resRef_id}`)

                }else if(response.data.msg==="registeration done"){
                    resEmail = response.data.results[0].email;
                    resRef_id = response.data.results[0].ref_id;
                setResDataEmail(resEmail)
                setResDataRef(resRef_id)
                swal("Thank you!", "You have succefully registered .", "success", {button: "Okay!"});
                                navigate(`/thankyou/${resRef_id}`)
                }
                   
            } 
            else 
                swal("Sorry", "we are having error in registreation", "error", {button: "Okay!"});
            }

        catch (e) {
            swal("Sorry", "we are having error in registreation", "error", {button: "Okay!"});

        }
          }else{
            toast.error("Please enter a valid email!", {
                position: 'top-left',
                autoClose: 5000,
                pauseOnHover: true,
                draggable: true,
                theme: "dark"
            });
          }

        } else {
            toast.error("email field can't be empty", {
                position: 'top-left',
                autoClose: 5000,
                pauseOnHover: true,
                draggable: true,
                theme: "dark"
            });
        }
        setEmail('')
    }

    return (<> {
        isloading && <section
                className='outer-bg'
                style={{
                backgroundImage: `url(${bgImg})`
            }}>
                <div
                    className='inner-bg'
                    style={{
                    backgroundImage: `url(${innerBG})`
                }}>
                    <div className='launch-main'>

                        <img
                            contenteditable="false"
                            className='skropayLogo'
                            src={Skropaywhite}
                            alt='Skropaywhitelogo'/>

                        <div className='launch-head'>
                            <p>
                                <strong className='bold'>Skropay</strong>  is a digital escrow platform that completely protects you from being
                                <strong className='bold'> Scammed</strong>
                            </p>
                        </div>
                        <form className='form-div' onSubmit={(event) => handleSubmit(event)}>
                            <input
                                type="email"
                                name="email"
                                placeholder='Enter email address'
                                className='in-name'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}  
                                autoComplete="off"/>
                                

                            <button type="submit" className='in-btn' onClick={register}>Get Early Access</button>

                        </form> 
                        <div className='watch'>
                            <p>

                                Don't know what escrow is?</p>
                                <p>
                                <a href='https://medium.com/@skropay/protect-your-money-with-skropays-free-escrow-service-7e6700ef9ca8'>
                                <span
                                    style={{
                                    color: '#1BE6D6',display:"inline"
                                }}>&nbsp;Google it duh!</span></a>
                                
                            </p>
                            {/* <p>or */}
                            {/* </p> */}
                            {/* <p>
                                <span>Watch the video&ensp;
                                </span>
                                <img src={skropayPlay} alt='play button'/>
                            </p> */}
                        </div>
                        <div className='launchfooter'>
                            <p>Be in Top
                                <strong> 1000 </strong>
                                to get early access :
                                <strong
                                    style={{
                                    color: '#1BE6D6'
                                }}> {subs} </strong>
                                <strong >Subscribed</strong>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
    } <ToastContainer/> </>)};

export default SubscriberPage;