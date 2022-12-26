import React from "react";
import { apiurl } from "../services/apirest";

//Librerias
import axios from "axios";

//Templates
import Header from "../template/Header";


//Heredar la clase components
class Editar extends React.Component{

    state = {
        form:{
            "nombre" : "", 
            "direccion": "",
            "dni" : "",
            "correo":"",
            "codigoPostal" :"",
            "genero" : "",
            "telefono" : "",
            "fechaNacimiento" : "",
            "token" : "",
            "pacienteId":""
        },
        error:false,
        errorMsg:""
    }

    manejadorChange = async e=> {
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
        console.log(this.state.form);
    }

    manejadorSubmit = e => {
        e.preventDefault();
    }


    put =()=>{
        console.log(this.state.form)
        let url = apiurl+"pacientes";    //Tener en cuenta como lo tiene estructurado CAMI
        axios.put(url,this.state.form)
        .then(response =>{
            console.log(response)
        })
    }

    delete =()=>{
        let url = apiurl+"pacientes";    //Tener en cuenta como lo tiene estructurado CAMI
        let PacienteId=this.props.match.params.id;
        let datos = {
            "token": localStorage.getItem("token"),
            "pacienteId": PacienteId,
        }
        axios.delete(url,{headers:datos})
        .then(response =>{
            console.log(response);
        })
                
    }


    componentDidMount(){
        let PacienteId=this.props.match.params.id;
        let url = apiurl + "/pacientes?id=" + PacienteId;             //Ruta donde se van a alterar los datos
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
        const form=this.state.form      //Para reducir las lineas, al traer los datos de los pacientes "value={form.nombre}"
                                        //la linea larga quedaria: value={this.state.nombre}
        return(
            <React.Fragment>
                <Header/>
                <div className="container">
                    <h3> Editar Paciente </h3>
                </div>
                <div className="container">
                    <br />
                    <form className="row" onSubmit={this.manejadorChange}>
                        <div className="col-sm-12">
                            <label className="col1"> Nombres y Apellidos </label>
                            <div className="col2">
                                <input className="Formato" name="nombre" placeholder="Nombres y apellidos" type="text" value={form.nombre} onChange={this.manejadorChange}/>
                            </div>
                        </div>
                    </form>
                    <br/>
                    <form className="row">
                        <div className="col-sm-12">
                            <label className="col1"> Direccion </label>
                            <div className="col2">
                                <input className="Formato" name="direccion" placeholder="Direccion de domicilio" type="text" value={form.direccion} onChange={this.manejadorChange}/>
                            </div>
                        </div>
                    </form>
                    <br />
                    
                    <form className="row">
                        <div className="col-md-6">
                            <label className="col-md-2 control-label"> DNI </label>
                            <div className="col-md-8">
                                <input className="form-control" name="dni" placeholder="DNI" type="text" value={form.dni} onChange={this.manejadorChange}/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <label className="col-md-2 control-label"> Telefono </label>
                            <div className="col-md-8">
                                <input className="form-control" name="telefono" placeholder="Telefono" type="text" value={form.telefono} onChange={this.manejadorChange}/>
                            </div>
                        </div>
                    </form>

                    <form className="row">
                        <div className="col-md-6">
                            <label className="col-md-2 control-label"> Codigo Postal </label>
                            <div className="col-md-8">
                                <input className="form-control" name="codigoPostal" placeholder="Codigo Postal" type="text" value={form.codigoPostal} onChange={this.manejadorChange}/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <label className="col-md-2 control-label"> Fecha de nacimiento </label>
                            <div className="col-md-8">
                                <input className="form-control" name="fechaNacimiento" placeholder="Fecha de nacimiento" type="text" value={form.fechaNacimiento} onChange={this.manejadorChange}/>
                            </div>
                        </div>
                    </form>
                    <form className="row">
                        <div className="col-md-6">
                            <label className="col-md-2 control-label"> Genero </label>
                            <div className="col-md-8">
                                <input className="form-control" name="genero" placeholder="Genero" type="text" value={form.genero} onChange={this.manejadorChange}/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <label className="col-md-2 control-label"> Correo </label>
                            <div className="col-md-8">
                                <input className="form-control" name="correo" placeholder="Correo" type="text" value={form.correo} onChange={this.manejadorChange}/>
                            </div>
                        </div>
                    </form>
                    <br></br>
                        <button type="submit" className="btn btn-primary" style={({marginRight: "10px"})} onClick={()=>this.put()}
                        >Editar</button>
                        <button type="submit" className="btn btn-danger" style={({marginRight: "10px"})} onClick={()=>this.delete()}>Eliminar</button>
                        <a className="btn btn-dark" href="/dashboard" >Salir</a>

                </div>
                   

            </React.Fragment>

        );

    }
}

export default Editar