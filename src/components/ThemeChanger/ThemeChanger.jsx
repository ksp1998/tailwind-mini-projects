import CardUI from "./CardUI";
import ThemeButton from "./ThemeButton";

const ThemeChanger = () => {
  return (
    <section className="w-full h-screen p-[2em] bg-yellow-50 flex gap-4 flex-col justify-center items-center duration-300">
      <h1 className="text-4xl font-bold text-center">Theme Changer</h1>

      <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/60">
        <ThemeButton />
        <CardUI />
      </div>
    </section>
  );
};

export default ThemeChanger;
