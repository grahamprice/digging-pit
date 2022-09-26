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
        <img
          onClick={toMensSection}
          src="https://pyxis.nymag.com/v1/imgs/36b/a9d/596289e7731ebecec1ebde78a3475c0620-StratWoodenSleepersLede.rhorizontal.w700.jpg"
          alt="..."
        />
        <img
          onClick={toWomensSection}
          src="https://media.timeout.com/images/105795964/750/422/image.jpg"
          alt="..."
        />
        <img
          src="https://media.timeout.com/images/103166743/750/562/image.jpg"
          alt="..."
        />
        <img
          src="https://media.timeout.com/images/103166747/750/562/image.jpg"
          alt="..."
        />
        <img
          src="https://media.timeout.com/images/105293264/750/562/image.jpg"
          alt="..."
        />
      </Carousel>
    </div>
  );
}

export default Home;
