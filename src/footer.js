import React from "react";
import axios from "axios";
import "./footer.css";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      global: [],
    };
  }

  componentDidMount() {
    axios.get("https://api.coingecko.com/api/v3/global").then((res) => {
      const global = res.data.data;
      console.log(global);
      this.setState({ global: global });
    });
  }

  render() {
    return (
      <div className="footer-box">
        <div className="container footer-data">
          <div className="footer-item">
            <h6>CRYPTOBOARD PROJECT</h6>
            <a href="https://cryptoboard-project.web.app/">
              Acerca del proyecto
            </a>
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
