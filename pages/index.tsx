import { Button } from "@nextui-org/react";
import type { NextPage } from "next";
import { Layout } from "../components/layouts";

const HomePage: NextPage = () => {
  return (
    <Layout title="Listado de Pokémons">
      <Button>Hola Mundo</Button>
    </Layout>
  );
};

export default HomePage;
