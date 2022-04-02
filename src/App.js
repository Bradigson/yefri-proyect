import Signin from "./components/SignInForm";
import {useState} from 'react';
import './assests/styles/App.scss';
function App() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className={`${darkMode ? 'App dark' : 'App morning' }`}>
      
      {/* <Signin/> */}
      <style>
        {`
          .App{
                height:100vh;
                display:flex;
                justify-content:center;
                align-items:center;

          }
        `}
      </style>
    </div>
  );
}

export default App;
