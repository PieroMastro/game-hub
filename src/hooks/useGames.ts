import { Genre } from "./useGenres";
import useData from "./useData";
import { GameQuery } from "../App";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (
  gameQuery: GameQuery
  // selectedGenre: Genre | null,
  // selectedPlatform: Platform | null, <---- replaced for gameQuery object
) =>
  useData<Game>(
    "/games",
    {
      params: {
        // genres: selectedGenre?.id,
        // platforms: selectedPlatform?.id,
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
      },
    },
    // [selectedGenre?.id, selectedPlatform?.id]
    [gameQuery]
  );

export default useGames;
