import {Routes, Route, Navigate} from 'react-router-dom';
import {useState, useEffect} from 'react';
import './assests/styles/App.scss';
import LogInForm from "./components/LogInForm";
import Page from "./page/Page";
import app from "./firebase/Firebase";
import {getAuth, onAuthStateChanged} from 'firebase/auth';
const auth = getAuth(app);


function App() {
  const [userIn, setUserIn] = useState(null);

  useEffect(()=>{
    onAuthStateChanged(auth, (usuario)=>{
        setUserIn(usuario)
    })
  },[])


  return (

    <div className='app'>

      
      {/* <Page/> */}



      <Routes>
        <Route path='/' element={<Navigate to='/login'/>}/>
        <Route path='/login/' element={<LogInForm/>}/>
        <Route path='/page/*' element={<Page user={userIn ? userIn.email : userIn}/>}/>
      </Routes>
{/* 
         
            <style>
                    {`
                      .App{
                            height:100vh;
                            display:flex;
                            justify-content:center;
                            align-items:center;

                      }
                      
                    `}
              </style> */}

              <style>
                {
                  `
                  .app{
                    background:#fff;
                    height:100vh;
                    display:flex;
                    justify-content:center;
                    align-items:center;
                  }
                  `
                }
              </style>

    </div>

  );
}

export default App;
