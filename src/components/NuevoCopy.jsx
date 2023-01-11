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
    MsjCreacionUsuario: false, //Para pruebas, si sobra se puede eliminar
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
    axios.post(url, this.state.form).then((response) => {
      console.log(response);
      if (response.data.statusCode === 201) {
        console.log("Usuario creado");
      }
      //localStorage.setItem(response.data.result.token);
      //errorMsg: response.data.message
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
          {this.state.error === true && (
            <div className="alert alert-danger" role="alert">
              {this.state.errorMsg}
            </div>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default NuevoCopy;
