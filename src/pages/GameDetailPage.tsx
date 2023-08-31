import { GridItem, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import useGame from "../hooks/useGame";
import GameAtributes from "../components/GameAtributes";
import GameTrailer from "../components/GameTrailer";
import GameScreenshots from "../components/GameScreenshots";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug || ""); //! appending a ! typescript will know the constant will never be null

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
      <GridItem>
        <Heading>{game.name}</Heading>
        <ExpandableText>{game.description_raw}</ExpandableText>
        <GameAtributes game={game} />
      </GridItem>
      <GridItem>
        <GameScreenshots gameId={game.id} />
        {/* <GameTrailer gameId={game.id} /> */}
      </GridItem>
    </SimpleGrid>
  );
};

export default GameDetailPage;
