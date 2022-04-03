import '../assests/styles/SigninForm.scss';
import { useState } from 'react';
import {Link, useHistory} from 'react-router-dom';
import { handleAlertUser, handleAlertPassword, handleUserSuccess, 
        handleEmailValidation, handleIncorrectPassword, handleEmptyEmail, 
        handleEmptyPassword } from './Alerts';
import app from '../firebase/Firebase';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
const auth = getAuth(app);

const Signin = ()=>{
        

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const history = useHistory();

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
                history.push('/')
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
    return(
        <div className='form-contianer'>
           
            <form className='form-group' onSubmit={handleSubmit}>
                <div className='mt-4 pb-3'>
                    <h2 className='text-center '>Sign In</h2>
                </div>
                <div>
                    <input
                    type='email'
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
                <div className='mt-4'>
                    <button className='btn btn-primary'>Sign in</button>
                </div>
            </form>
            {/* <div>
                <button onClick={()=>handleAlertUser()}>
                    user
                </button>
                <button onClick={()=> handleAlertPassword()}>password</button>
            </div> */}
            <div>
                <span>Have accout?</span>{' '}
                <Link to='/'>Log in</Link>  
            </div>

        </div>
    )
}

export default Signin;