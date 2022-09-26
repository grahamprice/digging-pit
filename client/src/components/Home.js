import React from "react";
import { useHistory } from "react-router-dom";
import { Carousel } from "flowbite-react";

function Home() {
  const history = useHistory();

  //Men's Page
  const toMensSection = () => {
    history.push("/mens");
  };

  //Womens's Page
  const toWomensSection = () => {
    history.push("/womens");
  };

  return (
    <div className="h-56\\ sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        <img onClick={toMensSection} src="img.png" alt="Mens" />
        <img
          onClick={toWomensSection}
          src="https://as2.ftcdn.net/v2/jpg/04/25/98/85/1000_F_425988540_nF96Y9CquiUeYp0zoSylEUzQPNfrFMZs.jpg"
          alt="Womens"
        />
        <img
          src="https://as2.ftcdn.net/v2/jpg/05/29/76/79/1000_F_529767940_tZ5qRliV04YImJDLFyVEKrKSb2gzf48K.jpg"
          alt="Accessories"
        />
      </Carousel>
    </div>
  );
}

export default Home;
