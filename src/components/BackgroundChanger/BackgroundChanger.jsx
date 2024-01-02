import { useRef } from "react";
import Card from "./Card";
import ColorPanel from "./ColorPanel";

const BackgroundChanger = () => {
  const mainElementRef = useRef();

  const changeBackgroundColor = (color) => {
    mainElementRef.current.style.backgroundColor = color;
  };

  return (
    <section
      className="w-full min-h-screen p-[2em] bg-white flex gap-4 flex-col justify-center items-center duration-300"
      ref={mainElementRef}
    >
      <div>
        <h1
          className="text-4xl font-bold text-center"
          style={{ textShadow: "0 0 4px #FFF" }}
        >
          Change Background Color
        </h1>
        <div className="my-4 p-3 flex flex-wrap  justify-center gap-3 bg-white rounded-lg shadow-2xl">
          <ColorPanel changeBackgroundColor={changeBackgroundColor} />
        </div>
      </div>

      <div className="flex gap-4 flex-wrap justify-center">
        <Card
          name="Tony Stark"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?"
        />
        <Card
          name="Steve Rogers"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?"
        />
        <Card
          name="Thor"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?"
        />
      </div>
    </section>
  );
};

export default BackgroundChanger;
