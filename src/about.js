import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: props.initialModalState,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  render() {
    return (
      <React.Fragment>
        <span onClick={this.toggle}>Acerca de</span>

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader>¿Qué es Cryptoboard?</ModalHeader>
          <ModalBody>
            <p>
              ¡Hola! Soy Marcos{" "}
              <span role="img" aria-label="Hand">
                👋
              </span>
              , desarrollé este sitio mientras aprendía React JS e investigaba
              el mercado de criptomonedas.
            </p>
            <p>
              Cryptoboard es una plataforma que permite monitorear en tiempo
              real la{" "}
              <strong>
                cotización y las variaciones de diferentes activos
                criptográficos
              </strong>
              , como así también la actividad en sus correspondientes mercados
            </p>
            <p>
              El código es público y podés utilizarlo en tu propio desarrollo si
              así lo deseas{" "}
              <span role="img" aria-label="Laptop">
                💻
              </span>
              . Acá te dejo el{" "}
              <a
                href="https://github.com/marcosdellavecchia/crypto-dashboard"
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong>repositorio de GitHub</strong>
              </a>
              .
            </p>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>
              Volver al sitio
            </Button>
          </ModalFooter>
        </Modal>
      </React.Fragment>
    );
  }
}

export default About;
