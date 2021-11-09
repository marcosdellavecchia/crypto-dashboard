import React from "react";
import About from "../components/About";
import "../css/Footer.css";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer-box">
        <div className="container footer-data">
          <div className="footer-item">
            <h6>CRYPTOBOARD PROJECT</h6>

            {/* Modal que abre la información del proyecto */}

            <span className="about">
              <About initialModalState={false} />
            </span>

            <a
              href="https://github.com/marcosdellavecchia/crypto-dashboard"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Source code
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
            <h6>SOCIAL MEDIA</h6>
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
            <h6>CREDITS</h6>
            <p>
              Made with{" "}
              <span role="img" aria-hidden="true">
                💙
              </span>{" "}
              by Marcos DV
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
