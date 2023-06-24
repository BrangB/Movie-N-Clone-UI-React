import './register.scss'
import React, { useRef, useState } from 'react'
import logo from '../../img/Netflix-logo.png'

const Register = () => {

    const [email, setEmail] = useState('');
    const [password , setPassword] = useState('');
    const emailRef = useRef();
    const passwordRef = useRef();

    const handlerStart = () => {
        setEmail(emailRef.current.value)
    }
    const handleFinish = () => {
        setPassword(passwordRef.current.value)
    }
  return (
    <div className='register'>
        <div className="top">
            <div className="wrapper">
                <img src={logo} alt="" className='logo' />
                <button className='loginButton'>Sign In</button>
            </div>
        </div>
        <div className="container">
            <h1>Unlimited movies, TV shows, and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <p>
            Ready to watch? Enter your email to create or restart your membership.
            </p>
            {
                !email ? (
                    <div className="input">
                        <input type="email" placeholder="email address"  ref={emailRef}/>
                        <button className="registerButton" onClick={handlerStart}>
                        Get Started
                        </button>
                    </div>
                ): (
                    <div className="input">
                        <input type="password" placeholder="password" ref={passwordRef} />
                        <button className="registerButton" onClick={handleFinish}>
                        Start
                        </button>
                    </div>
                )
            }
        </div>
    </div>
  )
}

export default Register