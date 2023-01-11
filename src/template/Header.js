import React from "react";

class Header extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-dark bg-dark">
                <div className="container" >
                    <a className="navbar-brand" href="#">Tabla de Registro de horas de Programadores</a>    
                </div>
                
            </nav>            
        );
    }
}
export default Header;