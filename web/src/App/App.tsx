import Picture from "./Components/Picture/Picture";
import logo from "/logo.svg";

const P = () => {
  return (
    <Picture
      alt="galaxy"
      path="/assets/bg-galaxy"
      baseImg={{ name: "bg", ext: "jpg" }}
      exts={["svg", "avif", "webp"]}
      className="absolute inset-0 w-full object-cover aspect-video -z-10 pointer-events-none"
    />
  );
};

function App() {
  return (
    <>
      <P />

      <div className="grid place-items-center gap-8 w-flued-1 my-4 mx-auto">
        <img className="" src={logo} alt="logo" />

        <h1 className="text-6xl text-surface-900 font-700">
          Seu
          <span className="bg-clip-text text-transparent bg-gradient-100 ">
            duo
          </span>
          está aqui.
        </h1>
      </div>
    </>
  );
}

export default App;
