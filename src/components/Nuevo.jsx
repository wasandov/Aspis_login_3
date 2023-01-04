import React from "react";
import '../assetss/css/Nuevo.css';
import logo from '../assetss/img/logo.JPG';
import {apiurl} from '../services/apirest.js';
import axios from "axios";

//Heredar la clase components
class Nuevo extends React.Component{

    componentDidMount(){
        const urlpruebas="https://api.solodata.es";
        let PacienteId=this.props.match.params.id;
        let url = urlpruebas + "/pacientes?id=" + PacienteId;             //Ruta donde se van a alterar los datos
        axios.get(url)
        .then(response =>{
            this.setState({
                form:{
                    nombre : response.data[0].Nombre,
                    direccion : response.data[0].Direccion,
                    dni : response.data[0].DNI,
                    correo : response.data[0].Correo,
                    codigoPostal : response.data[0].CodigoPostal,
                    genero : response.data[0].Genero,
                    telefono : response.data[0].Telefono,
                    fechaNacimiento : response.data[0].FechaNacimiento,
                    token : localStorage.getItem("token"),
                    pacienteId: response.data[0].PacienteId
                }
            })
            console.log(response)
        });
        
    }

    render(){
        return(
            <React.Fragment>
                <div className="container">
                    <center>
                    <img className="icono" src={logo} width="1px" id="icon" alt="Icono Aspis" />
                        <div className="row centered-form"  >
                        <div className="col-xs-12 col-sm-8 col-md-4 col-sm-offset-2 col-md-offset-4" flex-justify-content= "center">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <br></br>
                                        <h3 className="panel-title">Registro Para Usuarios Nuevos </h3>
                                        <br></br>
                                        </div>
                                        <div className="panel-body">
                                        <form role="form">
                                            <div className="row">
                                                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-12">
                                                    <div className="form-group">
                                                        <input type="text" name="nombre" id="first_name" className="form-control input-sm" placeholder="Nombres" />
                                                    </div>
                                                </div>
                                                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-12">
                                                    <div className="form-group">
                                                        <input type="text" name="direccion" id="last_name" className="form-control input-sm" placeholder="Apellidos" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <input type="email" name="email" id="dni" className="form-control input-sm" placeholder="Dirección E-mail" />
                                            </div>

                                            <div className="row">
                                                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-12">
                                                    <div className="form-group">
                                                        <input type="password" name="correo" id="password" className="form-control input-sm" placeholder="Password" />
                                                    </div>
                                                </div>
                                                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-12">
                                                    <div className="form-group">
                                                        <input type="password" name="genero" id="password_confirmation" className="form-control input-sm" placeholder="Confirmar Password" />
                                                    </div>
                                                </div>
                                            </div>
                                            <br></br>
                                            <input type="submit" value="Registrarse..." className="btn btn-info btn-block"/>
                                            <br></br>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </center>
                    </div>
                   
            </React.Fragment>
        );
        
    }
}

export default Nuevo