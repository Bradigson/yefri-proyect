import { useState } from "react";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import '../assests/styles/HomePage.scss';
import Banner1 from "../components/Banner1";
import SobreNosotros from "../components/SobreNosotros";
import Reportes from "../components/Reportes";
import Hospitales from "../components/Hospitales";
import Usuarios from "../components/Usuarios";
import app from "../firebase/Firebase";
import Dotos from '../datos/datos.json';
import {getAuth, signOut} from 'firebase/auth';
const auth = getAuth(app);


const Page = (props)=>{
    const [menu, setMenu] = useState(false);
    const navigate = useNavigate();
    const handleSignOut = ()=>{

    try{
        signOut(auth);
        navigate('/login')
        
    }catch(err){
        console.log(err)
    }
}

const handleMenu = ()=>{
    setMenu(!menu);

}

const handleLink = ()=>{
    setMenu(!menu);
}
const data = Dotos;

    return(
        <div className='Page '>
            <div className="signout">
                <button onClick={handleSignOut} >Sign out</button>
            </div>
            <header className="header">
                
                <nav className={`${menu ? 'change' : ''} ${'navbar'}`}>
                    <div className="hamburger-menu" onClick={handleMenu}>
                        <div className='line line-1'></div>
                        <div className='line line-2'></div>
                        <div className='line line-3'></div>
                    </div>
                    <ul className='menu__list'>
                        <li><Link to='inicio' className='nav-link' onClick={handleLink}>Inicio</Link></li>
                        <li><Link to='nosotros' className='nav-link' onClick={handleLink}>Sobre Nosotros</Link></li>
                        <li><Link to='reportes' className='nav-link' onClick={handleLink}>Reportes</Link></li>
                        <li><Link to='hospitales' className='nav-link' onClick={handleLink}>Hospitales</Link></li>
                        <li><Link to='usuarios' className='nav-link' onClick={handleLink}>Usuarios</Link></li>
                    </ul>

                    <div className="user">
                        <span>{props.user}</span>
                    </div>
                </nav>
                
                
                
               
            </header>
            
            <Routes>
                <Route path='inicio' element={<Banner1/>}/>
                <Route path='nosotros' element={<SobreNosotros/>}/>
                <Route path='reportes' element={<Reportes/>}/>
                <Route path='hospitales' element={<Hospitales/>}/>
                <Route path='usuarios' element={<Usuarios/>}/>
            </Routes>
          
          
        </div>
    )
}


export default Page;