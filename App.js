import './App.css';
import { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom';
import Menu from './components/Menu';
import Main from './components/Main';
import Payment from './components/Payment';
import HashLoader from "react-loader-spinner";
import "bootstrap/dist/css/bootstrap.css";



function App() {
  function template() {
    console.log("hello man")
  }
  
  //loading--------
  const [loading, setloading] = useState(false);
  useEffect(() => {
    setloading(true)
    setTimeout(() => {
      setloading(false)
    }, 1000)
  }, [])

  return (
    <>
      {
        loading ?
          <HashLoader style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "90vh" }}
            type="Bars"
            color="#e64c0f"
            height={50}
            width={35}
            timeout={1000} />
          :
          <Switch>
            <Route exact path='/' component={Menu} />
            <Route exact path='/main' component={Main} templates={template} />
            <Route exact path ='/payment' component={Payment}/>

          </Switch>

      }

    </>
  );
}

export default App;
