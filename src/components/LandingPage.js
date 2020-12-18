
import React from "react";
import Particles from "react-tsparticles";
import { Button, Container } from "reactstrap";

// core components

function LandingPage() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });
 
  return (
    <>
      <div
        style={{
          backgroundColor: "background-color: #0093E9",
          backgroundImage: "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)"
        }}
        className="page-header"
        data-parallax={true}
        ref={pageHeader}
      >
        
        <div className="filter" />
        <Container>
          <div className="motto text-center">
          <div id="tsparticles"><Particles
          /></div>
            <h1>Cohort 6</h1>
            <h3>Welcome to your Full Stack Developer Program</h3>
            <br />
            <Button
              href="https://www.evolveu.ca/cohort-zone"
              className="btn-round mr-1"
              color="neutral"
              target="_blank"
              outline
            >
              Get Started
            </Button>
            <Button 
            href=""
            className="btn-round" 
            color="neutral" 
            type="button" 
            outline>
              Basecamp
            </Button>
          </div>
        </Container>
      </div>
    </>
  );
}

export default LandingPage;
