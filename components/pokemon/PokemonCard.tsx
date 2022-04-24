import { Card, Grid, Row, Text } from "@nextui-org/react";
import { useRouter } from "next/router";
import { FC } from "react";
import { SmallPokemon } from "../../interfaces";

interface Props {
  pokemon: SmallPokemon;
}

export const PokemonCard: FC<Props> = ({ pokemon }) => {
  const { name, id, img } = pokemon;

  const router = useRouter();

  const onClick = () => {
    router.push(`/pokemon/${id}`);
  };

  return (
    <Grid xs={12} sm={6} md={4} xl={2} key={id}>
      <Card onClick={onClick} hoverable clickable>
        <Card.Body css={{ p: 1 }}>
          <Card.Image src={img} width="100" height={140} />
        </Card.Body>
        <Card.Footer>
          <Row justify="space-between">
            <Text transform="capitalize">{name}</Text>
            <Text>#{id}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
};
