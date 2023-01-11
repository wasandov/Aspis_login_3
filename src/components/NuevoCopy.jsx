import React from "react";
import logo from "../assetss/img/logo.JPG";
import { apiurl } from "../services/apirest.js";
import axios from "axios";
import "../assetss/css/Nuevo_copy.css";

class NuevoCopy extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    form: {
      email: "",
      password: "",
    },
    error: "",
    errorMsg: "Error de pruebas 123456",
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

  UsuarioNuevo = () => {
    console.log(this.state.form);
    let url = apiurl + "/auth/Register"; //Tener en cuenta como lo tiene estructurado CAMI
    axios
      .post(url, this.state.form)
      .then((response) => {
        console.log(response);
        if (response.data.statusCode === 201) {
          console.log("Usuario creado");
          this.setState({
            error: "1",
            errorMsg: "El usuario fue creado con exito",
          });
        }
      })
      .catch((error) => {
        console.log("error de catch");
        console.log(error);
        this.setState({
          error: "2",
          errorMsg: error.response.data.message,
        });

        /*if (error.AxiosError.response.data.statusCode === 409) {
          console.log("error de catch dentro del if");
          this.setState({
            error: "2",
            errorMsg: "El email ya se habia registrado",
          });
        }*/
      });
  };

  render() {
    return (
      <React.Fragment>
        <div className="wrapper fadeInDown">
          <img
            className="icono"
            src={logo}
            width="1px"
            id="icon"
            alt="Icono Aspis"
          />
          <form onSubmit={this.manejadorSubmit}>
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-12">
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form-control input-sm"
                  placeholder="Email"
                  onChange={this.manejadorChange}
                />
              </div>
            </div>
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-12">
              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="form-control input-sm"
                  placeholder="Password"
                  onChange={this.manejadorChange}
                />
              </div>
            </div>
          </form>
          <input
            type="submit"
            value="Registrarse..."
            className="btn btn-info btn-block"
            onClick={this.UsuarioNuevo}
          />
          <br></br>
          {this.state.error === "1" && (
            <div className="alert alert-primary" role="alert">
              {this.state.errorMsg}
            </div>
          )}
          {this.state.error === "2" && (
            <div className="alert alert-danger" role="alert">
              {this.state.errorMsg}
            </div>
          )}
          {this.state.error === "3" && (
            <div className="alert alert-primary" role="alert">
              {this.state.errorMsg}
            </div>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default NuevoCopy;
