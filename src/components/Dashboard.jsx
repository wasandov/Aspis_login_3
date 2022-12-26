import React from "react";
import Header from "../template/Header";

import {apiurl} from '../services/apirest';
import axios from "axios";


//Heredar la clase components
class Dashboard extends React.Component{

    state={
        pacientes:[]
    }

    clickPaciente(id){
        console.log(id);
        this.props.history.push("/editar/"+id);
    }

    componentDidMount(){
        let url = apiurl + "pacientes?page=1";
        axios.get(url)
        .then(response=> {
            this.setState({
                    pacientes   :   response.data
            })
        })
    }

    render(){
        return(
            <React.Fragment>
                <Header></Header>
                <div className="container">
                    <br></br>
                      <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">PACIENTE ID</th>
                                <th scope="col">NOMBRE</th>
                                <th scope="col">DNI</th>
                                <th scope="col">CELULAR</th>
                                <th scope="col">E-Mail</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.pacientes.map((value, index) =>{
                                return(
                                    <tr key={index} onClick={()=>this.clickPaciente(value.PacienteId)}>
                                        <td> {value.PacienteId}</td>
                                        <td> {value.Nombre}</td>
                                        <td> {value.DNI}</td>
                                        <td> {value.Telefono}</td>
                                        <td> {value.Correo}</td>
                                    </tr>
                                )
                            })}

                        </tbody>
                        </table>                  

                </div>
            </React.Fragment>
        );

    }
}

export default Dashboard