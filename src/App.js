import Signin from "./components/SignInForm";
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
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

      
      <Page/>

          {/* <div className="App">
            <Switch>
                <Route path='/signin'>
                  <Signin/>
                </Route>

                <Route path='/page'>
                  <Page user={`${userIn ? userIn.email : userIn}`}/>
                </Route>
                <Route path='/'>
                  <LogInForm/>
                </Route>
            
            </Switch>
          </div>

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
