import { MagnifyingGlassPlus } from "phosphor-react";

import Picture from "./Components/Picture/Picture";
import logo from "/logo.svg";

import styles from "./App.module.scss";

type GameCardProps = {
  src: string;
  alt: string;
  ulr: string;
};

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

const GameCard = (p: GameCardProps) => {
  return (
    <li className={styles.card}>
      <a href={p.ulr}>
        <img
          className="w-52 aspect-portrait object-cover"
          src={p.src}
          alt={p.alt}
        />

        <p>
          <strong className="block font-600">League of Legends</strong>
          <em className="text-zinc-300 text-sm">4 anúncios</em>
        </p>
      </a>
    </li>
  );
};

function App() {
  return (
    <>
      <P />

      <header className="grid place-items-center gap-inherent">
        <img src={logo} alt="logo" />

        <h1 className="text-6xl text-surface-900 font-700">
          Seu
          <span className="bg-clip-text text-transparent bg-gradient-text ">
            duo
          </span>
          está aqui.
        </h1>
      </header>

      <main className="">
        <ul className={styles.cards}>
          <GameCard ulr="#" src="https://picsum.photos/100/300" alt="picture" />
          <GameCard ulr="#" src="https://picsum.photos/200/600" alt="picture" />
          <GameCard ulr="#" src="https://picsum.photos/400/900" alt="picture" />
          <GameCard ulr="#" src="https://picsum.photos/800/200" alt="picture" />
          <GameCard ulr="#" src="https://picsum.photos/200/100" alt="picture" />
        </ul>
      </main>

      <footer className={styles.footer}>
        <h2 className="font-600 text-2xl">Não encontrou seu duo?</h2>
        <p className="text-zinc-400">
          Publique um anuncio para encontrar novos players!
        </p>

        <button
          className="flex items-center gap-3 px-3 py-2 rounded bg-violet-500 hover:via-violet-600"
          type="button"
        >
          <MagnifyingGlassPlus size={24} />
          publicar anuncio
        </button>
      </footer>
    </>
  );
}

export default App;
