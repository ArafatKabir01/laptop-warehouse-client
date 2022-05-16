
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../Shared/Loading/Loading';

const Signup = () => {
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [ConfirmPassword , setConfiremPassword] = useState('')
    const [error , setError] = useState('')
    const navigate = useNavigate()

    const hendleEmail = event => {
        setEmail(event.target.value);
    }
    const hendlePassword = event => {
        setPassword(event.target.value);
        
    }
    const hendleConfiremPassword = event => {
        setConfiremPassword(event.target.value);
    }
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
       
      ] = useCreateUserWithEmailAndPassword(auth ,{sendEmailVerification : true});
      if(user){
        console.log(user)
        navigate('/')
    }
    const hendleSubmite = event => {
        event.preventDefault()
        if(password !== ConfirmPassword){
            setError('Password not match')
            return;
        }
        if(password.length !== 6) {
            setError('Minimum 6 cherecter')
        }
       
        else{
            setError('')
        };
        createUserWithEmailAndPassword(email, password)
        if(loading){
            return <Loading></Loading>
        }
  
    }

    return (
        <div className='form-container mb-5'>
        <h2 className='form-title text-danger fw-bolder fs-2 mt-4'>Sign Up</h2>
        <form onSubmit={hendleSubmite}>
            <div className='group-input'>
                <span className='level'>Email</span>
                <input onBlur={hendleEmail} className='' type='email' required></input>
            </div>
            <div className='group-input'>
                <span className='level'>Password</span>
                <input onBlur={hendlePassword} className='' type='password' required></input>
            </div>
            <div className='group-input'>
                <span className='level'>Confirm-Password</span>
                <input onBlur={hendleConfiremPassword} className='' type='password' required></input>
            </div>
            <p>{error}</p>
            <input type='submit'  className='submite-button'></input>
        </form>
        <p style={{marginTop:'8px'}}>Already have an account?<Link to='/login'>LogIn</Link></p>
        <div className='or-section'>
            <hr />
            <span>or</span>
            <hr />
        </div>
        <SocialLogin></SocialLogin>
        <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 500" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><defs><linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%"><stop offset="5%" stop-color="#002bdcff"></stop><stop offset="95%" stop-color="#32ded4ff"></stop></linearGradient></defs><path d="M 0,500 C 0,500 0,250 0,250 C 50.886146915545595,228.91160028261845 101.77229383109119,207.82320056523687 148,219 C 194.2277061689088,230.17679943476313 235.7969715911808,273.61879802167095 271,278 C 306.2030284088192,282.38120197832905 335.0398198041857,247.7016073480793 384,244 C 432.9601801958143,240.2983926519207 502.0437491920761,267.5747725860118 545,283 C 587.9562508079239,298.4252274139882 604.7851834275099,301.99930230787345 645,302 C 685.2148165724901,302.00069769212655 748.8155170978841,298.42801818249427 796,306 C 843.1844829021159,313.57198181750573 873.9527481809538,332.28862496214936 919,333 C 964.0472518190462,333.71137503785064 1023.3734901783009,316.4174819689084 1062,312 C 1100.626509821699,307.5825180310916 1118.5532911058422,316.04144716221697 1162,307 C 1205.4467088941578,297.95855283778303 1274.4133453983309,271.4167293822237 1325,259 C 1375.5866546016691,246.58327061777626 1407.7933273008346,248.29163530888815 1440,250 C 1440,250 1440,500 1440,500 Z" stroke="none" stroke-width="0" fill="url(#gradient)" class="transition-all duration-300 ease-in-out delay-150 path-0"></path></svg>
</div>
    );
};

export default Signup;