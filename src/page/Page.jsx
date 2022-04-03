import { useHistory } from "react-router-dom";
import app from "../firebase/Firebase";
import {getAuth, signOut} from 'firebase/auth';
const auth = getAuth(app);


const Page = (props)=>{
    const history = useHistory();
    const handleSignOut = ()=>{

    try{
        signOut(auth);
        history.push('/')
    }catch(err){
        console.log(err)
    }
}
    return(
        <div className='text-center'>
            <h1>Bienvenido</h1>
            <p>{props.user}</p>
            <div>
                <p>Web page in progress....</p>
            </div>

            <div>
                <button onClick={handleSignOut} className='btn btn-dark'>Sign Out</button>
            </div>
        </div>
    )
}


export default Page;