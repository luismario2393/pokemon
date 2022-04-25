import { Card, Grid } from "@nextui-org/react";
import { useRouter } from "next/router";

export const FavoriteCardPokemon = ({ pokemonId }: { pokemonId: number }) => {
  const router = useRouter();

  const onFavoriteClicked = () => {
    router.push(`/pokemon/${pokemonId}`);
  };

  return (
    <Grid xs={6} sm={3} xl={1} onClick={onFavoriteClicked}>
      <Card hoverable clickable css={{ padding: 10 }}>
        <Card.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
          width="100%"
          height={140}
        ></Card.Image>
      </Card>
    </Grid>
  );
};
