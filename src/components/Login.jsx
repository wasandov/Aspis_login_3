import React from "react";
import "../assetss/css/Login.css";

import logo from "../assetss/img/logo.JPG";

//servicios
import { apiurl } from "../services/apirest";

//librearias
import axios from "axios";

//Heredar la clase components
class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    form: {
      email: "", //se debe de tomar tal y como esta en la BD CAMI******
      password: "", //se debe de tomar tal y como esta en la BD CAMI******
    },
    error: false, //Error de pruebas, unicamente para simular error
    errorMsg: "Error de pruebas", //Error de pruebas, unicamente para simular error
  };

  //Manejador, para que hasta que no se ingresen los datos, no se recargue la pagina
  manejadorSubmit(e) {
    e.preventDefault();
  }

  manejadorChange = async (e) => {
    await this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
    console.log(this.state.form);
  };

  manejadorBoton = () => {
    console.log("Enviado");
    let url = apiurl + "/auth/login";
    axios
      .post(url, this.state.form)

      .then((response) => {
        console.log("respuesta then");
        console.log(response);
        if (response.data.status === "ok") {
          //revisas
          localStorage.setItem("token", response.data.result.token);
          this.props.history.push("/Dashboard");
          console.log("respuesta if");
        } //revisas
        console.log("respuesta despues del if");
        /*else{
               this.setState({
                error: true,
                errorMsg: response.data.result.error_msg
                }) 
            }*/
      })
      .catch((error) => {
        console.log("error");
        console.log(error);
        this.setState({
          error: true,
          errorMsg: error.response.data.message,
        });
      });
  };

  manejadorBotonNewUSer = () => {
    console.log("Enviado Nuevo usuario");
    this.props.history.push("/NuevoCopy");
  };

  render() {
    return (
      <React.Fragment>
        <div className="wrapper fadeInDown">
          <div id="formContent">
            <br></br>
            <h3 className="panel-title">Registro Para Manejo de Horas </h3>
            <br></br>
            <div className="fadeIn first">
              <br></br>
              <img src={logo} width="100px" id="icon" alt="Icono Aspis" />
              <br></br>
            </div>

            <form onSubmit={this.manejadorSubmit}>
              <input
                type="email"
                id="email"
                className="fadeIn second"
                name="email"
                placeholder="Usuario"
                onChange={this.manejadorChange}
              />
              <input
                type="Password"
                id="password"
                className="fadeIn third"
                name="password"
                placeholder="Password"
                onChange={this.manejadorChange}
              />
              <input
                type="submit"
                className="fadeIn fourth"
                value="Ingresar"
                onClick={this.manejadorBoton}
              />
            </form>
            <div id="formFooter">
              <a
                className="underlineHover"
                href="#"
                onClick={this.manejadorBotonNewUSer}
              >
                {" "}
                Usuario Nuevo{" "}
              </a>
            </div>

            <div id="formFooter">
              <a className="underlineHover" href="#">
                Olvido su Usuario y/o Password
              </a>
            </div>
            {this.state.error === true && (
              <div className="alert alert-danger" role="alert">
                {this.state.errorMsg}
              </div>
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
