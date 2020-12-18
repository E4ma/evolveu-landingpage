

import React from "react";


import { Container } from "reactstrap";

function Footer() {
  return (
    <footer className="footer">
      <Container>
      
          <div className="credits ml-auto">
            <span className="copyright">
              © {new Date().getFullYear()}, made with{" "}
              <i className="fa fa-heart heart" /> by E4ma
            </span>
            
          </div>
      </Container>
    </footer>
  );
}

export default Footer;
