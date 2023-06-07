import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}

function App() {
  //Replacing current states with a Query object:
  // const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  // const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
  //   null
  // );

  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            // selectedGenre={selectedGenre}
            // onSelectGenre={(genre) => setSelectedGenre(genre)}
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </GridItem>
      </Show>
      <GridItem area="main" marginX={2}>
        <HStack spacing={5} paddingLeft={2} marginBottom={5}>
          <PlatformSelector
            // selectedPlatform={selectedPlatform}
            // onSelectPlatform={(platform) => setSelectedPlatform(platform)}
            selectedPlatform={gameQuery.platform}
            onSelectPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
          />
          <SortSelector />
        </HStack>
        <GameGrid
          // selectedGenre={selectedGenre}
          // selectedPlatform={selectedPlatform}
          // selectedPlatform={gameQuery.platform} <--- modified when updated the GameGrid component.
          // selectedGenre={gameQuery.genre} <--- modified when updated the GameGrid component.
          gameQuery={gameQuery}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
