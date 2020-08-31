import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
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
              <ModalHeader>Acerca del proyecto</ModalHeader>
              <ModalBody>Este es es el body</ModalBody>
              <ModalFooter>
                <button
                  className="btn-primary modal-return"
                  onClick={this.openModal}
                >
                  Volver al sitio
                </button>
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
