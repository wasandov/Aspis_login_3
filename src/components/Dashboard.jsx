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
        let url = apiurl + "/auth/register";
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
                                <th scope="col">ID</th>
                                <th scope="col">NOMBRES</th>
                                <th scope="col">APELLIDOS</th>
                                <th scope="col">PROYECTO</th>
                                <th scope="col">HORAS</th>
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