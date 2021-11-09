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
        <span onClick={this.toggle}>About</span>

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader>What is Cryptoboard about?</ModalHeader>
          <ModalBody>
            <p>
              Hi there! I'm Marcos{" "}
              <span role="img" aria-label="Hand">
                👋
              </span>
              I developed this site while learning React and researching the
              cryptocurrency ecosystem.
            </p>
            <p>
              Cryptoboard is a platform that allows you to monitor{" "}
              <strong>
                the price and variations of different cryptographic assets{" "}
              </strong>
              in real time, as well as the activity in their corresponding
              markets.
            </p>
            <p>
              The code is open source and you could use it in your own
              development if you wish to. Here is the{" "}
              <a
                href="https://github.com/marcosdellavecchia/crypto-dashboard"
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong>GitHub repository</strong>
              </a>
              .
            </p>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>
              Go back
            </Button>
          </ModalFooter>
        </Modal>
      </React.Fragment>
    );
  }
}

export default About;
