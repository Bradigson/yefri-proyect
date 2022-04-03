import { useState } from "react";
import Img from '../assests/imgs/imgForm.svg';
import '../assests/styles/LoginForm.scss';
import {Link, useHistory} from 'react-router-dom';
import { handleUserNotFound, handleEmaiInput,
        handlePasswordInput, handleIcorrctPassword, handleSuccessAccount } from "./AlertLogIn";
import app from "../firebase/Firebase";
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
const auth = getAuth(app);

const LogInForm = (props)=>{

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const handleEamil = e=>{
        setEmail(e.target.value);
    
    }

    const handlePassword = e=>{
        setPassword(e.target.value);
    }

    const handleSubmit = async(e)=>{
        e.preventDefault();
        const Email = email;
        const Password = password;

        if(Email == ''){
            handleEmaiInput();
        }else if(Password == ''){
            handlePasswordInput();
        }else{
            try{
                await signInWithEmailAndPassword(auth, Email, Password);
                setEmail('');
                setPassword('');
                handleSuccessAccount();
                history.push('/page')
            }
            catch(err){
                if(err.code == 'auth/user-not-found'){
                    handleUserNotFound();
                }else if(err.code == 'auth/wrong-password'){
                    handleIcorrctPassword();
                }
                console.log(err);
            }
        }
        
    }
    return(
        <div className=' login-container'>
            <div className='img'>
                <img src={Img} alt='img-login'/>
            </div>
            
            <div className='form-container'>
                <form onSubmit={handleSubmit}>
                    <div className="text-center">
                        <h1>Log In</h1>
                    </div>
                    
                    <div className="mt-3 input-group">
                        <span className="input-group-text span" id="basic-addon1">
                            <i className='bx bxs-envelope'></i>
                        </span>
                        <input
                            type='email'
                            placeholder='Your Email'
                            className = 'form-control'
                            value={email}
                            onChange={handleEamil}
                        />
                    </div>

                    <div className="mt-3 mb-3 input-group">
                        <span className="input-group-text span" id="basic-addon1">
                            <i className='bx bxs-lock-alt' ></i>
                        </span>
                        <input
                            type='password'
                            placeholder='Your Password'
                            className="form-control"
                            value={password}
                            onChange={handlePassword}
                        />
                    </div>
                    <div className=" text-center">
                        <button className="btn btn-success">Log In</button>
                    </div>
                </form>
                <div className="mt-2 text-center text-muted">
                    <span>Don't you have account?</span>{' '}
                    <Link to='/signin'>Sign up</Link>
                </div>
            </div>
        </div>
    )
}


export default LogInForm;