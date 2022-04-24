import { FC, ReactNode } from "react";
import Head from "next/head";
import { Navbar } from "../ui";

interface Props {
  title?: string;
  children: ReactNode;
}

export const Layout: FC<Props> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title || "PokemonApp"}</title>
        <meta name="author" content="Luis Mario Amor " />
        <meta
          name="description"
          content={`Informacón sobre el pokémon ${title}`}
        />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />
      </Head>

      <Navbar />

      <main
        style={{
          padding: "0px 20px",
        }}
      >
        {children}
      </main>
    </>
  );
};
