import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import './assetss/css/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Editar from './components/Editar';
import Nuevo from './components/Nuevo';
import NuevoCopy from './components/NuevoCopy'



function App() {
  return (
    <React.Fragment>
      <Router>
          <Route path="/" exact render={ props=> (<Login{...props} />)}></Route> 
          <Route path="/Dashboard" exact render={ props=> (<Dashboard{...props}/>)}></Route> 
          <Route path="/Nuevo" exact render={ props=> (<Nuevo{...props}/>)}></Route> 
          <Route path="/NuevoCopy" exact render={ props=> (<NuevoCopy{...props}/>)}></Route> 
          <Route path="/Editar/:id" exact render={ props=> (<Editar{...props}/>)}></Route> 
          <Route path="/prueba" exact render={ props=> (<prueba{...props}/>)}></Route> 
      </Router>
    </React.Fragment>
  );
}

export default App;
