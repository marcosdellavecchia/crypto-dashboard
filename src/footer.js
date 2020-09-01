import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "./footer.css";

class Footer extends React.Component {
  state = { isModalOpen: false };
  openModal = () => {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  };

  render() {
    return (
      <div className="footer-box">
        <div className="container footer-data">
          <div className="footer-item">
            <h6>CRYPTOBOARD PROJECT</h6>

            {/* Modal que abre la información del proyecto */}
            <span className="about" onClick={this.openModal}>
              Acerca del proyecto
            </span>
            <Modal isOpen={this.state.isModalOpen}>
              <ModalHeader>¿Qué es Cryptoboard?</ModalHeader>
              <ModalBody>
                <p>
                  ¡Hola! Me llamo Marcos{" "}
                  <span role="img" aria-label="Hand">
                    👋
                  </span>
                  , soy programador web y desarrollé este sitio mientras
                  aprendía React JS e investigaba el mercado de criptomonedas.
                </p>
                <p>
                  Si querés dejarme un comentario o sugerencia, podés hacerlo en{" "}
                  <a
                    href="https://twitter.com/marcosdv"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <strong>Twitter.</strong>
                  </a>
                </p>
                <p>
                  El código es público y podés utilizarlo en tu propio
                  desarrollo si así lo deseas{" "}
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
                <Button color="primary" onClick={this.openModal}>
                  Volver al sitio
                </Button>
              </ModalFooter>
            </Modal>

            <a
              href="https://github.com/marcosdellavecchia/crypto-dashboard"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Código fuente
            </a>
            <a
              href="https://www.coingecko.com/api/documentations/v3"
              target="_blank"
              rel="noopener noreferrer"
            >
              CoinGecko API
            </a>
          </div>

          <div className="footer-item">
            <h6>REDES SOCIALES</h6>
            <div className="social">
              <a
                href="https://twitter.com/marcosdv"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-twitter fa-lg" aria-hidden="true"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/marcos-dv/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-linkedin fa-lg" aria-hidden="true"></i>
              </a>
              <a
                href="https://github.com/marcosdellavecchia"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-github fa-lg" aria-hidden="true"></i>
              </a>
            </div>
          </div>

          <div className="footer-item">
            <h6>CRÉDITOS</h6>
            <p>
              Hecho con{" "}
              <span role="img" aria-hidden="true">
                💙
              </span>{" "}
              por Marcos DV
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
