import '../assests/styles/SigninForm.scss';
import ImgSignup from '../assests/imgs/imgSignup.svg'
import { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { handleAlertUser, handleAlertPassword, handleUserSuccess, 
        handleEmailValidation, handleIncorrectPassword, handleEmptyEmail, 
        handleEmptyPassword } from './Alerts';
import app from '../firebase/Firebase';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
const auth = getAuth(app);

const Signin = ()=>{
        

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleEmail = e=>{
        setEmail(e.target.value);
        
    }
    const handlePassword = e=>{
        setPassword(e.target.value);
        
    }
    

    const handleSubmit = async(e)=>{
        e.preventDefault();
        const Email = email;
        const Password = password
        
       
        if(Email ==''){
            handleEmptyEmail()
        }else if( Password == ''){
            handleEmptyPassword()
        }else{
            try{
                await createUserWithEmailAndPassword(auth, Email, Password);
                setEmail('');
                setPassword('');
                handleUserSuccess();
                // history.push('/')
            }
            catch(err){
                if(err.code == 'auth/invalid-email'){
                    console.log(err)
                    handleEmailValidation();
                }else if(err.code == 'auth/email-already-in-use'){
                    handleAlertUser()
                    setEmail('');
                    setPassword('');
                }else if(err.code == 'auth/weak-password'){
                    handleAlertPassword();
                }else if(err.code =='auth/internal-error'){
                    handleIncorrectPassword();
                }  
            }
        }
        
    }
    const handleUserDone = ()=>{
        navigate(-1);
    }
    return(
        <div className='form-contianer'>
            <div className=' img-container'>
                <img src={ImgSignup} alt='img-signup'/>
            </div>

           <div className='form-container-signup'>
               
                <form className='form-group' onSubmit={handleSubmit}>
                    <div className='mt-4 pb-3'>
                        <h2 className='text-center '>Agregar Usuarios</h2>
                    </div>
                    <div>
                        <input
                        type='text'
                        placeholder='Email'
                        className='form-control'
                        name='email'
                        // id='email'
                        value={email}
                        onChange={handleEmail}
                        />
                    </div>
                    <div className='mt-4'>
                        <input
                        type='password'
                        placeholder='Password'
                        className="form-control"
                        id='password'
                        name='password'
                        value={password}
                        onChange={handlePassword}

                        />
                    </div>
                    <div className='mt-4 '>
                        <button className='btn btn-primary'>Sign up</button>
                    </div>
                </form>
            
                <div className='text-center text-muted'>
                    <button onClick={handleUserDone} className='btn btn-outline-success'>DONE!</button>  
                </div>

           </div>
        </div>
    )
}

export default Signin;