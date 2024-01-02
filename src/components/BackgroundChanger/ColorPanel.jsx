const ColorPanel = ({ changeBackgroundColor }) => {
  const colors = [
    "white",
    "lavender",
    "yellow",
    "pink",
    "darkgray",
    "red",
    "olive",
    "green",
    "blue",
    "purple",
    "black",
  ];
  return (
    <>
      {colors.map((color, i) => (
        <button
          key={i}
          className="px-6 py-2 capitalize rounded-full shadow-xl"
          style={{ backgroundColor: color, color: i < 4 ? "black" : "white" }}
          onClick={() => changeBackgroundColor(color)}
        >
          {color}
        </button>
      ))}
    </>
  );
};

export default ColorPanel;
