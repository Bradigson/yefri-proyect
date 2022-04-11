import { useHistory, Link, Switch, Route } from "react-router-dom";
import { useState } from "react";
import '../assests/styles/HomePage.scss';
import '../assests/styles/Header.scss';
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
    const history = useHistory();
    const handleSignOut = ()=>{

    try{
        signOut(auth);
        history.push('/')
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
        <div className='Page'>
            <header>
                <nav className={`${menu ? 'change' : ''} ${'navbar'}`}>
                    <div className="hamburger-menu" onClick={handleMenu}>
                        <div className='line line-1'></div>
                        <div className='line line-2'></div>
                        <div className='line line-3'></div>
                    </div>
                    <ul className='menu__list'>
                        <li><Link to='/' className='nav-link' onClick={handleLink}>Inicio</Link></li>
                        <li><Link to='/sobrenosotros' className='nav-link' onClick={handleLink}>Sobre Nosotros</Link></li>
                        <li><Link to='/reportes' className='nav-link' onClick={handleLink}>Reportes</Link></li>
                        <li><Link to='/hospitales' className='nav-link' onClick={handleLink}>Hospitales</Link></li>
                        <li><Link to='/usuarios' className='nav-link' onClick={handleLink}>Usuarios</Link></li>
                    </ul>

                </nav>
                
            </header>
            {/* <h1>Bienvenido</h1>
            <p>{props.user}</p>
            <div>
                <p>Web page in progress....</p>
            </div>

            <div>
                <button onClick={handleSignOut} className='btn btn-dark'>Sign Out</button>
            </div> */}


           {/* <Banner1/> */}


           <Switch>
               <Route path='/sobrenosotros'>
                   <SobreNosotros/>

               </Route>
               <Route path='/reportes'>
                   <Reportes/>
               </Route>
               <Route path='/hospitales'>
                   <Hospitales/>
               </Route>
               <Route path='/usuarios'>
                    <Usuarios/>
               </Route>
               <Route path='/'>
                   <Banner1/>
               </Route>
           </Switch>
        </div>
    )
}


export default Page;